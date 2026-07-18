"use client";

import { useEffect, useRef } from "react";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/aseguim";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Certains navigateurs mobiles (économie de données, gestes requis)
    // ignorent l'autoplay déclaratif : on force la lecture en boucle au montage.
    const video = videoRef.current;
    if (!video) return;
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
    <section className="px-3">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink">
        {/* Vidéo bannière de l'association — source allégée sur mobile pour une lecture fluide en boucle */}
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          poster={SITE.banniereVideoPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={SITE.banniereVideoMobile} media="(max-width: 767px)" type="video/mp4" />
          <source src={SITE.banniereVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30" />

        <div className="container-careloop relative flex min-h-[80vh] flex-col justify-end pb-16 pt-32">
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
