import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { ASEGUIM_2040 } from "@/data/aseguim";

/**
 * Bandeau « À la une » placé juste après la bannière d'accueil : met en avant
 * l'assistant ASEGUIM 2040. Masqué avec le reste quand ASEGUIM_2040.visible est à false.
 */
export function AlaUneSection() {
  if (!ASEGUIM_2040.visible) return null;

  return (
    <section className="pt-10 sm:pt-14">
      <div className="container-careloop">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-cream sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full opacity-50"
              style={{ background: "radial-gradient(circle, rgba(239,86,44,0.45) 0%, transparent 65%)" }}
              aria-hidden
            />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow">
                  <Sparkles className="size-3.5" aria-hidden />
                  À la une
                </span>
                <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] text-cream">
                  {ASEGUIM_2040.nom}, votre assistant d&apos;orientation
                </h2>
                <p className="mt-4 text-lg text-cream/70">
                  Nouveaux bacheliers boursiers : trouvez la filière et l&apos;établissement faits pour vous, au Maroc.
                </p>
              </div>
              <Pill href={ASEGUIM_2040.page} variant="orange" size="lg" arrow className="shrink-0">
                Découvrir
              </Pill>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
