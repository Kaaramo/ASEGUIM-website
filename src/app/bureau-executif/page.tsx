import type { Metadata } from "next";
import { Crown } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { OrgFanConnector, OrgColumnsConnector } from "@/components/shared/OrgConnector";
import { BUREAU } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Bureau Exécutif Central — ASEGUIM",
  description: "Le Bureau Exécutif Central de l'ASEGUIM : l'équipe qui pilote l'association.",
};

export default function BureauExecutif() {
  const featured = BUREAU.find((m) => m.featured);
  const row1 = BUREAU.filter((m) => !m.featured).slice(0, 3);
  const row2 = BUREAU.filter((m) => !m.featured).slice(3, 6);

  return (
    <>
      <PageHeader
        tag="Bureau Exécutif Central"
        title="Le Bureau Exécutif Central de l'ASEGUIM"
        subtitle="L'équipe qui pilote l'association au service de la communauté estudiantine."
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

          <OrgFanConnector />

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {row1.map((m, i) => {
              // Sur mobile (une seule colonne), le SGA doit apparaître avant la chargée de communication.
              // À partir de sm: (grille multi-colonnes), on revient à l'ordre d'origine.
              const ORDER_CLASSES = [
                "order-2 sm:order-1", // MARA — Chargée de communication
                "order-1 sm:order-2", // KEÏTA — Secrétaire général Adjoint
                "order-3 sm:order-3", // LOUA — Chargé Scientifique
              ];
              return (
                <Reveal key={m.nom} delay={(i % 3) * 80} className={ORDER_CLASSES[i]}>
                  <TeamCard name={m.nom} role={m.role} image={m.image} />
                </Reveal>
              );
            })}
          </div>

          <OrgColumnsConnector />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-10">
            {row2.map((m, i) => (
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
