import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhyOSSF } from "@/components/sections/WhyOSSF";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { ClientsTeaser } from "@/components/sections/ClientsTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <AboutIntro />
      <ServicesGrid />
      <IndustriesGrid />
      <WhyOSSF />
      <HowWeWork />
      <ComplianceSection />
      <ClientsTeaser />
      <FinalCTA />
    </>
  );
}
