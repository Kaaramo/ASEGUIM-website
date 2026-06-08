import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { TALENTS } from "@/data/aseguim";

const CAT_COLOR: Record<string, string> = {
  Académique: "bg-orange",
  Scientifique: "bg-green-700",
  Culturel: "bg-yellow text-ink",
};

export function TalentsPreview() {
  const featured = TALENTS.slice(0, 3);
  return (
    <section className="px-3 py-3">
      <div className="rounded-[2rem] bg-green-200">
        <div className="container-careloop section-y">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              tag="ASEGUIM Talents"
              title="La fierté de notre communauté"
              text="Ce sont bien plus que des réalisations : ce sont des preuves d'engagement et de passion."
            />
            <Reveal>
              <Pill href="/talents" variant="dark" size="md" arrow>
                Tous les talents
              </Pill>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((t, i) => (
              <Reveal key={t.nom} delay={i * 90}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${CAT_COLOR[t.categorie] ?? "bg-ink"}`}>
                      {t.categorie}
                    </span>
                    <span className="text-sm font-semibold text-green-600">{t.annee}</span>
                  </div>
                  <span className="mt-6 grid size-12 place-items-center rounded-2xl bg-cream text-orange">
                    <GraduationCap className="size-6" />
                  </span>
                  <h3 className="mt-4 font-sans text-lg font-bold text-ink">{t.nom}</h3>
                  <p className="mt-2 flex-1 text-sm text-green-600">{t.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
