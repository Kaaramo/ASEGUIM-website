import Link from "next/link";
import { ArrowUpRight, UserPlus, HandHeart, Building2, Users, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IMPLICATION } from "@/data/aseguim";

const ICONS: Record<string, LucideIcon> = {
  UserPlus,
  HandHeart,
  Handshake: Building2,
  Users,
};

export function ImplicationSection() {
  return (
    <section className="section-y">
      <div className="container-careloop">
        <SectionHeading
          align="center"
          tag="S'impliquer"
          title="Vous aussi, façonnez l'avenir avec nous"
          text="Chacun peut contribuer à la communauté — par l'adhésion, le don, le partenariat ou l'engagement."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPLICATION.map((c, i) => {
            const Icon = ICONS[c.icon] ?? Users;
            return (
              <Reveal key={c.titre} delay={(i % 4) * 90}>
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-3xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-cream text-orange">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-6 font-sans text-xl font-bold text-ink">{c.titre}</h3>
                  <p className="mt-3 flex-1 text-green-600">{c.texte}</p>
                  <span className="mt-5 inline-flex items-center gap-1 font-semibold text-ink">
                    En savoir plus
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
