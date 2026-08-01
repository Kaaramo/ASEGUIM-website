import type { Metadata } from "next";
import { Crown } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { OrgFanConnectorPair } from "@/components/shared/OrgConnector";
import { CONSEIL_CONSULTATIF, CONSEIL_CONSULTATIF_FACEBOOK } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Conseil Consultatif — ASEGUIM",
  description: "Le Conseil Consultatif de l'ASEGUIM.",
};

export default function ConseilConsultatif() {
  const featured = CONSEIL_CONSULTATIF.find((m) => m.featured);
  const membres = CONSEIL_CONSULTATIF.filter((m) => !m.featured);

  return (
    <>
      <PageHeader
        tag="Conseil Consultatif"
        title="Le Conseil Consultatif de l'ASEGUIM"
        subtitle="L'instance suprême de l'ASEGUIM : garante des statuts, elle convoque l'Assemblée Générale, organise les élections et veille à la continuité et à l'intégrité de l'association."
      />
      <section className="section-y pt-0">
        <div className="container-careloop">
          <Reveal className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-cream shadow-[0_10px_30px_rgba(17,42,32,0.2)] sm:mb-12">
            <Crown className="size-5 text-orange" />
            <span className="font-display text-lg tracking-wide sm:text-xl">Mandat 2026-2027</span>
          </Reveal>

          {featured && (
            <Reveal>
              <div className="mx-auto max-w-sm">
                <TeamCard name={featured.nom} role={featured.role} image={featured.image} phone={featured.tel} featured />
              </div>
            </Reveal>
          )}

          <OrgFanConnectorPair />

          {/* Le connecteur d'organigramme est masqué sous lg : on rétablit l'espace entre
              le président et les membres avec une marge mobile/tablette. */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:mt-0 lg:gap-10">
            {membres.map((m, i) => (
              <Reveal key={m.nom} delay={i * 80} className="mx-auto w-full max-w-sm">
                <TeamCard name={m.nom} role={m.role} image={m.image} phone={m.tel} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-14 flex flex-col items-center gap-4 text-center sm:mt-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-600">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
              Suivre sur Facebook
            </span>
            <Pill href={CONSEIL_CONSULTATIF_FACEBOOK} variant="dark" size="lg" arrow external>
              Page officielle
            </Pill>
          </Reveal>
        </div>
      </section>
      <CtaBanner ctaLabel="Adhérer" ctaHref="/adhesion" title="Faites partie de l'aventure ASEGUIM" text="Rejoignez le plus grand réseau étudiant guinéen au Maroc." />
    </>
  );
}
