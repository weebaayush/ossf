import type { Metadata } from "next";
import { buildMetadata } from "@/lib/utils/seo";
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

export const metadata: Metadata = buildMetadata({
  title: "Om Shiv Security Force (OSSF) | Security & Facility Management in Thane, Mumbai",
  description:
    "PSARA-licensed security services and facility management since 2017 — trained, police-verified security guards for industrial, corporate, residential and institutional sites across Thane, Mumbai and Maharashtra.",
  path: "",
  absoluteTitle: true,
});

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
