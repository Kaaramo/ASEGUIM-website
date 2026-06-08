import Image from "next/image";
import { Check } from "lucide-react";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const POINTS = [
  "Emergency food and nutrition support",
  "Education and skill development programs",
];

export function AboutSection() {
  return (
    <section className="section-y">
      <div className="container-careloop grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-last aspect-[611/600] overflow-hidden rounded-[2rem] lg:order-first">
          <Image src="/images/about.png" alt="A community gathering" fill className="object-cover" sizes="(max-width:1024px) 100vw, 600px" />
        </Reveal>

        <div>
          <SectionHeading
            tag="About careloop"
            title="Real change happens with consistency."
            text="Careloop is a non-profit organization working to create lasting change for communities — not just in moments of crisis, but every day after."
          />
          <ul className="mt-8 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 80} className="flex items-center gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-orange text-white">
                  <Check className="size-4" />
                </span>
                <span className="font-semibold text-ink">{p}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={240}>
            <Pill href="/about-us" variant="dark" size="md" arrow className="mt-9">
              learn more
            </Pill>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
