import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { HISTOIRE, VISION } from "@/data/aseguim";

export function MissionSection() {
  return (
    <section className="section-y" id="about">
      <div className="container-careloop">
        <SectionHeading
          align="center"
          tag="Qui sommes-nous"
          title="Une communauté au service de l'excellence"
          text="Une communauté dynamique au service de l'excellence académique et de l'épanouissement étudiant."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Notre Histoire */}
          <Reveal className="rounded-[2rem] bg-white p-8 sm:p-10">
            <h3 className="font-display text-3xl text-ink sm:text-4xl">{HISTOIRE.titre}</h3>
            <div className="mt-5 space-y-4 text-green-600">
              {HISTOIRE.paragraphes.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* Notre Vision */}
          <Reveal delay={120} className="rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
            <h3 className="font-display text-3xl text-cream sm:text-4xl">{VISION.titre}</h3>
            <div className="mt-5 space-y-4 text-cream/80">
              {VISION.paragraphes.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Pill href="/qui-sommes-nous" variant="orange" size="md" arrow className="mt-7">
              En savoir plus
            </Pill>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
