import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/data/site";
import type { Testimonial } from "@/types";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="w-[320px] shrink-0 rounded-3xl bg-white p-7 sm:w-[420px] sm:p-8">
      <blockquote className="text-lg font-medium leading-relaxed text-ink">“{t.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="relative size-12 overflow-hidden rounded-full">
          <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
        </span>
        <span>
          <span className="block font-bold text-ink">{t.name}</span>
          <span className="block text-sm text-green-600">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialSection() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="section-y">
      <div className="container-careloop">
        <SectionHeading align="center" tag="Testimonials" title="What people say about our work" />
      </div>
      <div className="marquee-mask mt-14 overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
