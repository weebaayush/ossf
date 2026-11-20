import type { Metadata } from "next";
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
        title="Clients we work for"
        description="Real estate developers, hospitals, schools, businesses and housing societies that OSSF provides security and facility services to."
      />

      <Section tone="light">
        <ClientDirectory />
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {clientShowcaseNote}
        </p>
      </Section>

      <Section tone="subtle">
        <SectionHeading
          title="Housing societies"
          description={`${residentialSocieties.length} co-operative housing societies where OSSF provides gate security, patrols and upkeep.`}
        />

        <ul className="marker-list mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-[0.9375rem] text-ink sm:grid-cols-2 lg:grid-cols-4">
          {residentialSocieties.map((society) => (
            <li key={society}>{society}</li>
          ))}
        </ul>
      </Section>

      <FinalCTA secondary={{ href: "/services", label: "See our services" }} />
    </>
  );
}
