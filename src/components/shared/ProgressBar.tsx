import { progressPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Fundraising progress bar (raised vs goal). */
export function ProgressBar({
  raised,
  goal,
  className,
  barClassName,
}: {
  raised: number;
  goal: number;
  className?: string;
  barClassName?: string;
}) {
  const pct = progressPercent(raised, goal);
  return (
    <div className={cn("h-2.5 w-full overflow-hidden rounded-full bg-ink/10", className)}>
      <div
        className={cn("h-full rounded-full bg-orange", barClassName)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
