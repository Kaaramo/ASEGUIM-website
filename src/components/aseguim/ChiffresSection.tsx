"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CHIFFRES } from "@/data/aseguim";

function ChiffreCard({ valeur, suffixe, titre, detail }: (typeof CHIFFRES)[number]) {
  const { ref, value } = useCountUp(valeur);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 text-center">
      <div className="font-display text-[clamp(3rem,7vw,5rem)] leading-none text-cream">
        {value.toLocaleString("fr-FR")}
        {suffixe}
      </div>
      <p className="mt-4 text-base font-bold uppercase tracking-wide text-cream">{titre}</p>
      <p className="mt-1 text-sm text-cream/60">{detail}</p>
    </div>
  );
}

export function ChiffresSection() {
  return (
    <section className="px-3 py-3">
      <div className="overflow-hidden rounded-[2rem] bg-ink">
        <div className="container-careloop section-y">
          <SectionHeading align="center" tone="cream" tag="L'ASEGUIM en chiffres" title="L'un des plus grands réseaux étudiants guinéens à l'étranger" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHIFFRES.map((c, i) => (
              <Reveal key={c.titre} delay={i * 90}>
                <ChiffreCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
