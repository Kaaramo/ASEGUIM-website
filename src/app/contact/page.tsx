import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT, RESEAUX } from "@/data/aseguim";

export const metadata: Metadata = {
  title: "Contact — ASEGUIM",
  description: "Contactez le Bureau Exécutif Central de l'ASEGUIM.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        tag="Contact"
        title="Contactez-nous"
        subtitle="Une question, une idée, une envie de vous impliquer ? Le Bureau Exécutif Central est à votre écoute."
      />
      <section className="section-y pt-0">
        <div className="container-careloop mx-auto max-w-3xl">
          <ul className="space-y-8">
            <Reveal as="li" className="flex items-center gap-4 sm:gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-green-700 text-cream sm:size-16"><Mail className="size-6 sm:size-7" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold uppercase tracking-wide text-ink/60">Email</span>
                <a href={`mailto:${CONTACT.email}`} className="mt-1 block break-all font-display text-lg text-orange sm:text-2xl lg:text-3xl">{CONTACT.email}</a>
              </span>
            </Reveal>
            <Reveal as="li" delay={80} className="flex items-center gap-4 sm:gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-green-700 text-cream sm:size-16"><Phone className="size-6 sm:size-7" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold uppercase tracking-wide text-ink/60">Téléphone</span>
                <span className="mt-1 block break-words font-display text-lg text-ink sm:text-2xl lg:text-3xl">{CONTACT.telephone}</span>
              </span>
            </Reveal>
            <Reveal as="li" delay={160} className="flex items-center gap-4 sm:gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-green-700 text-cream sm:size-16"><MapPin className="size-6 sm:size-7" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold uppercase tracking-wide text-ink/60">Adresse</span>
                <span className="mt-1 block break-words font-display text-lg text-ink sm:text-2xl lg:text-3xl">{CONTACT.adresse}</span>
              </span>
            </Reveal>
          </ul>
          <div className="mt-10">
            <span className="text-sm font-bold uppercase tracking-wide text-green-700">Suivez-nous</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {RESEAUX.map((r) => (
                <Link key={r.nom} href={r.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream">
                  {r.nom}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
