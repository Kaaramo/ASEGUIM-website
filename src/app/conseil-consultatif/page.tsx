import type { Metadata } from "next";
import { Crown } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { OrgFanConnectorPair } from "@/components/shared/OrgConnector";
import { CONSEIL_CONSULTATIF } from "@/data/aseguim";

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
          <Reveal className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-cream shadow-[0_10px_30px_rgba(17,42,32,0.2)]">
            <Crown className="size-5 text-orange" />
            <span className="font-display text-lg tracking-wide sm:text-xl">Mandat 2026-2027</span>
          </Reveal>

          {featured && (
            <Reveal>
              <div className="mx-auto max-w-sm">
                <TeamCard name={featured.nom} role={featured.role} image={featured.image} featured />
              </div>
            </Reveal>
          )}

          <OrgFanConnectorPair />

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {membres.map((m, i) => (
              <Reveal key={m.nom} delay={i * 80}>
                <TeamCard name={m.nom} role={m.role} image={m.image} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner ctaLabel="Adhérer" ctaHref="/adhesion" title="Faites partie de l'aventure ASEGUIM" text="Rejoignez le plus grand réseau étudiant guinéen au Maroc." />
    </>
  );
}
