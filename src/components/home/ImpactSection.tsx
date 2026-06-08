import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCounter } from "@/components/shared/StatCounter";
import { Reveal } from "@/components/Reveal";
import { IMPACT_STATS } from "@/data/site";

export function ImpactSection() {
  return (
    <section className="px-3 py-3">
      <div className="overflow-hidden rounded-[2rem] bg-ink">
        <div className="container-careloop section-y">
          <SectionHeading
            tag="Our impact"
            title="Our growing impact shows how consistent care compounds"
            tone="cream"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {IMPACT_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
