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
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Om Shiv Security Force (OSSF) | Security & Facility Management in Thane, Mumbai",
  description:
    "PSARA-licensed security and facility management company in Thane since 2002 — security guards, event security, housekeeping, valet drivers and technical manpower for residential, commercial and industrial sites across Mumbai and Maharashtra.",
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
      <FAQ tone="subtle" />
      <FinalCTA />
    </>
  );
}
