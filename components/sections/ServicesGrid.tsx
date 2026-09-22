import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { services } from "@/lib/data/services";

export function ServicesGrid() {
  const [flagship, ...rest] = services;

  return (
    <Section tone="subtle">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="What We Do"
          title="Security & facility management services"
          description="Core service categories drawn from OSSF's operational scope — each tailored to the site it's deployed on."
        />
        <Button href="/services" variant="ghost" className="hidden shrink-0 sm:inline-flex">
          View all services
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <RevealOnScroll>
          <Link
            href={`/services#${flagship.slug}`}
            className="group grid h-full grid-cols-1 overflow-hidden rounded-xl border border-surface-border bg-white shadow-soft transition-shadow duration-300 hover:shadow-card sm:grid-rows-[220px_1fr]"
          >
            <PlaceholderImage
              label="Security personnel on deployment"
              rounded={false}
              className="border-0"
              ratio="aspect-[16/9] sm:aspect-auto sm:h-full"
            />
            <div className="flex flex-1 flex-col p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                Core Offering
              </span>
              <h3 className="mt-2 text-xl font-semibold text-navy-950">
                {flagship.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {flagship.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5">
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </RevealOnScroll>

        <div className="flex flex-col divide-y divide-surface-border rounded-xl border border-surface-border bg-white">
          {rest.map((service, index) => (
            <RevealOnScroll key={service.slug} delay={index * 50}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex items-start gap-5 p-6 transition-colors hover:bg-surface-subtle"
              >
                <span className="pt-0.5 font-display text-lg font-bold text-navy-200">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-navy-950">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {service.shortDescription}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600"
                  aria-hidden="true"
                />
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <Button href="/services" variant="ghost" className="mt-8 sm:hidden">
        View all services
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </Section>
  );
}
