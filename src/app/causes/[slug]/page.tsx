import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { Pill } from "@/components/Pill";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { formatCurrency } from "@/lib/format";
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
      <article className="section-y">
        <div className="container-careloop grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Image src={cause.image} alt={cause.title} fill priority className="object-cover" sizes="(max-width:1024px) 100vw, 800px" />
            </div>
            <h1 className="mt-10 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] text-ink">
              {cause.title}
            </h1>
            <p className="mt-6 text-lg text-green-600">{cause.excerpt}</p>
            <p className="mt-4 text-green-600">
              Your support funds this cause consistently — not as a one-off gift, but as
              ongoing care that helps the community build something that lasts. Every
              contribution is tracked and reported back so you can follow the impact.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-white p-8 lg:sticky lg:top-32">
            <div className="flex items-center justify-between text-sm font-semibold text-ink/70">
              <span>Raised: {formatCurrency(cause.raised)}</span>
              <span>Goal: {formatCurrency(cause.goal)}</span>
            </div>
            <ProgressBar raised={cause.raised} goal={cause.goal} className="mt-3" />
            <Pill href="/donation" variant="orange" size="md" arrow className="mt-7 w-full">
              donate now
            </Pill>
            <Pill href="/become-a-volunteer" variant="outline" size="md" className="mt-3 w-full">
              volunteer
            </Pill>
          </aside>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
