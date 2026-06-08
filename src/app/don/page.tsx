import type { Metadata } from "next";
import { Target, Home, Utensils, Users } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DonForm } from "@/components/forms/DonForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Faire un don — ASEGUIM",
  description: "Votre soutien à l'ASEGUIM est un investissement dans l'avenir des étudiants guinéens au Maroc.",
};

const UTILITES = [
  { Icon: Target, titre: "Activités", texte: "Soutient les activités organisées" },
  { Icon: Home, titre: "Logement", texte: "Aide au logement étudiant" },
  { Icon: Utensils, titre: "Alimentation", texte: "Assure une alimentation saine" },
  { Icon: Users, titre: "Réseautage", texte: "Facilite le networking" },
];

export default function Don() {
  return (
    <>
      <PageHeader
        tag="Faire un don"
        title="Faire un don"
        subtitle="Votre soutien à l'ASEGUIM est un investissement dans un avenir où les étudiants guinéens au Maroc bénéficient d'un riche réseau social et de soutien."
      />

      <section className="section-y pt-0">
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="grid grid-cols-2 gap-4">
              {UTILITES.map((u, i) => (
                <Reveal key={u.titre} delay={(i % 2) * 80}>
                  <article className="h-full rounded-3xl bg-white p-6">
                    <span className="grid size-12 place-items-center rounded-2xl bg-cream text-orange">
                      <u.Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 font-sans text-lg font-bold text-ink">{u.titre}</h3>
                    <p className="mt-1 text-sm text-green-600">{u.texte}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <DonForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
