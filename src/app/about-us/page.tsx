import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCounter } from "@/components/shared/StatCounter";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { ICONS } from "@/components/icons";
import { ABOUT_COUNTERS, CORE_VALUES, TEAM } from "@/data/pages";

export const metadata: Metadata = {
  title: "About — Careloop",
  description: "Careloop creates lasting change through consistent, community-led support.",
};

const TEAM_UP_POINTS = [
  "Get access to education and skill-building programs",
  "Healthy food and support for families",
  "Safe places and resources for those in need",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-y pt-12">
        <div className="container-careloop text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
              About us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.94] text-ink">
              About Us
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-xl text-green-600">
              We prioritize the people we serve and the partners we work with — and we&apos;re
              always learning how to support communities better.
            </p>
          </Reveal>
        </div>
        <div className="container-careloop mt-12">
          <Reveal className="relative aspect-[1340/760] overflow-hidden rounded-[2rem]">
            <Image src="/images/about-hero.jpg" alt="Careloop volunteers distributing aid" fill priority className="object-cover" sizes="100vw" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-12 max-w-4xl font-display text-[clamp(2rem,4.5vw,4rem)] leading-[0.98] text-ink">
              We exist to close the gap between people who need support the most.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Mission + counters */}
      <section className="section-y pt-0">
        <div className="container-careloop grid gap-10 lg:grid-cols-2">
          <SectionHeading
            tag="Our mission"
            title="To provide compassionate, community-driven support that builds long-term resilience."
          />
          <div className="space-y-5 self-end text-green-600">
            <p>
              Careloop began with a simple belief: care should never run out of reach. What
              started as a small effort to support local families has grown into a non-profit
              delivering food, healthcare, education and emergency assistance.
            </p>
            <p>
              We work to close the gap between people who need support and the help that
              reaches them — partnering directly with communities and local organizations so
              that aid is consistent and accountable.
            </p>
          </div>
        </div>
        <div className="container-careloop mt-16 grid gap-8 md:grid-cols-3">
          {ABOUT_COUNTERS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <StatCounter value={c.value} suffix={c.suffix} label={c.label} tone="light" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="section-y pt-0">
        <div className="container-careloop grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            tag="Our values"
            title="Our caring core values"
            text="We are a non-profit dedicated to creating lasting change by supporting communities consistently."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {CORE_VALUES.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <Reveal key={v.title} delay={(i % 2) * 90}>
                  <article className="h-full rounded-3xl bg-white p-7">
                    <span className={`grid size-14 place-items-center rounded-2xl ${v.color} text-white`}>
                      {Icon ? <Icon className="size-7" /> : null}
                    </span>
                    <h3 className="mt-6 font-sans text-lg font-bold text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm text-green-600">{v.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <SectionHeading align="center" tag="Our team" title="Meet our team" text="The people behind Careloop's consistent, community-led work." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <article className="overflow-hidden rounded-3xl bg-green-700 p-3">
                  <div className="relative aspect-[391/360] overflow-hidden rounded-2xl">
                    <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 400px" />
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <h3 className="font-sans text-lg font-bold text-ink">{m.name}</h3>
                    <p className="text-sm text-green-600">{m.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team up */}
      <section className="section-y pt-0">
        <div className="container-careloop grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading tag="Team up with Careloop!" title="Join us and make a difference!" />
            <p className="mt-5 text-green-600">
              Real change happens when we mix empathy with action. Volunteer with us and help
              communities access what they need, consistently.
            </p>
            <ul className="mt-7 space-y-4">
              {TEAM_UP_POINTS.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 80} className="flex items-center gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-orange text-white">
                    <Check className="size-4" />
                  </span>
                  <span className="font-medium text-ink">{p}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={240}>
              <Pill href="/become-a-volunteer" variant="dark" size="md" arrow className="mt-8">
                volunteer with us
              </Pill>
            </Reveal>
          </div>
          <Reveal className="relative order-first aspect-[611/640] overflow-hidden rounded-[2rem] lg:order-last">
            <Image src="/images/team-up.png" alt="A Careloop volunteer with supplies" fill className="object-cover" sizes="(max-width:1024px) 100vw, 600px" />
          </Reveal>
        </div>
      </section>

      <TestimonialSection />
      <CtaBanner />
    </>
  );
}
