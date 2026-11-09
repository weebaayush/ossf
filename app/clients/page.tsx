import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { clientShowcaseNote, residentialSocieties } from "@/lib/data/clients";
import { ClientDirectory } from "@/components/sections/ClientDirectory";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Clients",
  description:
    "OSSF serves 200+ clients across industrial, corporate, residential, hospitality and institutional sectors, including Lodha, Runwal Realty, KIMS Hospitals and more.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="The organizations that trust us with their premises"
        description="From leading real estate developers to hospitals and schools, a selection of the clients OSSF serves."
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Client Showcase"
          title="Our clientele"
          description="Organizations across real estate, healthcare, education, industry and commerce that OSSF provides security and facility services to."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-10 max-w-6xl">
          <ClientDirectory />
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-ink-muted">
          {clientShowcaseNote}
        </p>
      </Section>

      <Section tone="subtle">
        <SectionHeading
          eyebrow="Residential Clients"
          title="Housing societies we protect"
          description={`${residentialSocieties.length} co-operative housing societies across Thane and Mumbai trust OSSF with their gates, patrols and upkeep.`}
          align="center"
          className="mx-auto"
        />

        <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          {residentialSocieties.map((society) => (
            <li key={society} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
              {society}
            </li>
          ))}
        </ul>
      </Section>

      <FinalCTA secondary={{ href: "/services", label: "Explore our services" }} />
    </>
  );
}
