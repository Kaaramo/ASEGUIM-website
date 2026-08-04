import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GraduationCap, MessageCircle, Sparkles, Target } from "lucide-react";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { ASEGUIM_2040 } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "ASEGUIM 2040 — L'assistant d'orientation des boursiers guinéens",
  description:
    "Un assistant IA qui aide les nouveaux bacheliers boursiers d'État à choisir leur filière et leur établissement au Maroc.",
  alternates: { canonical: "/aseguim-2040" },
};

const ETAPES = [
  { num: "01", titre: "Votre numéro de PV", texte: "L'assistant retrouve votre rang, votre mention et votre option." },
  { num: "02", titre: "La conversation", texte: "Vos matières fortes, vos centres d'intérêt, vos contraintes de ville." },
  { num: "03", titre: "Vos voies possibles", texte: "Plusieurs pistes argumentées, avec des attentes réalistes." },
];

const POINTS = [
  { icon: GraduationCap, titre: "Il connaît votre dossier", texte: "Rang, mention et option issus de la liste officielle des boursiers." },
  { icon: Target, titre: "Des attentes réalistes", texte: "Le classement relatif et les quotas par option, pas seulement la mention." },
  { icon: Sparkles, titre: "Plusieurs voies", texte: "Prépa, école à prépa intégrée, université : chaque piste argumentée." },
  { icon: MessageCircle, titre: "Quand vous voulez", texte: "En français, sur mobile comme sur ordinateur." },
];

export default function Aseguim2040() {
  if (!ASEGUIM_2040.visible) notFound();

  return (
    <>
      {/* Hero sombre, dédié : la page doit se distinguer du reste du site. */}
      <section className="section-y pt-12">
        <div className="container-careloop">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-20 text-center text-cream sm:px-12 sm:py-28">
            <div
              className="pointer-events-none absolute -top-1/2 left-1/2 aspect-square w-[140%] -translate-x-1/2 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, rgba(239,86,44,0.35) 0%, transparent 60%)" }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-3xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow">
                  <Sparkles className="size-3.5" aria-hidden />
                  Nouveau · Orientation 2026-2027
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] text-cream">
                  {ASEGUIM_2040.nom}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mx-auto mt-6 max-w-xl text-lg text-cream/70">
                  L&apos;assistant d&apos;orientation des nouveaux bacheliers boursiers d&apos;État. Il connaît votre
                  dossier, les écoles marocaines et les réalités d&apos;accès.
                </p>
              </Reveal>
              <Reveal delay={200} className="mt-10 flex flex-col items-center gap-3">
                {ASEGUIM_2040.enLigne ? (
                  <>
                    <Pill href={ASEGUIM_2040.href} variant="orange" size="lg" arrow external>
                      Discuter avec {ASEGUIM_2040.nom}
                    </Pill>
                    <span className="font-mono text-sm text-cream/50">{ASEGUIM_2040.domaine}</span>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-6 py-3 font-semibold text-cream">
                      <Sparkles className="size-4 text-yellow" aria-hidden />
                      Bientôt disponible
                    </span>
                    <span className="font-mono text-sm text-cream/50">{ASEGUIM_2040.domaine}</span>
                  </>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <Reveal className="max-w-2xl">
            <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
              En trois temps
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-ink">
              Une conversation, pas un formulaire
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {ETAPES.map((e, i) => (
              <Reveal key={e.num} delay={i * 80}>
                <span className="font-display text-[clamp(3rem,6vw,4.5rem)] leading-none text-ink/15">{e.num}</span>
                <h3 className="mt-3 font-sans text-lg font-bold text-ink">{e.titre}</h3>
                <p className="mt-2 text-green-600">{e.texte}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'il sait faire */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <div className="rounded-[2rem] bg-white px-6 py-14 sm:px-12 sm:py-20">
            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10">
              {POINTS.map((p, i) => (
                <Reveal key={p.titre} delay={i * 80}>
                  <span className="grid size-11 place-items-center rounded-2xl bg-green-200 text-green-700">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-sans text-lg font-bold text-ink">{p.titre}</h3>
                  <p className="mt-2 text-green-600">{p.texte}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160} className="mx-auto mt-12 max-w-3xl text-center">
              <p className="font-display text-xl tracking-wide text-ink sm:text-2xl">
                « Mettre notre expertise au service de la nation. »
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Commencez par le guide"
        text="105 pages sur la bourse, les universités et la vie étudiante au Maroc."
        ctaLabel="Consulter le guide"
        ctaHref="/ressources/guide-etudiant-boursier"
      />
    </>
  );
}
