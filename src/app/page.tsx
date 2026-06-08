import { Hero } from "@/components/aseguim/Hero";
import { MissionSection } from "@/components/aseguim/MissionSection";
import { DomainesSection } from "@/components/aseguim/DomainesSection";
import { ChiffresSection } from "@/components/aseguim/ChiffresSection";
import { ImplicationSection } from "@/components/aseguim/ImplicationSection";
import { TalentsPreview } from "@/components/aseguim/TalentsPreview";
import { PartenairesSection } from "@/components/aseguim/PartenairesSection";
import { CtaBanner } from "@/components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <DomainesSection />
      <ChiffresSection />
      <ImplicationSection />
      <TalentsPreview />
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
