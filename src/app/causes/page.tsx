import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CauseCard } from "@/components/shared/CauseCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { ALL_CAUSES } from "@/data/pages";

export const metadata: Metadata = {
  title: "Causes — Careloop",
  description: "Explore the causes Careloop supports and help fund lasting change.",
};

export default function CausesPage() {
  return (
    <>
      <PageHeader
        tag="Causes"
        title="Donation Causes"
        subtitle="Understanding how you support Careloop matters to us. Choose a cause and follow its impact over time."
      />

      <section className="section-y pt-0">
        <div className="container-careloop grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_CAUSES.map((cause, i) => (
            <Reveal key={cause.slug} delay={(i % 3) * 90}>
              <CauseCard cause={cause} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Pill href="/causes" variant="orange" size="md">
            load more
          </Pill>
        </div>
      </section>

      <FaqSection />
      <CtaBanner />
    </>
  );
}
