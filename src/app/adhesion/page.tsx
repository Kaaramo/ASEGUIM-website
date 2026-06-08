import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { AdhesionForm } from "@/components/aseguim/AdhesionForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Adhésion — ASEGUIM",
  description: "Devenez membre officiel de l'ASEGUIM (réservé aux étudiants guinéens).",
};

export default function Adhesion() {
  return (
    <>
      <PageHeader
        tag="Adhésion"
        title="Rejoignez l'ASEGUIM"
        subtitle="Remplissez ce formulaire pour devenir un membre officiel de l'ASEGUIM. (Réservé uniquement aux étudiants guinéens.)"
      />
      <section className="section-y pt-0">
        <div className="container-careloop mx-auto max-w-3xl">
          <Reveal>
            <AdhesionForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
