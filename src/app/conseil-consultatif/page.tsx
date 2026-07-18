import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";

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
        <div className="container-careloop">
          <Reveal className="mx-auto max-w-2xl rounded-[2rem] bg-ink px-8 py-16 text-center text-cream sm:px-14 sm:py-20">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-orange text-white">
              <Sparkles className="size-8" />
            </span>
            <span className="mt-6 inline-block rounded-full bg-cream/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cream">
              Mandat 2026-2027
            </span>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl">Arrive bientôt</h2>
            <p className="mt-4 text-cream/80">
              La composition du Conseil Consultatif pour le mandat 2026-2027 sera dévoilée prochainement.
            </p>
          </Reveal>
        </div>
      </section>
      <CtaBanner ctaLabel="Adhérer" ctaHref="/adhesion" title="Faites partie de l'aventure ASEGUIM" text="Rejoignez le plus grand réseau étudiant guinéen au Maroc." />
    </>
  );
}
