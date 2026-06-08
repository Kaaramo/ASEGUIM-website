import { Hero } from "@/components/sections/Hero";
import { MissionSection } from "@/components/sections/MissionSection";
import { DomainesSection } from "@/components/sections/DomainesSection";
import { ChiffresSection } from "@/components/sections/ChiffresSection";
import { ImplicationSection } from "@/components/sections/ImplicationSection";
import { PartenairesSection } from "@/components/sections/PartenairesSection";
import { CtaBanner } from "@/components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <DomainesSection />
      <ChiffresSection />
      <ImplicationSection />
      <PartenairesSection />
      <CtaBanner
        title="Rejoignez l'ASEGUIM"
        text="ASEGUIMIEN pour un jour, ASEGUIMIEN pour toujours. Devenez membre du plus grand réseau étudiant guinéen au Maroc."
        ctaLabel="Adhérer maintenant"
        ctaHref="/adhesion"
      />
    </>
  );
}
