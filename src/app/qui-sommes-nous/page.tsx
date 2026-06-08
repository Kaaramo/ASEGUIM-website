import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { HISTOIRE, VISION } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Qui sommes-nous — ASEGUIM",
  description: "L'histoire et la vision de l'ASEGUIM, depuis 1981.",
};

export default function QuiSommesNous() {
  return (
    <>
      <PageHeader
        tag="Qui sommes-nous"
        title="Une histoire d'excellence depuis 1981"
        subtitle="Première association guinéenne reconnue par les autorités marocaines, un pilier pour plus de 1100 étudiants."
      />

      <section className="section-y pt-0">
        <div className="container-careloop grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-white p-8 sm:p-10">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">{HISTOIRE.titre}</h2>
            <div className="mt-5 space-y-4 text-green-600">
              {HISTOIRE.paragraphes.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={120} className="rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
            <h2 className="font-display text-3xl text-cream sm:text-4xl">{VISION.titre}</h2>
            <div className="mt-5 space-y-4 text-cream/80">
              {VISION.paragraphes.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>

        <Reveal className="container-careloop mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-green-200 px-8 py-8">
          <p className="font-display text-2xl text-ink sm:text-3xl">
            Découvrez l'équipe qui pilote l'association
          </p>
          <Pill href="/bureau-executif" variant="dark" size="md" arrow>
            Le Bureau Exécutif
          </Pill>
        </Reveal>
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
