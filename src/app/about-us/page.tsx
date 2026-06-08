import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCounter } from "@/components/shared/StatCounter";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { ABOUT_VALUES } from "@/data/pages";
import { IMPACT_STATS } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Careloop",
  description: "Careloop creates lasting change through consistent, community-led support.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tag="About careloop"
        title="Real change happens with consistency."
        subtitle="We are a non-profit organization dedicated to lasting impact — not just in moments of crisis, but every day after."
      />

      <section className="section-y">
        <div className="container-careloop grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[611/600] overflow-hidden rounded-[2rem]">
            <Image src="/images/about.png" alt="A Careloop community gathering" fill className="object-cover" sizes="(max-width:1024px) 100vw, 600px" />
          </Reveal>
          <div>
            <SectionHeading
              tag="Our mission"
              title="Support that lasts longer than the crisis"
              text="Careloop works alongside communities to deliver food, healthcare, education and disaster relief — and then keeps showing up. We measure success in years, not headlines."
            />
            <p className="mt-6 text-green-600">
              Every program is built with local partners and shaped by the people who live
              the challenges firsthand, so support is relevant, accountable and durable.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-3">
        <div className="overflow-hidden rounded-[2rem] bg-ink">
          <div className="container-careloop section-y">
            <SectionHeading tone="cream" align="center" tag="Our impact" title="Consistent care, compounding results" />
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

      <section className="section-y">
        <div className="container-careloop">
          <SectionHeading align="center" tag="Our values" title="What guides every decision" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <article className="h-full rounded-3xl bg-white p-8">
                  <h3 className="font-sans text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-green-600">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
