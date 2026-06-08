import Image from "next/image";
import { ProgressBar } from "./ProgressBar";
import { Pill } from "@/components/Pill";
import { formatCurrency } from "@/lib/format";
import type { Cause } from "@/types";

/** Featured cause card with image, progress and a support CTA. */
export function CauseCard({ cause }: { cause: Cause }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white p-3">
      <div className="relative aspect-[386/290] overflow-hidden rounded-2xl">
        <Image src={cause.image} alt={cause.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 400px" />
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <h3 className="font-sans text-lg font-bold leading-snug text-ink">{cause.title}</h3>
        <div className="mt-4 flex items-center justify-between text-sm font-semibold text-ink/70">
          <span>Raised: {formatCurrency(cause.raised)}</span>
          <span>Goal: {formatCurrency(cause.goal)}</span>
        </div>
        <ProgressBar raised={cause.raised} goal={cause.goal} className="mt-3" />
        <Pill href={`/causes/${cause.slug}`} variant="dark" size="sm" className="mt-6 self-start">
          support us
        </Pill>
      </div>
    </article>
  );
}
