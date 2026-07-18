"use client";

import { useEffect, useRef } from "react";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/aseguim";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Le support de <source media="..."> est peu fiable sur mobile : on choisit
    // la source explicitement en JS, ce qui garantit une lecture fiable.
    const video = videoRef.current;
    if (!video) return;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const desiredSrc = isDesktop ? SITE.banniereVideo : SITE.banniereVideoMobile;
    if (!video.currentSrc || !video.currentSrc.endsWith(desiredSrc)) {
      video.src = desiredSrc;
      video.load();
    }
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, []);

  return (
    <section className="px-0 sm:px-3">
      <div className="relative overflow-hidden rounded-none bg-ink sm:rounded-[2rem]">
        {/* Vidéo bannière de l'association — plein écran sur mobile, source allégée choisie en JS */}
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
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30" />

        <div className="container-careloop relative flex min-h-[100dvh] flex-col justify-end pb-16 pt-32 sm:min-h-[80vh]">
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
