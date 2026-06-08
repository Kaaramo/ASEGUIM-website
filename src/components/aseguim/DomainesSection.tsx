import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DOMAINES } from "@/data/aseguim";

export function DomainesSection() {
  return (
    <section className="section-y" id="domaines">
      <div className="container-careloop">
        <SectionHeading
          align="center"
          tag="Nos domaines d'intervention"
          title="Découvrez les différents aspects de notre engagement"
          text="Découvrez les différents aspects de notre engagement envers la communauté estudiantine."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {DOMAINES.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 2) * 100}>
              <article className="group overflow-hidden rounded-3xl bg-white p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={d.image}
                    alt={d.nom}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:1024px) 100vw, 640px"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cream backdrop-blur">
                    {d.nom}
                  </span>
                </div>
                <p className="px-3 pb-3 pt-5 text-green-600">{d.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
