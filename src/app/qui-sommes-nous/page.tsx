import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeamCard } from "@/components/shared/TeamCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { HISTOIRE, VISION, BUREAU } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Qui sommes-nous — ASEGUIM",
  description: "L'histoire, la vision et le Bureau Exécutif Central de l'ASEGUIM.",
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
      </section>

      <section className="section-y pt-0">
        <div className="container-careloop">
          <SectionHeading
            align="center"
            tag="Bureau Exécutif Central"
            title="Le Bureau Exécutif Central de l'ASEGUIM"
            text="L'équipe qui pilote l'association au service de la communauté estudiantine."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUREAU.map((m, i) => (
              <Reveal key={m.nom} delay={(i % 3) * 80}>
                <TeamCard name={m.nom} role={m.role} image={m.image} />
              </Reveal>
            ))}
          </div>
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
