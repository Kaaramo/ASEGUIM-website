import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { MessageForm } from "@/components/forms/MessageForm";
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
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <ul className="space-y-6">
              <Reveal as="li" className="flex items-start gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-green-700 text-cream"><Mail className="size-5" /></span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-wide text-ink">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="mt-1 block font-semibold text-orange">{CONTACT.email}</a>
                </span>
              </Reveal>
              <Reveal as="li" delay={80} className="flex items-start gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-green-700 text-cream"><Phone className="size-5" /></span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-wide text-ink">Téléphone</span>
                  <a href={CONTACT.telLink} className="mt-1 block font-semibold text-orange">{CONTACT.telephone}</a>
                </span>
              </Reveal>
              <Reveal as="li" delay={160} className="flex items-start gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-green-700 text-cream"><MapPin className="size-5" /></span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-wide text-ink">Adresse</span>
                  <Link href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer" className="mt-1 block font-semibold text-orange">{CONTACT.adresse}</Link>
                </span>
              </Reveal>
            </ul>
            <div className="mt-8">
              <span className="text-sm font-bold uppercase tracking-wide text-green-700">Suivez-nous</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {RESEAUX.map((r) => (
                  <Link key={r.nom} href={r.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream">
                    {r.nom}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Reveal delay={120}>
            <MessageForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
