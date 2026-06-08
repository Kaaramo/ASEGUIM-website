import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DonationForm } from "@/components/donation/DonationForm";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Donate — Careloop",
  description: "Make a one-time or monthly donation and fund lasting change.",
};

const USAGE = [
  { title: "Food and nutrition support", image: "/images/donate-prog-1.png" },
  { title: "Disaster relief and recovery", image: "/images/donate-prog-2.png" },
  { title: "Health and medical access", image: "/images/donate-prog-3.png" },
];

export default function DonationPage() {
  return (
    <>
      <PageHeader
        tag="Donate"
        title="Make a donation"
        subtitle="We value your support. Choose how you'd like to give and where your gift goes."
      />

      {/* Why your support matters */}
      <section className="section-y pt-0">
        <div className="container-careloop grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[611/520] overflow-hidden rounded-[2rem]">
            <Image src="/images/donate-impact.png" alt="A child supported by Careloop" fill className="object-cover" sizes="(max-width:1024px) 100vw, 600px" />
          </Reveal>
          <div>
            <SectionHeading tag="Make a bigger impact" title="Why your support matters?" />
            <div className="mt-6 space-y-4 text-green-600">
              <p>
                Monthly donations help Careloop plan ahead, respond faster and sustain the
                programs that communities rely on — well beyond the first wave of attention.
              </p>
              <p>
                Your gift responds quickly to urgent needs while building long-term resilience,
                with transparency and accountability at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate form */}
      <section className="px-3 py-3">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink">
          <div className="container-careloop section-y">
            <SectionHeading
              align="center"
              tone="cream"
              tag="Make a difference"
              title="Make a difference"
              text="Making a real difference is something we can all contribute to — through time, skills or financial support."
            />
            <Reveal className="mx-auto mt-12 max-w-2xl">
              <DonationForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How your donation is used */}
      <section className="section-y">
        <div className="container-careloop">
          <SectionHeading align="center" tag="Transparency" title="How your donation is used?" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {USAGE.map((u, i) => (
              <Reveal key={u.title} delay={i * 90}>
                <article className="overflow-hidden rounded-3xl bg-white p-3">
                  <div className="relative aspect-[390/300] overflow-hidden rounded-2xl">
                    <Image src={u.image} alt={u.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 400px" />
                  </div>
                  <div className="flex items-center gap-3 px-3 py-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-orange text-white">
                      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                        <path d="M12 21s-7-4.5-9.3-9C1.2 9 2.6 6 5.5 6c1.8 0 2.9 1 3.5 2 .6-1 1.7-2 3.5-2 2.9 0 4.3 3 2.8 6-2.3 4.5-9.3 9-9.3 9z" />
                      </svg>
                    </span>
                    <h3 className="font-sans text-lg font-bold leading-tight text-ink">{u.title}</h3>
                  </div>
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
