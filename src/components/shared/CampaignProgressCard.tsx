import Image from "next/image";
import { ProgressBar } from "./ProgressBar";
import { formatCurrency } from "@/lib/format";

/** Card showing a campaign/program image with raised vs goal progress. */
export function CampaignProgressCard({
  title,
  image,
  raised,
  goal,
}: {
  title: string;
  image: string;
  raised: number;
  goal: number;
}) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white p-3 shadow-[0_2px_20px_rgba(17,42,32,0.06)]">
      <div className="relative aspect-[586/335] overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 640px" />
      </div>
      <div className="px-3 pb-3 pt-5">
        <h3 className="font-sans text-xl font-bold text-ink">{title}</h3>
        <div className="mt-4 flex items-center justify-between text-sm font-semibold">
          <span className="text-ink/70">
            Raised: <span className="text-ink">{formatCurrency(raised)}</span>
          </span>
          <span className="text-ink/70">
            Goal: <span className="text-ink">{formatCurrency(goal)}</span>
          </span>
        </div>
        <ProgressBar raised={raised} goal={goal} className="mt-3" />
      </div>
    </article>
  );
}
