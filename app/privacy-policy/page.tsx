import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for the Om Shiv Security Force (OSSF) website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section tone="light">
        <div className="mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-ink-muted">
          <p>
            [CLIENT CONFIRMATION REQUIRED] — This page is a placeholder. OSSF&apos;s
            actual privacy policy — covering what information is collected
            through the website (such as the Request a Quote form), how it is
            used, stored and who it may be shared with — should be reviewed
            and approved before publishing.
          </p>
          <p>
            Until confirmed, no assumptions have been made about data
            retention periods, third-party processors, or specific legal
            bases for processing.
          </p>
        </div>
      </Section>
    </>
  );
}
