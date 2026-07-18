import type { Metadata } from "next";
import Image from "next/image";
import { Heart } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { PartenaireForm } from "@/components/forms/PartenaireForm";
import { Reveal } from "@/components/ui/Reveal";
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
        <div className="container-careloop grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem] bg-ink text-cream">
            <div className="p-8 sm:p-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-orange text-white">
                <Heart className="size-7" />
              </span>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl">Votre soutien fait la différence</h2>
              <p className="mt-4 text-cream/80">
                En rejoignant nos partenaires, vous associez votre organisation à un réseau de
                plus de 1100 étudiants et à une mission d'excellence académique, sociale,
                culturelle et sportive depuis 1981.
              </p>
            </div>
            <div className="border-t border-cream/10 bg-cream/[0.04] p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wide text-cream/60">Ils nous font déjà confiance</p>
              <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-4">
                {PARTENAIRES.map((p) => (
                  <div key={p.nom} className="relative aspect-[4/3] min-w-0 rounded-2xl bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
                    <Image
                      src={p.logo}
                      alt={p.nom}
                      fill
                      sizes="(max-width: 640px) 30vw, (max-width: 1024px) 15vw, 120px"
                      className="object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PartenaireForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
