import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCounter } from "@/components/shared/StatCounter";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";

export function OurNumberSection() {
  return (
    <section className="section-y">
      <div className="container-careloop">
        <SectionHeading
          align="center"
          title="One action. One number. Real impact."
          text="Every contribution adds up to something far bigger than a single gift."
        />
        <Reveal className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-[2rem] bg-ink px-8 py-14 text-center">
            <div className="[&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0">
              <StatCounter value={250} suffix="K+" label="lives changed for the better" />
            </div>
            <Pill href="/donation" variant="orange" size="md" arrow className="mt-8">
              Donate now
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
