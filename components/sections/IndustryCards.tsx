"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";

const serviceTitle = (slug: string) => services.find((s) => s.slug === slug)?.title ?? slug;

/**
 * Sector cards for /industries. Each card opens on click to show OSSF's role
 * in that sector, the work provided and the services involved. One card is
 * open at a time. A link such as /industries#hospitals (used by the homepage
 * sector list) opens that card. All content is in the server-rendered HTML;
 * closed cards are only hidden.
 */
export function IndustryCards() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.slice(1);
      if (industries.some((industry) => industry.slug === slug)) setOpenSlug(slug);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <ul className="grid grid-cols-1 gap-4">
      {industries.map((industry) => {
        const open = industry.slug === openSlug;
        const panelId = `${industry.slug}-details`;
        return (
          <li
            key={industry.slug}
            id={industry.slug}
            className={cn(
              "scroll-mt-24 rounded-lg border bg-panel transition-colors",
              open ? "border-ink/40 shadow-card" : "border-line hover:border-ink/40"
            )}
          >
            <h2>
              <button
                type="button"
                onClick={() => setOpenSlug(open ? null : industry.slug)}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-6 rounded-lg px-5 py-5 text-left sm:px-7 sm:py-6"
              >
                <span>
                  <span className="block font-display text-lg font-bold text-ink [font-stretch:108%] sm:text-xl">
                    {industry.title}
                  </span>
                  <span className="mt-1.5 block max-w-[70ch] font-sans text-[0.9375rem] font-normal leading-relaxed text-ink-muted">
                    {industry.description}
                  </span>
                </span>
                <span
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center transition-colors",
                    open ? "bg-ink text-page" : "bg-signal text-signal-ink"
                  )}
                  aria-hidden="true"
                >
                  <Plus className={cn("h-4 w-4 transition-transform", open && "rotate-45")} />
                </span>
              </button>
            </h2>

            <div
              id={panelId}
              hidden={!open}
              className="border-t border-line px-5 pb-7 pt-6 sm:px-7"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
                <div>
                  <h3 className="text-base font-bold">Our role</h3>
                  <p className="mt-2 max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                    {industry.role}
                  </p>

                  <h3 className="mt-6 text-base font-bold">Services usually taken</h3>
                  <ul className="mt-2 space-y-1.5 text-[0.9375rem]">
                    {industry.services.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="link-underline font-semibold text-brand"
                        >
                          {serviceTitle(slug)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold">What we provide</h3>
                  <ul className="marker-list mt-3 space-y-2.5 text-[0.9375rem] text-ink-muted">
                    {industry.provides.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href="/request-a-quote"
                    className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                  >
                    Request a quote for this kind of site
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
