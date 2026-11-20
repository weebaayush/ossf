import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { complianceItems } from "@/lib/data/compliance";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compliance & Licensing",
  description:
    "OSSF is a PSARA-licensed security agency registered under the Government of Maharashtra, with EPFO, ESIC, Labour Welfare, Professional Tax, GST, UDYAM and Shops & Establishment registrations.",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <>
      <PageHero
        title="Licence and statutory registrations"
        description="If an agency skips its licence, PF or ESIC, the liability can fall on the principal employer. These are the registrations OSSF holds."
      />

      <Section tone="light">
        <dl className="max-w-4xl">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-[16rem_1fr] sm:gap-8"
            >
              <dt className="text-base font-bold text-ink">{item.title}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-ink-muted">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-3xl border-l-4 border-signal pl-5 text-[0.9375rem] leading-relaxed text-ink-muted">
          Registration numbers and certificate copies are not published on this website. They are
          shared with prospective and existing clients on request, through the details on our{" "}
          <Link href="/contact" className="font-semibold text-brand underline">
            Contact page
          </Link>
          .
        </p>
      </Section>

      <FinalCTA secondary={{ href: "/contact", label: "Ask for certificate copies" }} />
    </>
  );
}
