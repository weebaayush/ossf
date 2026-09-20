import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RequestQuoteForm } from "@/components/forms/RequestQuoteForm";
import { siteConfig } from "@/lib/utils/site-config";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Request a tailored security or facility management proposal from OSSF for your site.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your requirement"
        description="Share a few details about your site and we'll come back with a tailored proposal."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
          <RequestQuoteForm />

          <div className="space-y-6">
            <div className="rounded-xl border border-surface-border bg-surface-subtle p-6">
              <h2 className="text-sm font-semibold text-navy-950">
                Prefer to talk directly?
              </h2>
              <div className="mt-4 space-y-3 text-sm text-ink-muted">
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {siteConfig.phone}
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {siteConfig.email}
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {siteConfig.businessHours}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h2 className="text-sm font-semibold text-navy-950">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>1. We review your requirement and site details.</li>
                <li>2. A short assessment call to confirm scope, if needed.</li>
                <li>3. You receive a tailored proposal and deployment plan.</li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
