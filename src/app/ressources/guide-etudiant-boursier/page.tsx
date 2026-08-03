import type { Metadata } from "next";
import {
  Award,
  Building2,
  ClipboardList,
  FileText,
  GraduationCap,
  Home,
  Layers,
  MessageCircle,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { GUIDE_BOURSIER, ASEGUIM_2040 } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Guide de l'Étudiant Boursier Guinéen au Maroc — ASEGUIM",
  description:
    "Le guide officiel de l'ASEGUIM Centrale, en partenariat avec le SNABE : 105 pages pour comprendre la bourse, les universités marocaines, les démarches administratives et la vie étudiante au Maroc.",
};

const CHIFFRES = [
  { valeur: "105", label: "pages" },
  { valeur: "08", label: "parties" },
  { valeur: "2026", label: "édition 2026-2027" },
];

/** Sommaire réel du guide (parties I à VIII). */
const SOMMAIRE = [
  {
    num: "I",
    icon: Award,
    titre: "Le programme des bourses",
    texte: "Le SNABE et l'AMCI, l'attribution et le renouvellement de la bourse, les allocations et les avantages.",
  },
  {
    num: "II",
    icon: Layers,
    titre: "Le système d'enseignement supérieur",
    texte: "Licence, master, doctorat : l'organisation des études, les facultés, les grandes écoles et le calendrier académique.",
  },
  {
    num: "III",
    icon: Building2,
    titre: "Les universités publiques",
    texte: "Une cartographie université par université — Rabat, Casablanca, Fès, Meknès, Agadir, Tétouan, Oujda, Kénitra, El Jadida, Settat, Béni Mellal — avec filières et débouchés.",
  },
  {
    num: "IV",
    icon: GraduationCap,
    titre: "Les grandes écoles publiques",
    texte: "Écoles d'ingénieurs, écoles de commerce et instituts spécialisés : ISCAE, INPT, ENSMR, ENA, UM6P et les autres.",
  },
  {
    num: "V",
    icon: Home,
    titre: "La vie du boursier au Maroc",
    texte: "Carte de séjour, inscription, logement en cité universitaire, santé, transport et coût de la vie.",
  },
  {
    num: "VI",
    icon: Users,
    titre: "La communauté guinéenne",
    texte: "L'ASEGUIM, ses bureaux régionaux dans les villes universitaires, la vie associative, culturelle et sportive.",
  },
  {
    num: "VII",
    icon: TrendingUp,
    titre: "Réussir ses études",
    texte: "Méthodes de travail, stages et insertion professionnelle, pour transformer le diplôme en trajectoire.",
  },
  {
    num: "VIII",
    icon: ClipboardList,
    titre: "Annexes",
    texte: "Contacts utiles, FAQ, glossaire, liens utiles et bibliographie — la partie que l'on rouvre toute l'année.",
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
        subtitle="Le guide officiel de l'ASEGUIM Centrale, réalisé en partenariat avec le SNABE : 105 pages pour comprendre votre bourse, choisir votre université, accomplir vos démarches et vous installer sereinement au Royaume du Maroc."
      />

      <section className="section-y pt-0">
        <div className="container-careloop">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[0.98] text-ink">
                Votre compagnon de route, de Conakry au campus
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-green-600">
                <p>
                  Partir étudier à l'étranger à dix-huit ans, ce n'est pas seulement changer de pays. C'est découvrir un
                  nouveau système universitaire, une nouvelle ville, une administration inconnue et des habitudes qui ne
                  sont pas encore les vôtres. Les premières semaines décident souvent du reste de l'année.
                </p>
                <p>
                  Ce guide a été conçu pour que personne n'ait à traverser cette étape seul. Il accompagne le boursier
                  guinéen depuis les préparatifs du départ jusqu'à son intégration académique et sociale : il explique le
                  fonctionnement du SNABE et de l'AMCI, présente les universités publiques et les grandes écoles du
                  Royaume, détaille la carte de séjour et l'inscription, le logement en cité universitaire, la santé, le
                  transport et le coût de la vie.
                </p>
                <p>
                  On y trouve aussi ce qui ne s'apprend nulle part ailleurs : quelques mots de darija pour les premiers
                  jours, les règles et coutumes à respecter, le calendrier universitaire réel, et les contacts de
                  l'ASEGUIM dans chaque ville. À lire avant le départ, puis à garder à portée de main toute l'année.
                </p>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
                {CHIFFRES.map((c) => (
                  <div key={c.label}>
                    <dt className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-ink">{c.valeur}</dt>
                    <dd className="mt-2 text-sm text-green-600">{c.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Carte « document » : accès direct au PDF, consultable dans un nouvel onglet. */}
            <Reveal delay={120} className="lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-[2rem] bg-ink p-8 text-cream shadow-[0_20px_60px_rgba(17,42,32,0.25)] sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow">
                  <FileText className="size-3.5" aria-hidden />
                  {GUIDE_BOURSIER.edition}
                </span>
                <h3 className="mt-6 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1] text-cream">
                  {GUIDE_BOURSIER.titre}
                </h3>
                <p className="mt-4 text-cream/70">
                  Consultable en ligne, gratuitement et sans inscription. Le guide s'ouvre dans un nouvel onglet et peut
                  être téléchargé pour une lecture hors connexion.
                </p>
                <Pill href={GUIDE_BOURSIER.href} variant="orange" size="lg" arrow external className="mt-8 w-full sm:w-auto">
                  Consulter le guide
                </Pill>
                <p className="mt-5 text-xs text-cream/50">
                  {GUIDE_BOURSIER.editeur} · PDF, {GUIDE_BOURSIER.pages} pages
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sommaire du guide */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <Reveal className="max-w-2xl">
            <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
              Au sommaire
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-ink">
              Huit parties, une année d'avance
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            {SOMMAIRE.map((s, i) => (
              <Reveal key={s.num} delay={(i % 4) * 80}>
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-green-200 text-green-700">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-2xl leading-none text-ink/25">{s.num}</span>
                </div>
                <h3 className="mt-4 font-sans text-lg font-bold text-ink">{s.titre}</h3>
                <p className="mt-2 text-green-600">{s.texte}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-16">
            <figure className="mx-auto max-w-3xl rounded-[2rem] bg-white px-6 py-12 text-center sm:px-12">
              <blockquote className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-ink">
                « Vous êtes partis pour apprendre, mais vous reviendrez pour construire. »
              </blockquote>
              <figcaption className="mt-5 text-sm text-green-600">Avant-propos du guide</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Pour aller plus loin — ASEGUIM 2040 (plateforme distincte du site) */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <Reveal>
            <div className="rounded-[2rem] bg-ink px-6 py-14 text-cream sm:px-12 sm:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block rounded-full bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow">
                  Pour aller plus loin
                </span>
                <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] text-cream">
                  {ASEGUIM_2040.nom}, votre assistant d&apos;orientation
                </h2>
                <p className="mt-5 text-lg text-cream/70">
                  Le guide pose les bases. Pour le choix de la filière et de l&apos;établissement, l&apos;ASEGUIM met à
                  disposition un assistant conversationnel dopé à l&apos;intelligence artificielle, dédié aux nouveaux
                  bacheliers boursiers qui choisissent désormais eux-mêmes leur orientation au Maroc.
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10">
                {POINTS_2040.map((p, i) => (
                  <Reveal key={p.titre} delay={i * 80}>
                    <span className="grid size-11 place-items-center rounded-2xl bg-cream/10 text-yellow">
                      <p.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-sans text-lg font-bold text-cream">{p.titre}</h3>
                    <p className="mt-2 text-cream/70">{p.texte}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={160} className="mx-auto mt-12 max-w-3xl rounded-[1.5rem] bg-cream/5 p-6 text-center sm:p-8">
                <p className="font-display text-xl tracking-wide text-cream sm:text-2xl">
                  « Mettre notre expertise au service de la nation. »
                </p>
                <p className="mt-3 text-sm text-cream/60">
                  {ASEGUIM_2040.nom} est un projet d&apos;intérêt général financé par le SNABE. C&apos;est une plateforme
                  indépendante, distincte du site de l&apos;ASEGUIM.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3">
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
