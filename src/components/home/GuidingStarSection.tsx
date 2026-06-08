import Image from "next/image";
import { Sparkles, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  { icon: Sparkles, title: "Nurturing future leaders", text: "Investing in young people so change continues for generations." },
  { icon: Leaf, title: "Inspiring innovation", text: "Finding better, lasting ways to support the communities we serve." },
];

export function GuidingStarSection() {
  return (
    <section className="section-y">
      <div className="container-careloop grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative aspect-[611/640] overflow-hidden rounded-[2rem]">
          <Image src="/images/guiding-star.png" alt="A child supported by Careloop" fill className="object-cover" sizes="(max-width:1024px) 100vw, 600px" />
        </Reveal>
        <div>
          <SectionHeading
            tag="Our guiding star"
            title="Consistency drives real change."
            text="Careloop is dedicated to creating lasting impact by showing up for communities again and again — long after the headlines fade."
          />
          <div className="mt-9 space-y-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cream text-orange">
                  <p.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-green-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
