import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { formatPhone, siteConfig, telHref, whatsappHref } from "@/lib/utils/site-config";
import { buildMetadata } from "@/lib/utils/seo";

const fullAddress = `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
const mapsDirectionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Om Shiv Security Force (OSSF) for security guard, housekeeping and facility management enquiries: phone, email, office address and hours.",
  path: "/contact",
});

const linkClass = "font-semibold text-ink underline-offset-4 hover:text-brand hover:underline";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Call, email or visit our office, for a new requirement or for support on an existing site."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <dl>
              <div className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-ink">Registered office</dt>
                <dd className="text-base leading-relaxed text-ink-muted">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postalCode}, India
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-ink">Phone</dt>
                <dd className="text-base leading-relaxed">
                  <a href={telHref(siteConfig.phone)} className={linkClass}>
                    {formatPhone(siteConfig.phone)}
                  </a>
                  <br />
                  <a href={telHref(siteConfig.phoneSecondary)} className={linkClass}>
                    {formatPhone(siteConfig.phoneSecondary)}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-ink">WhatsApp</dt>
                <dd className="text-base leading-relaxed">
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Message {formatPhone(siteConfig.whatsapp)}
                    <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-ink">Email</dt>
                <dd className="text-base leading-relaxed">
                  <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-ink">Areas served</dt>
                <dd className="text-base leading-relaxed text-ink-muted">
                  We currently work for clients in {siteConfig.coverage}. For a site elsewhere,
                  contact us and we will tell you whether we can staff it.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 border-y border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-ink">Hours</dt>
                <dd className="text-base leading-relaxed text-ink-muted">
                  Office: {siteConfig.businessHours.officeEnquiries}
                  <br />
                  Security operations: {siteConfig.businessHours.operations}
                </dd>
              </div>
            </dl>

            <Button href="/request-a-quote" className="mt-8">
              Request a quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex min-h-[360px] flex-col overflow-hidden rounded-lg border border-line">
            <iframe
              title="Map showing the OSSF registered office in Thane West"
              src={mapsEmbedSrc}
              className="h-full min-h-[320px] w-full flex-1 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-sunken py-3 text-sm font-semibold text-ink hover:text-brand"
            >
              Get directions
              <span className="sr-only">(opens Google Maps in a new tab)</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
