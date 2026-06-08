import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Careloop",
  description: "Get in touch with the Careloop team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        tag="Contact"
        title="Get in Touch with Us"
        subtitle="We value your experience with Careloop and want to understand your needs better."
      />

      <section className="section-y pt-0">
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
              Send us a message
            </span>
            <p className="mt-6 max-w-md text-green-600">
              Whether you have a question, want to get involved, or need more information about
              our programs, the Careloop team is always happy to hear from you.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal className="flex flex-col gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-green-700 text-cream">
                  <Mail className="size-5" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-ink">Email us</span>
                <span className="text-sm text-green-600">For more information about our charitable initiatives.</span>
                <span className="font-semibold text-orange">hello@careloop.org</span>
              </Reveal>
              <Reveal delay={100} className="flex flex-col gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-green-700 text-cream">
                  <Phone className="size-5" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-ink">Call us</span>
                <span className="text-sm text-green-600">Available Monday to Friday, 9:00 am to 5:00 pm.</span>
                <span className="font-semibold text-orange">+1 (415) 555-0189</span>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <FaqSection />
      <CtaBanner />
    </>
  );
}
