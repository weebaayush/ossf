import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { MissionVision } from "@/components/sections/MissionVision";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/utils/seo";
import { siteConfig } from "@/lib/utils/site-config";
import { imageSlots } from "@/lib/data/images";

export const metadata: Metadata = buildMetadata({
  title: "About OSSF",
  description:
    "Om Shiv Security Force (OSSF) is a PSARA-licensed security and integrated facility management company, established in 2002, supplying trained and supervised security, housekeeping and support staff.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`Security and facility management since ${siteConfig.foundingYear}`}
        description="Om Shiv Security Force (OSSF) is a PSARA-licensed company that supplies security, housekeeping, valet and technical staff to businesses, institutions and residential communities."
        image={imageSlots.aboutHero}
      />

      <Section tone="light">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="Who we are" />
            <div className="mt-5 max-w-[60ch] space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                {siteConfig.name} was established in {siteConfig.foundingYear}. We supply security
                guards, housekeeping teams, valet drivers and technical staff to housing societies,
                corporate offices, factories, hospitals, schools, hotels and commercial sites.
              </p>
              <p>
                Our workforce includes retired defence personnel alongside trained security and
                facility staff. Everyone we deploy is police verified, trained before posting and
                answerable to an OSSF supervisor.
              </p>
              <p>
                We currently work for clients in {siteConfig.coverage}. Our registered office is in{" "}
                {siteConfig.address.locality}, {siteConfig.address.region}.
              </p>
              <p>
                A client can take a single service or combine several under one contract, with one
                invoice and one point of contact. We employ the staff ourselves, pay their wages and
                meet the PF, ESIC and other statutory obligations for them.
              </p>
            </div>
            <Link
              href="/why-ossf"
              className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              How we recruit, train and supervise
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <PlaceholderImage {...imageSlots.aboutOperations} ratio="aspect-[4/3]" />
        </div>
      </Section>

      <MissionVision />
      <ComplianceSection />
      <FinalCTA secondary={{ href: "/services", label: "See our services" }} />
    </>
  );
}
