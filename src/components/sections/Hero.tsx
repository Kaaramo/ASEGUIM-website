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

    const tryPlay = () => {
      const p = video.play();
      if (p) p.catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);

    // Filet de sécurité : si l'autoplay est bloqué (mode éco iOS, etc.), on
    // relance à la première interaction de l'utilisateur, puis on se nettoie.
    const onFirstInteract = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("scroll", onFirstInteract);
      window.removeEventListener("pointerdown", onFirstInteract);
    };
    window.addEventListener("touchstart", onFirstInteract, { passive: true });
    window.addEventListener("scroll", onFirstInteract, { passive: true });
    window.addEventListener("pointerdown", onFirstInteract);

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("scroll", onFirstInteract);
      window.removeEventListener("pointerdown", onFirstInteract);
    };
  }, []);

  return (
    <section className="px-0 sm:px-3">
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

        {/* Dégradé mobile : vertical, lisibilité du texte en bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/15 sm:hidden" />
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
