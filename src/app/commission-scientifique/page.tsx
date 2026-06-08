import type { Metadata } from "next";
import { Video, Mic, CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { COMMISSION_SCIENTIFIQUE as CS } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Commission Scientifique Nationale — ASEGUIM",
  description: CS.mission,
};

const INIT_ICONS = [Video, Mic, CalendarDays];

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function CommissionScientifique() {
  return (
    <>
      <PageHeader tag="Commission Scientifique Nationale" title={CS.titre} subtitle={CS.mission} />

      {/* Objectif */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <Reveal className="mx-auto max-w-3xl rounded-[2rem] bg-ink p-10 text-center text-cream">
            <span className="text-xs font-bold uppercase tracking-wider text-cream/60">Notre objectif</span>
            <p className="mt-4 font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight">{CS.objectif}</p>
          </Reveal>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <SectionHeading align="center" tag="Nos initiatives" title="Ce que nous organisons" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CS.initiatives.map((it, i) => {
              const Icon = INIT_ICONS[i] ?? Video;
              return (
                <Reveal key={it.titre} delay={i * 90}>
                  <article className="h-full rounded-3xl bg-white p-8">
                    <span className="grid size-14 place-items-center rounded-2xl bg-orange text-white">
                      <Icon className="size-7" />
                    </span>
                    <h3 className="mt-6 font-sans text-xl font-bold text-ink">{it.titre}</h3>
                    <p className="mt-3 text-green-600">{it.texte}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journée */}
      <section className="px-3 py-3">
        <div className="rounded-[2rem] bg-green-200">
          <div className="container-careloop section-y text-center">
            <SectionHeading align="center" tag="Événement phare" title={CS.journee.titre} text={CS.journee.texte} />
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-y">
        <div className="container-careloop">
          <SectionHeading align="center" tag="L'équipe" title="L'équipe de la Commission Scientifique Nationale" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CS.equipe.map((m, i) => (
              <Reveal key={m.nom} delay={(i % 3) * 70}>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink font-display text-lg text-cream">
                    {initials(m.nom)}
                  </span>
                  <div>
                    <p className="font-sans font-bold text-ink">{m.nom}</p>
                    <p className="text-sm text-green-600">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Rejoignez notre communauté scientifique"
        text="Participez à nos événements et développez vos compétences avec la Commission Scientifique Nationale."
        ctaLabel="Nous rejoindre"
        ctaHref="/adhesion"
      />
    </>
  );
}
