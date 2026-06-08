import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { DonationForm } from "@/components/donation/DonationForm";
import { ProgramSection } from "@/components/home/ProgramSection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Donate — Careloop",
  description: "Make a one-time or monthly donation and fund lasting change.",
};

const POINTS = [
  "Every dollar is tracked and reported back to you.",
  "Funds go to active programs and verified field partners.",
  "Monthly giving keeps programs running all year.",
];

export default function DonationPage() {
  return (
    <>
      <PageHeader
        tag="Donate"
        title="Make a donation today"
        subtitle="Donations start from $20. Make it a one-time gift or support us monthly to keep programs running."
      />

      <section className="section-y">
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] text-ink">
              Your gift, working consistently.
            </h2>
            <p className="mt-6 text-lg text-green-600">
              We turn contributions into durable support — food, healthcare, education and
              disaster relief delivered again and again to the communities that need it.
            </p>
            <ul className="mt-8 space-y-4">
              {POINTS.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 80} className="flex items-start gap-3">
                  <span className="mt-1 size-2.5 shrink-0 rounded-full bg-orange" />
                  <span className="font-medium text-ink">{p}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <DonationForm />
          </Reveal>
        </div>
      </section>

      <ProgramSection />
    </>
  );
}
