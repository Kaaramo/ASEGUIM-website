import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { BUREAU } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Bureau Exécutif Central — ASEGUIM",
  description: "Le Bureau Exécutif Central de l'ASEGUIM : l'équipe qui pilote l'association.",
};

export default function BureauExecutif() {
  return (
    <>
      <PageHeader
        tag="Bureau Exécutif Central"
        title="Le Bureau Exécutif Central de l'ASEGUIM"
        subtitle="L'équipe qui pilote l'association au service de la communauté estudiantine."
      />
      <section className="section-y pt-0">
        <div className="container-careloop grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUREAU.map((m, i) => (
            <Reveal key={m.nom} delay={(i % 3) * 80}>
              <TeamCard name={m.nom} role={m.role} image={m.image} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner
        title="Rejoignez notre communauté"
        text="Devenez membre officiel de l'ASEGUIM et participez à façonner l'avenir."
        ctaLabel="Adhérer"
        ctaHref="/adhesion"
      />
    </>
  );
}
