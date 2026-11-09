import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/utils/seo";
import { imageSlots, serviceImages } from "@/lib/data/images";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = buildMetadata({
  title: "Security & Facility Management Services",
  description:
    "Security guards, event and exhibition security, housekeeping and soft services, valet drivers, technical and non-technical manpower, and surveillance support — from OSSF across Thane, Mumbai and Maharashtra.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Security, housekeeping and manpower, under one roof"
        description="Trained, verified and supervised staff for every need on your premises. Take one service or combine several under a single contract."
        image={imageSlots.servicesHero}
      />

      {services.map((service, index) => (
        <Section
          key={service.slug}
          id={service.slug}
          tone={index % 2 === 0 ? "light" : "subtle"}
          className="scroll-mt-24"
        >
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
              <div>
                {serviceImages[service.slug] ? (
                  <PlaceholderImage
                    {...serviceImages[service.slug]}
                    ratio="aspect-[16/10]"
                    className="mb-6"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                ) : null}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                    <service.icon className="h-6 w-6 text-accent-500" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{service.description}</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-white p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  What you get
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                        aria-hidden="true"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </Section>
      ))}

      <FinalCTA secondary={{ href: "/industries", label: "See the industries we serve" }} />
    </>
  );
}
