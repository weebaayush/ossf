import type { Metadata } from "next";
import { buildMetadata } from "@/lib/utils/seo";
import { Hero } from "@/components/sections/Hero";
import { ClientsTeaser } from "@/components/sections/ClientsTeaser";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyOSSF } from "@/components/sections/WhyOSSF";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Om Shiv Security Force (OSSF) | Security & Integrated Facility Management Services",
  description:
    "Om Shiv Security Force is a PSARA-licensed security and facility management company, established in 2002. Security guards, housekeeping, event security, valet drivers and technical manpower for businesses and residential communities.",
  path: "",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsTeaser />
      <ServicesGrid />
      <WhyOSSF />
      <IndustriesGrid />
      <HowWeWork />
      <ComplianceSection />
      <FAQ tone="subtle" />
      <FinalCTA />
    </>
  );
}
