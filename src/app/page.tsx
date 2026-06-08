import { Hero } from "@/components/home/Hero";
import { DonateSpotlight } from "@/components/home/DonateSpotlight";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramSection } from "@/components/home/ProgramSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { DifferenceSection } from "@/components/home/DifferenceSection";
import { CaseStudy } from "@/components/home/CaseStudy";
import { OurNumberSection } from "@/components/home/OurNumberSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { GuidingStarSection } from "@/components/home/GuidingStarSection";
import { BlogSection } from "@/components/home/BlogSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <DonateSpotlight />
      <AboutSection />
      <ProgramSection />
      <ImpactSection />
      <DifferenceSection />
      <CaseStudy />
      <OurNumberSection />
      <TestimonialSection />
      <GuidingStarSection />
      <BlogSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
