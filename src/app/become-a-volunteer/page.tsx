import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeamCard } from "@/components/shared/TeamCard";
import { VolunteerForm } from "@/components/shared/VolunteerForm";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { ICONS } from "@/components/icons";
import { VOLUNTEER_STEPS, VOLUNTEER_TEAM } from "@/data/pages";

export const metadata: Metadata = {
  title: "Become a Volunteer — Careloop",
  description: "Give your time and skills to support communities with Careloop.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        tag="Volunteers"
        title="Become a volunteer"
        subtitle="We value your time and skills. Find a role that fits and help communities thrive."
      />

      {/* Intro */}
      <section className="section-y pt-0">
        <div className="container-careloop grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading tag="Become a volunteer" title="Your time and skills can totally change things up!" />
            <p className="mt-6 text-green-600">
              Volunteers are at the heart of Careloop&apos;s work. By giving your time, energy
              and skills, you help deliver care directly to communities and support programs
              that create lasting impact.
            </p>
          </div>
          <Reveal className="relative aspect-[611/520] overflow-hidden rounded-[2rem] bg-yellow">
            <Image src="/images/volunteer-hero.png" alt="A Careloop volunteer" fill className="object-cover" sizes="(max-width:1024px) 100vw, 600px" />
          </Reveal>
        </div>
      </section>

      {/* How volunteering works */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <SectionHeading align="center" title="How volunteering works" text="Creating meaningful change is a shared effort. Here's how to get started." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VOLUNTEER_STEPS.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <article className="h-full rounded-3xl bg-white p-8 text-center">
                    <span className={`mx-auto grid size-14 place-items-center rounded-2xl ${s.color} text-white`}>
                      {Icon ? <Icon className="size-7" /> : null}
                    </span>
                    <h3 className="mt-6 font-sans text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm text-green-600">{s.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet our team */}
      <section className="section-y pt-0">
        <div className="container-careloop">
          <SectionHeading align="center" tag="Our team" title="Meet our team" text="The volunteers who power Careloop's consistent, community-led work." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VOLUNTEER_TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <TeamCard {...m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="px-3 py-3">
        <div className="rounded-[2rem] bg-green-200">
          <div className="container-careloop section-y">
            <SectionHeading align="center" tag="Application form" title="Volunteer application form" text="Making a real difference is something we can all contribute to." />
            <Reveal className="mx-auto mt-12 max-w-2xl">
              <VolunteerForm />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
