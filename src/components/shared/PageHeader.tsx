import { Reveal } from "@/components/Reveal";

/** Inner-page hero header (light/cream): eyebrow tag + large Bayon title + optional subtitle. */
export function PageHeader({
  tag,
  title,
  subtitle,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="section-y pt-12 text-center">
      <div className="container-careloop">
        {tag && (
          <Reveal>
            <span className="inline-block rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
              {tag}
            </span>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.94] text-ink">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-xl text-green-600">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
