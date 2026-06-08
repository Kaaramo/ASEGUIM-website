import type { Metadata } from "next";
import Image from "next/image";
import { Heart } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { PartenaireForm } from "@/components/aseguim/PartenaireForm";
import { Reveal } from "@/components/Reveal";
import { PARTENAIRES } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Devenir partenaire — ASEGUIM",
  description: "Associez votre organisation à la mission d'excellence de l'ASEGUIM.",
};

export default function DevenirPartenaire() {
  return (
    <>
      <PageHeader
        tag="Partenariat"
        title="Devenez notre partenaire"
        subtitle="Nous sommes honorés de votre intérêt pour un partenariat avec l'ASEGUIM."
      />
      <section className="section-y pt-0">
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Reveal className="rounded-3xl bg-ink p-8 text-cream">
              <span className="grid size-12 place-items-center rounded-2xl bg-orange text-white">
                <Heart className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-3xl">Votre soutien fait la différence</h2>
              <p className="mt-4 text-cream/80">
                En rejoignant nos partenaires, vous associez votre organisation à un réseau de
                plus de 1100 étudiants et à une mission d'excellence académique, sociale,
                culturelle et sportive depuis 1981.
              </p>
            </Reveal>
            <p className="mt-8 text-sm font-bold uppercase tracking-wide text-green-700">Ils nous font déjà confiance</p>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {PARTENAIRES.map((p) => (
                <div key={p.nom} className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-white p-3">
                  <Image
                    src={p.logo}
                    alt={p.nom}
                    width={120}
                    height={90}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <PartenaireForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
