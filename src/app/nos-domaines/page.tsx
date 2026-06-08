import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { DOMAINES } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Nos domaines d'intervention — ASEGUIM",
  description: "Scientifique, social, culturel et sportif : les quatre axes d'engagement de l'ASEGUIM.",
};

export default function NosDomaines() {
  return (
    <>
      <PageHeader
        tag="Nos domaines d'intervention"
        title="Quatre axes, un même engagement"
        subtitle="Découvrez les différents aspects de notre engagement envers la communauté estudiantine."
      />

      <section className="section-y pt-0">
        <div className="container-careloop space-y-16 lg:space-y-24">
          {DOMAINES.map((d, i) => (
            <div key={d.slug} className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal className={cn("relative aspect-[16/11] overflow-hidden rounded-[2rem]", i % 2 === 1 && "lg:order-last")}>
                <Image src={d.image} alt={d.nom} fill className="object-cover" sizes="(max-width:1024px) 100vw, 640px" />
              </Reveal>
              <div>
                <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
                  0{i + 1}
                </span>
                <h2 className="mt-5 font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[0.98] text-ink">{d.nom}</h2>
                <p className="mt-5 text-lg text-green-600">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Envie de participer à nos activités ?"
        text="Rejoignez l'ASEGUIM et prenez part à la vie scientifique, sociale, culturelle et sportive de la communauté."
        ctaLabel="Adhérer"
        ctaHref="/adhesion"
      />
    </>
  );
}
