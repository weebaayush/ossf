import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RequestQuoteForm } from "@/components/forms/RequestQuoteForm";
import { formatPhone, siteConfig, telHref, whatsappHref } from "@/lib/utils/site-config";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Request a quotation from OSSF for security guards, housekeeping or facility support staff. Share your site details and we will send a proposal.",
  path: "/request-a-quote",
});

const linkClass = "font-semibold text-ink underline-offset-4 hover:text-brand hover:underline";

const nextSteps = [
  "We go through your requirement and site details.",
  "We call you to confirm the scope, and visit the site if needed.",
  "You receive a proposal with the staffing plan and rates.",
];

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        title="Request a quote"
        description="Share a few details about your site and we will send a proposal. There is no charge and no obligation."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:gap-16">
          <RequestQuoteForm />

          <aside className="space-y-10">
            <div>
              <h2 className="text-lg font-bold">Prefer to talk?</h2>
              <p className="mt-3 text-base leading-relaxed">
                <a href={telHref(siteConfig.phone)} className={linkClass}>
                  {formatPhone(siteConfig.phone)}
                </a>
                <br />
                <a href={telHref(siteConfig.phoneSecondary)} className={linkClass}>
                  {formatPhone(siteConfig.phoneSecondary)}
                </a>
                <br />
                <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.email}
                </a>
                <br />
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Message us on WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Office: {siteConfig.businessHours.officeEnquiries}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">What happens next</h2>
              <ol className="mt-4 space-y-4 text-[0.9375rem] leading-relaxed text-ink-muted">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center bg-signal font-display text-sm font-bold text-signal-ink"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
