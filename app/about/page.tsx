import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { differentiators } from "@/lib/data/differentiators";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "About OSSF",
  description:
    "Om Shiv Security Force (OSSF) provides security and facility management services built on trained personnel, structured supervision and statutory compliance.",
  path: "/about",
});

const workforcePrinciples = differentiators.slice(0, 6);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A security and facility management partner built on discipline"
        description="Om Shiv Security Force (OSSF) supports organizations across Maharashtra with trained personnel, structured supervision and accountable service delivery."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Who We Are"
              title="Security and facility management, delivered with discipline"
              description="OSSF provides professional security and facility management services to industrial units, corporate offices, residential complexes, commercial establishments, hotels, construction sites, educational institutions, hospitals, warehouses, shopping complexes and government organizations."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              Our approach centers on trained, police-verified personnel,
              structured supervision and clear reporting — so clients get
              consistent, dependable coverage rather than unmanaged headcount.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <PlaceholderImage label="OSSF operations / control room" ratio="aspect-[5/4]" />
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading
          eyebrow="Capabilities"
          title="What we bring to every deployment"
          description="A capability set spanning security operations, consulting and facility support."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <RevealOnScroll>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">
                Security Operations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Personnel deployment, patrolling, access control, crowd
                management and emergency response — backed by daily occurrence
                and shift handover reporting.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={60}>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">
                Consulting & Assessment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Security consulting, electronic surveillance consultation and
                risk assessment services to shape the right deployment plan.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">
                Facility Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Facility support services and office management support that
                work alongside on-site security teams.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={180}>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">
                Supervision & Quality Control
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Regular supervision, surprise inspections, night audits and
                vigilance checks, with immediate manpower replacement when
                required.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Workforce Philosophy"
              title="People are the foundation of every deployment"
              description="Every OSSF personnel is expected to meet the same operational standard, regardless of site or sector."
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {workforcePrinciples.map((item, index) => (
              <RevealOnScroll key={item.title} delay={index * 50}>
                <div className="flex gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-navy-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      <HowWeWork />
      <ComplianceSection />
      <FinalCTA />
    </>
  );
}
