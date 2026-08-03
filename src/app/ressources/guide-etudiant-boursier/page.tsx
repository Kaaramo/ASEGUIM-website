import type { Metadata } from "next";
import { BookOpen, Compass, FileText, GraduationCap, MessageCircle, ShieldCheck, Sparkles, Target } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { GUIDE_BOURSIER, ASEGUIM_2040 } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Guide de l'Étudiant Guinéen Boursier au Maroc — ASEGUIM",
  description:
    "Le guide de référence de l'ASEGUIM pour les étudiants guinéens boursiers d'État au Maroc : arriver, s'installer, s'orienter et réussir.",
};

const ATOUTS = [
  {
    icon: Compass,
    titre: "S'orienter sans se perdre",
    texte:
      "Les repères essentiels sur le paysage de l'enseignement supérieur marocain : villes, établissements et voies d'accès.",
  },
  {
    icon: ShieldCheck,
    titre: "Une source fiable",
    texte:
      "Un document porté par l'ASEGUIM, écrit par ceux qui ont fait le chemin avant vous — plutôt que le bouche-à-oreille.",
  },
  {
    icon: BookOpen,
    titre: "À garder sous la main",
    texte:
      "Un guide que l'on consulte le jour de l'arrivée comme au fil de l'année, depuis un téléphone ou un ordinateur.",
  },
];

const POINTS_2040 = [
  {
    icon: GraduationCap,
    titre: "Il connaît votre dossier",
    texte:
      "À partir de votre numéro de PV, l'assistant retrouve votre nom, votre rang, votre mention et votre option dans la liste officielle des boursiers.",
  },
  {
    icon: Target,
    titre: "Des attentes réalistes",
    texte:
      "L'accès aux écoles ne dépend pas que de la mention : il tient compte du classement relatif et des quotas par option, qui varient chaque année.",
  },
  {
    icon: Sparkles,
    titre: "Plusieurs voies, pas un verdict",
    texte:
      "Classe préparatoire, école d'ingénieurs à prépa intégrée, voie universitaire : chaque piste est nommée et argumentée. Vous gardez la main.",
  },
  {
    icon: MessageCircle,
    titre: "Disponible quand vous y pensez",
    texte:
      "Une conversation en français, sur mobile, à laquelle vous revenez autant de fois que nécessaire pendant votre réflexion.",
  },
];

export default function GuideEtudiantBoursier() {
  return (
    <>
      <PageHeader
        tag="Ressources"
        title={GUIDE_BOURSIER.titre}
        subtitle="Le document de référence de l'ASEGUIM pour accompagner les étudiants guinéens boursiers d'État, de leur arrivée au Maroc à leur réussite académique."
      />

      <section className="section-y pt-0">
        <div className="container-careloop">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[0.98] text-ink">
                Arriver préparé, décider en connaissance de cause
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-green-600">
                <p>
                  Partir étudier dans un autre pays à dix-huit ans est une décision lourde, prise en quelques semaines,
                  souvent sans conseiller d'orientation ni réseau sur place. Les informations existent, mais elles sont
                  dispersées, contradictoires, et circulent surtout de bouche à oreille.
                </p>
                <p>
                  Ce guide rassemble en un seul document ce que la communauté ASEGUIM a appris en plus de quarante ans
                  de présence au Maroc. Il s'adresse en priorité aux nouveaux bacheliers boursiers d'État, mais reste
                  utile à tout étudiant guinéen déjà installé.
                </p>
                <p>
                  Prenez le temps de le lire avant votre départ, puis gardez-le à portée de main : il répond aux
                  questions qui reviennent chaque année, et vous évite de les découvrir au mauvais moment.
                </p>
              </div>

              <ul className="mt-10 space-y-5">
                {ATOUTS.map((a) => (
                  <li key={a.titre} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-green-200 text-green-700">
                      <a.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-bold text-ink">{a.titre}</h3>
                      <p className="mt-1 text-green-600">{a.texte}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Carte « document » : accès direct au PDF, consultable dans un nouvel onglet. */}
            <Reveal delay={120} className="lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-[2rem] bg-ink p-8 text-cream shadow-[0_20px_60px_rgba(17,42,32,0.25)] sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow">
                  <FileText className="size-3.5" aria-hidden />
                  Document PDF
                </span>
                <h3 className="mt-6 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1] text-cream">
                  {GUIDE_BOURSIER.titre}
                </h3>
                <p className="mt-4 text-cream/70">
                  Consultable en ligne, gratuitement, sans inscription. Le guide s'ouvre dans un nouvel onglet et peut
                  être téléchargé pour une lecture hors connexion.
                </p>
                <Pill href={GUIDE_BOURSIER.href} variant="orange" size="lg" arrow external className="mt-8 w-full sm:w-auto">
                  Consulter le guide
                </Pill>
                <p className="mt-5 text-xs text-cream/50">Édité par l'ASEGUIM · Hébergé sur Google Drive</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pour aller plus loin — ASEGUIM 2040 (plateforme distincte du site) */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <Reveal>
            <div className="rounded-[2rem] bg-white px-6 py-14 sm:px-12 sm:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
                  Pour aller plus loin
                </span>
                <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] text-ink">
                  {ASEGUIM_2040.nom}, votre assistant d'orientation
                </h2>
                <p className="mt-5 text-lg text-green-600">
                  Le guide pose les bases. Pour la suite, l'ASEGUIM met à disposition un assistant conversationnel dopé
                  à l'intelligence artificielle, dédié aux nouveaux bacheliers boursiers qui doivent désormais choisir
                  eux-mêmes leur filière et leur établissement au Maroc.
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10">
                {POINTS_2040.map((p, i) => (
                  <Reveal key={p.titre} delay={i * 80}>
                    <span className="grid size-11 place-items-center rounded-2xl bg-green-200 text-green-700">
                      <p.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-sans text-lg font-bold text-ink">{p.titre}</h3>
                    <p className="mt-2 text-green-600">{p.texte}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={160} className="mx-auto mt-12 max-w-3xl rounded-[1.5rem] bg-cream p-6 text-center sm:p-8">
                <p className="font-display text-xl tracking-wide text-ink sm:text-2xl">
                  « Mettre notre expertise au service de la nation. »
                </p>
                <p className="mt-3 text-sm text-green-600">
                  {ASEGUIM_2040.nom} est un projet d'intérêt général financé par le SNABE. C'est une plateforme
                  indépendante, distincte du site de l'ASEGUIM.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3">
                  {ASEGUIM_2040.enLigne ? (
                    <Pill href={ASEGUIM_2040.href} variant="dark" size="lg" arrow external>
                      Ouvrir {ASEGUIM_2040.domaine}
                    </Pill>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-cream">
                        <Sparkles className="size-4 text-yellow" aria-hidden />
                        Bientôt disponible
                      </span>
                      <span className="font-mono text-sm text-green-700">{ASEGUIM_2040.domaine}</span>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Une question qui n'est pas dans le guide ?"
        text="L'ASEGUIM et ses bureaux régionaux sont là pour vous répondre, de votre arrivée à votre diplôme."
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />
    </>
  );
}
