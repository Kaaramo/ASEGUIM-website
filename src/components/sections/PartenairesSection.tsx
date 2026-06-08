import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { PARTENAIRES } from "@/data/aseguim";

export function PartenairesSection() {
  return (
    <section className="section-y">
      <div className="container-careloop">
        <SectionHeading
          align="center"
          tag="Nos partenaires"
          title="Les organisations qui soutiennent notre mission"
          text="Découvrez les partenaires prestigieux qui accompagnent l'ASEGUIM."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PARTENAIRES.map((p, i) => (
            <Reveal key={p.nom} delay={(i % 5) * 60}>
              <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-white p-5">
                {p.recent && (
                  <span className="absolute right-2 top-2 rounded-full bg-orange px-2 py-0.5 text-[0.6rem] font-bold uppercase text-white">
                    Nouveau
                  </span>
                )}
                <Image
                  src={p.logo}
                  alt={p.nom}
                  width={160}
                  height={120}
                  className="max-h-full w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Pill href="/devenir-partenaire" variant="orange" size="md" arrow>
            Devenir partenaire
          </Pill>
        </Reveal>
      </div>
    </section>
  );
}
