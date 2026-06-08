import Image from "next/image";
import { Pill } from "@/components/Pill";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { Reveal } from "@/components/Reveal";
import { formatCurrency } from "@/lib/format";
import { SPOTLIGHT } from "@/data/site";

export function DonateSpotlight() {
  return (
    <section className="px-3 pt-3">
      <div className="grid overflow-hidden rounded-[2rem] md:grid-cols-2">
        {/* Left: emergency campaign on yellow */}
        <Reveal className="bg-yellow p-8 sm:p-10">
          <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-44 sm:w-44">
              <Image src={SPOTLIGHT.image} alt={SPOTLIGHT.title} fill className="object-cover" sizes="200px" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-2xl font-extrabold leading-tight text-ink">{SPOTLIGHT.title}</h3>
              <div className="mt-4 flex items-center justify-between text-sm font-semibold text-ink/80">
                <span>Raised: {formatCurrency(SPOTLIGHT.raised)}</span>
                <span>Goal: {formatCurrency(SPOTLIGHT.goal)}</span>
              </div>
              <ProgressBar raised={SPOTLIGHT.raised} goal={SPOTLIGHT.goal} className="mt-3 bg-ink/15" />
              <Pill href={SPOTLIGHT.href} variant="dark" size="sm" className="mt-6">
                learn more
              </Pill>
            </div>
          </div>
        </Reveal>

        {/* Right: make a donation on green */}
        <Reveal delay={120} className="bg-green-700 p-8 text-cream sm:p-12">
          <div className="flex h-full flex-col justify-center">
            <h3 className="font-display text-4xl sm:text-5xl">Make A Donation today!</h3>
            <p className="mt-4 max-w-md text-cream/85">
              Donations start from $20. Make it a one-time gift or support us monthly to
              keep programs running all year.
            </p>
            <Pill href="/donation" variant="orange" size="md" arrow className="mt-7 self-start">
              donate now
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
