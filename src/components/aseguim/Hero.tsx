import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/aseguim";

export function Hero() {
  return (
    <section className="px-3">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink">
        {/* Vidéo bannière de l'association */}
        <video
          className="absolute inset-0 size-full object-cover"
          src={SITE.banniereVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={SITE.logo}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30" />

        <div className="container-careloop relative flex min-h-[80vh] flex-col justify-end pb-16 pt-32">
          <Reveal>
            <span className="inline-block rounded-full bg-cream/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cream">
              {SITE.slogan}
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
