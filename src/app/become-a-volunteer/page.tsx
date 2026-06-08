import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LeadForm } from "@/components/shared/LeadForm";
import { Reveal } from "@/components/Reveal";
import { VOLUNTEER_ROLES } from "@/data/pages";

export const metadata: Metadata = {
  title: "Become a Volunteer — Careloop",
  description: "Give your time and skills to support communities with Careloop.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        tag="Volunteers"
        title="Give your time. Change a life."
        subtitle="Creating meaningful change is a shared effort. Find a role that fits your skills and schedule."
      />

      <section className="section-y">
        <div className="container-careloop">
          <SectionHeading align="center" tag="Ways to help" title="Roles you can step into" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VOLUNTEER_ROLES.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 80}>
                <article className="h-full rounded-3xl bg-white p-8">
                  <h3 className="font-sans text-xl font-bold text-ink">{r.title}</h3>
                  <p className="mt-3 text-green-600">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y pt-0">
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            tag="Apply"
            title="Tell us how you'd like to help"
            text="Share a few details and our team will match you with a role and get you started."
          />
          <Reveal delay={120}>
            <LeadForm submitLabel="apply to volunteer" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
