import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { CONSEIL_CONSULTATIF } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Conseil Consultatif — ASEGUIM",
  description: "Le Conseil Consultatif de l'ASEGUIM.",
};

export default function ConseilConsultatif() {
  return (
    <>
      <PageHeader
        tag="Conseil Consultatif"
        title="Le Conseil Consultatif de l'ASEGUIM"
        subtitle="L'instance suprême de l'ASEGUIM : garante des statuts, elle convoque l'Assemblée Générale, organise les élections et veille à la continuité et à l'intégrité de l'association."
      />
      <section className="section-y pt-0">
        <div className="container-careloop grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONSEIL_CONSULTATIF.map((m, i) => (
            <Reveal key={m.nom} delay={i * 90}>
              <TeamCard name={m.nom} role={m.role} image={m.image} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner ctaLabel="Adhérer" ctaHref="/adhesion" title="Faites partie de l'aventure ASEGUIM" text="Rejoignez le plus grand réseau étudiant guinéen au Maroc." />
    </>
  );
}
