import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { siteConfig, telHref } from "@/lib/utils/site-config";

/**
 * Shared layout for legal pages (Terms, Privacy): readable single column,
 * consistent heading/paragraph/list styling, a "Last updated" line and the
 * company contact block drawn from site-config.
 */
export function LegalDocument({
  lastUpdated,
  intro,
  children,
}: {
  /** Human-readable date, e.g. "23 September 2026". Update when the text changes. */
  lastUpdated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  const { address } = siteConfig;

  return (
    <Section tone="light">
      <article className="mx-auto max-w-2xl text-[0.95rem] leading-relaxed text-ink-muted">
        <p className="text-sm text-ink-soft">
          Last updated: <time>{lastUpdated}</time>
        </p>
        {intro ? <div className="mt-6 space-y-4 text-base text-ink">{intro}</div> : null}

        <div className="mt-4 [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_li]:pl-1 [&_p]:mt-3 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>

        <div className="mt-12 rounded-lg border border-line bg-sunken p-6">
          <h2 className="text-base font-semibold text-ink">Contact</h2>
          <p className="mt-2 text-sm">
            {siteConfig.name} ({siteConfig.shortName})
            <br />
            {address.line1}, {address.line2}
            <br />
            {address.locality}, {address.region} {address.postalCode}, India
          </p>
          <p className="mt-3 text-sm">
            Phone:{" "}
            <a href={telHref(siteConfig.phone)} className="font-medium text-ink hover:text-brand">
              {siteConfig.phone}
            </a>
            {" / "}
            <a
              href={telHref(siteConfig.phoneSecondary)}
              className="font-medium text-ink hover:text-brand"
            >
              {siteConfig.phoneSecondary}
            </a>
            <br />
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="break-all font-medium text-ink hover:text-brand"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </article>
    </Section>
  );
}
