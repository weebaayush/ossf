import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of Service for the Om Shiv Security Force (OSSF) website.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <Section tone="light">
        <div className="mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-ink-muted">
          <p>
            [CLIENT CONFIRMATION REQUIRED] — This page is a placeholder. Terms
            governing use of this website, and separately the terms of any
            service engagement with OSSF, should be drafted and approved
            before publishing.
          </p>
        </div>
      </Section>
    </>
  );
}
