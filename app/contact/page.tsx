import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/utils/site-config";
import { buildMetadata } from "@/lib/utils/seo";

const fullAddress = `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
const mapsDirectionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Om Shiv Security Force (OSSF) for security and facility management enquiries across Thane, Mumbai and Maharashtra.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to OSSF"
        description="Reach out for enquiries, existing-client support, or to request a tailored proposal."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                <MapPin className="h-5 w-5 text-accent-500" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-navy-950">
                  Registered Office
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postalCode}, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                <Phone className="h-5 w-5 text-accent-500" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-navy-950">Phone</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-accent-600">
                    {siteConfig.phone}
                  </a>
                  {" / "}
                  <a href={`tel:${siteConfig.phoneSecondary}`} className="hover:text-accent-600">
                    {siteConfig.phoneSecondary}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                <Mail className="h-5 w-5 text-accent-500" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-navy-950">Email</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-600">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                <Clock className="h-5 w-5 text-accent-500" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-navy-950">
                  Business Hours
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {siteConfig.businessHours}
                </p>
              </div>
            </div>

            <Button href="/request-a-quote">
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex min-h-[360px] flex-col overflow-hidden rounded-xl border border-surface-border">
            <iframe
              title="OSSF registered office location"
              src={mapsEmbedSrc}
              className="h-full min-h-[320px] w-full flex-1 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-surface-subtle py-3 text-xs font-semibold text-navy-950 hover:text-accent-600"
            >
              Get Directions
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
