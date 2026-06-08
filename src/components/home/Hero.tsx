import Image from "next/image";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="px-3">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink">
        {/* Background image + overlay */}
        <Image
          src="/images/hero-bg.png"
          alt="Volunteers supporting a community"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />

        <div className="container-careloop relative flex min-h-[78vh] flex-col justify-end pb-16 pt-28">
          <Reveal>
            <h1 className="max-w-[14ch] font-display text-cream text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.92] tracking-tight">
              Building Brighter, Safe Future.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg text-cream/85">
              We are a non-profit organization dedicated to creating lasting change
              through consistent, community-led support.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Pill href="/donation" variant="orange" size="lg" arrow>
                donate now
              </Pill>
              <Pill href="/about-us" variant="cream" size="lg">
                learn more
              </Pill>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
