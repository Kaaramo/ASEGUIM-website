import { SectionHeading } from "@/components/shared/SectionHeading";
import { CauseCard } from "@/components/shared/CauseCard";
import { Reveal } from "@/components/Reveal";
import { FEATURED_CAUSES } from "@/data/site";

export function CaseStudy() {
  return (
    <section className="px-3 py-3">
      <div className="rounded-[2rem] bg-green-200">
        <div className="container-careloop section-y">
          <SectionHeading
            align="center"
            tag="Case studies"
            title="Building A Better Tomorrow"
            text="Real projects, consistently supported, creating measurable change in communities."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {FEATURED_CAUSES.map((cause, i) => (
              <Reveal key={cause.slug} delay={i * 90}>
                <CauseCard cause={cause} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
