import { SectionHeading } from "@/components/shared/SectionHeading";
import { CampaignProgressCard } from "@/components/shared/CampaignProgressCard";
import { Reveal } from "@/components/Reveal";
import { PROGRAMS } from "@/data/site";

export function ProgramSection() {
  return (
    <section className="section-y">
      <div className="container-careloop">
        <SectionHeading
          tag="Our programs"
          title="Our programs are designed to empower"
          text="Every initiative is built to deliver consistent support where it matters most."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <CampaignProgressCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
