import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { IndustryCards } from "@/components/sections/IndustryCards";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "OSSF serves manufacturing industries, corporate offices, IT parks, residential complexes, hospitals, educational institutions, hotels, shopping malls, warehouses, construction sites and government organisations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Sectors we work in"
        description="A factory gate, a hospital lobby and a society entrance carry different risks. Select a sector to see our role there and what we provide."
      />

      <Section tone="light">
        <IndustryCards />
      </Section>

      <FinalCTA secondary={{ href: "/clients", label: "Clients we work for" }} />
    </>
  );
}
