import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";

export function ServicesGrid() {
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

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <RevealOnScroll key={service.slug} delay={index * 60}>
            <Card className="group h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-950">
                <service.icon className="h-5 w-5 text-accent-500" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {service.shortDescription}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5"
              >
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      <Button href="/services" variant="ghost" className="mt-8 sm:hidden">
        View all services
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </Section>
  );
}
