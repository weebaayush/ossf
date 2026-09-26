import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RequestQuoteForm } from "@/components/forms/RequestQuoteForm";
import { siteConfig, telHref } from "@/lib/utils/site-config";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Request a tailored security guard or facility management proposal from OSSF for your site in Thane, Mumbai, Maharashtra or surrounding regions.",
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
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  <span>
                    <a href={telHref(siteConfig.phone)} className="hover:text-accent-600">
                      {siteConfig.phone}
                    </a>
                    {" / "}
                    <a href={telHref(siteConfig.phoneSecondary)} className="hover:text-accent-600">
                      {siteConfig.phoneSecondary}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-accent-600">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  <span>
                    Security operations: {siteConfig.businessHours.operations}
                    <br />
                    Office enquiries:{" "}
                    {siteConfig.businessHours.officeEnquiries}
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h2 className="text-sm font-semibold text-navy-950">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-ink-muted">
                {[
                  "We review your requirement and site details.",
                  "A short assessment call to confirm scope, if needed.",
                  "You receive a tailored proposal and deployment plan.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-display font-bold text-navy-400" aria-hidden="true">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
