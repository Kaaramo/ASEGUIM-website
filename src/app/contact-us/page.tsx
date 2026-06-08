import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LeadForm } from "@/components/shared/LeadForm";
import { Reveal } from "@/components/Reveal";
import { CONTACT_INFO } from "@/data/pages";

export const metadata: Metadata = {
  title: "Contact — Careloop",
  description: "Get in touch with the Careloop team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        tag="Contact"
        title="Let's talk about lasting change"
        subtitle="Questions, partnerships or press — we'd love to hear from you."
      />

      <section className="section-y">
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading tag="Reach us" title="We're here to help" />
            <ul className="mt-8 space-y-6">
              {CONTACT_INFO.map((info, i) => (
                <Reveal as="li" key={info.label} delay={i * 80}>
                  <span className="block text-sm font-bold uppercase tracking-wide text-green-600">
                    {info.label}
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-ink">{info.value}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120}>
            <LeadForm submitLabel="send message" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
