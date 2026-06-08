import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CauseCard } from "@/components/shared/CauseCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
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
        tag="Our causes"
        title="Causes worth showing up for"
        subtitle="Every cause is an ongoing commitment. Choose where your support goes and follow the impact over time."
      />
      <section className="section-y">
        <div className="container-careloop grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_CAUSES.map((cause, i) => (
            <Reveal key={cause.slug} delay={(i % 3) * 90}>
              <CauseCard cause={cause} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner title="Don't see your cause? Start one." ctaLabel="get in touch" ctaHref="/contact-us" />
    </>
  );
}
