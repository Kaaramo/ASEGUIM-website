"use client";

import { useEffect, useRef } from "react";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/aseguim";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Le support de <source media="..."> est peu fiable sur mobile : on choisit
    // la source explicitement en JS (légère sur mobile, HD sur desktop).
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const desiredSrc = isDesktop ? SITE.banniereVideo : SITE.banniereVideoMobile;
    if (!video.currentSrc || !video.currentSrc.endsWith(desiredSrc)) {
      video.src = desiredSrc;
      video.load();
    }

    // iOS/Android n'autorisent l'autoplay que si la vidéo est RÉELLEMENT muette
    // et jouée inline. La prop React `muted` n'est pas toujours reflétée sur le
    // DOM : on force la propriété + l'attribut en JS.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.playsInline = true;
    video.loop = true;

    // Boucle robuste et sans faille : on ne se repose pas uniquement sur
    // l'attribut `loop` (ignoré par certains navigateurs mobiles après un
    // "stall"). On relance dès que la vidéo se met en pause, se termine ou
    // se bloque, et un watchdog vérifie en continu qu'elle tourne toujours.
    const keepPlaying = () => {
      if (document.hidden) return; // on laisse le navigateur mettre en pause quand l'onglet est masqué
      if (video.ended || video.currentTime >= (video.duration || Infinity) - 0.05) {
        video.currentTime = 0;
      }
      if (video.paused) {
        const p = video.play();
        if (p) p.catch(() => {});
      }
    };

    const onEnded = () => {
      video.currentTime = 0;
      keepPlaying();
    };

    keepPlaying();
    video.addEventListener("loadedmetadata", keepPlaying);
    video.addEventListener("canplay", keepPlaying);
    video.addEventListener("ended", onEnded);
    video.addEventListener("pause", keepPlaying);
    video.addEventListener("stalled", keepPlaying);
    video.addEventListener("waiting", keepPlaying);
    document.addEventListener("visibilitychange", keepPlaying);

    // Filet de sécurité : si l'autoplay reste bloqué (mode éco iOS, etc.), on
    // relance à la première interaction de l'utilisateur.
    const onFirstInteract = () => {
      keepPlaying();
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("scroll", onFirstInteract);
      window.removeEventListener("pointerdown", onFirstInteract);
    };
    window.addEventListener("touchstart", onFirstInteract, { passive: true });
    window.addEventListener("scroll", onFirstInteract, { passive: true });
    window.addEventListener("pointerdown", onFirstInteract);

    // Watchdog : garantit une lecture ininterrompue même si un événement est manqué.
    const watchdog = window.setInterval(keepPlaying, 1500);

    return () => {
      window.clearInterval(watchdog);
      video.removeEventListener("loadedmetadata", keepPlaying);
      video.removeEventListener("canplay", keepPlaying);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("pause", keepPlaying);
      video.removeEventListener("stalled", keepPlaying);
      video.removeEventListener("waiting", keepPlaying);
      document.removeEventListener("visibilitychange", keepPlaying);
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("scroll", onFirstInteract);
      window.removeEventListener("pointerdown", onFirstInteract);
    };
  }, []);

  return (
    // Mobile : la bannière remonte sous le bandeau de contact pour que le logo
    // et le menu reposent directement sur la vidéo (pas d'espace crème avant).
    <section className="-mt-[72px] px-0 sm:mt-0 sm:px-3">
      {/*
        Mobile  : plein cadre, hauteur stable (svh — ne bouge pas au scroll),
                  la vidéo couvre toute la bannière.
        Desktop : carte arrondie moderne conservée.
      */}
      <div className="relative overflow-hidden rounded-none bg-ink sm:rounded-[2rem]">
        {/* Vidéo bannière — source allégée choisie en JS, plein écran sur mobile */}
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          poster={SITE.banniereVideoPoster}
          src={SITE.banniereVideoMobile}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
        />

        {/* Voile haut (mobile) : lisibilité du logo + menu posés sur la vidéo */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/75 via-ink/25 to-transparent sm:hidden" />
        {/* Dégradé mobile : vertical, lisibilité du texte en bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/10 sm:hidden" />
        {/* Dégradé desktop : horizontal depuis la gauche */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30 sm:block" />

        <div className="container-careloop relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:min-h-[80vh]">
          <Reveal>
            <span className="inline-block rounded-full bg-cream/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cream">
              {SITE.devise}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-[16ch] font-display text-cream text-[clamp(3rem,8vw,7.5rem)] leading-[0.94] tracking-tight">
              {SITE.accroche}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-cream/85">{SITE.sousTitre}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Pill href="/adhesion" variant="orange" size="lg" arrow>
                Adhérer à l'ASEGUIM
              </Pill>
              <Pill href="/qui-sommes-nous" variant="cream" size="lg">
                Découvrir
              </Pill>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
