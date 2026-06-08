import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { TalentsGrid } from "@/components/aseguim/TalentsGrid";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "ASEGUIM Talents — ASEGUIM",
  description: "La fierté de notre communauté : les talents académiques, scientifiques et culturels de l'ASEGUIM.",
};

export default function Talents() {
  return (
    <>
      <PageHeader
        tag="ASEGUIM Talents"
        title="La fierté de notre communauté"
        subtitle="Ce sont bien plus que des réalisations : ce sont des preuves de leur engagement et de leur passion. Venez les découvrir."
      />
      <section className="section-y pt-0">
        <div className="container-careloop">
          <TalentsGrid />
        </div>
      </section>
      <CtaBanner
        title="Vous aussi, brillez avec l'ASEGUIM"
        text="Rejoignez une communauté qui valorise l'excellence et révèle les talents."
        ctaLabel="Adhérer"
        ctaHref="/adhesion"
      />
    </>
  );
}
