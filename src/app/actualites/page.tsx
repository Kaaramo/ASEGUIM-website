import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Actualités & Événements — ASEGUIM",
  description: "Découvrez les dernières actualités et événements de l'ASEGUIM.",
};

export default function Actualites() {
  return (
    <>
      <PageHeader
        tag="Actualités & Événements"
        title="Actualités & Événements"
        subtitle="Découvrez les dernières actualités et événements de l'ASEGUIM."
      />
      <section className="section-y pt-0">
        <div className="container-careloop">
          <Reveal className="mx-auto max-w-2xl rounded-[2rem] bg-white p-12 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-cream text-orange">
              <Newspaper className="size-8" />
            </span>
            <h2 className="mt-6 font-display text-3xl text-ink">Bientôt disponible</h2>
            <p className="mx-auto mt-3 max-w-md text-green-600">
              Nos actualités et événements seront publiés ici très prochainement. Revenez
              bientôt, ou suivez-nous sur nos réseaux sociaux pour ne rien manquer.
            </p>
            <Pill href="/contact" variant="orange" size="md" arrow className="mt-7">
              Nous suivre
            </Pill>
          </Reveal>
        </div>
      </section>
      <CtaBanner
        title="Restez informé de la vie de l'ASEGUIM"
        text="Adhérez pour recevoir nos actualités et participer à nos événements."
        ctaLabel="Adhérer"
        ctaHref="/adhesion"
      />
    </>
  );
}
