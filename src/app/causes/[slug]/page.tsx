import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { Pill } from "@/components/Pill";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { formatCompact } from "@/lib/format";
import { ALL_CAUSES, getCauseBySlug } from "@/data/pages";

export function generateStaticParams() {
  return ALL_CAUSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);
  return { title: cause ? `${cause.title} — Careloop` : "Cause — Careloop" };
}

export default async function CauseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);
  if (!cause) notFound();

  return (
    <>
      <article className="section-y pt-12">
        <div className="container-careloop">
          {/* Title + intro */}
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
                Cause
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.96] text-ink">
                {cause.title}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-green-600">{cause.excerpt}</p>
            </Reveal>
          </div>

          {/* Hero image */}
          <Reveal className="relative mt-12 aspect-[1340/720] overflow-hidden rounded-[2rem]">
            <Image src={cause.image} alt={cause.title} fill priority className="object-cover" sizes="100vw" />
          </Reveal>

          {/* Progress summary */}
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm font-semibold text-ink/70">
                Raised: <span className="text-ink">{formatCompact(cause.raised)}</span> of{" "}
                {formatCompact(cause.goal)} goal
              </div>
              <div className="flex gap-3">
                <Pill href="/donation" variant="orange" size="sm" arrow>
                  donate now
                </Pill>
                <Pill href="/become-a-volunteer" variant="outline" size="sm">
                  volunteer
                </Pill>
              </div>
            </div>
            <ProgressBar raised={cause.raised} goal={cause.goal} className="mt-5" />
          </Reveal>

          {/* Body */}
          <div className="mx-auto mt-14 max-w-3xl space-y-6 text-lg leading-relaxed text-green-700">
            <h2 className="font-display text-3xl text-ink">Why this cause matters</h2>
            <p>
              Lasting change rarely comes from a single moment. It comes from showing up again
              and again — long after the first wave of attention has passed. This cause is built
              on that principle: consistent, community-led support that compounds over time.
            </p>
            <p>
              We partner directly with local organizations and the people who live these
              challenges firsthand, so every contribution is relevant, accountable and durable.
            </p>
            <Reveal className="relative my-10 aspect-[16/9] overflow-hidden rounded-[2rem]">
              <Image src="/images/program-1.png" alt="Community program in action" fill className="object-cover" sizes="(max-width:768px) 100vw, 768px" />
            </Reveal>
            <h2 className="font-display text-3xl text-ink">How your support helps</h2>
            <p>
              Your gift funds the programs, equipment and people that keep this work going. Every
              dollar is tracked and reported back so you can follow the impact, season after season.
            </p>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
