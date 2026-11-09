import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { MissionVision } from "@/components/sections/MissionVision";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { differentiators } from "@/lib/data/differentiators";
import { buildMetadata } from "@/lib/utils/seo";
import { siteConfig } from "@/lib/utils/site-config";
import { imageSlots } from "@/lib/data/images";

export const metadata: Metadata = buildMetadata({
  title: "About OSSF",
  description:
    "Established in 2002 in Thane, Om Shiv Security Force (OSSF) is a professionally managed security and facility management company providing trained, disciplined manpower across industries.",
  path: "/about",
});

const workforcePrinciples = differentiators.slice(0, 6);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About Us · Established ${siteConfig.foundingYear}`}
        title="Two decades of keeping Mumbai's sites safe, clean and running"
        description="Om Shiv Security Force (OSSF) is a Thane-based, PSARA-licensed company supplying trained security, housekeeping, valet and technical staff across Maharashtra, Goa, Gujarat and Daman."
        image={imageSlots.aboutHero}
      />

      <Section tone="light">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Who We Are"
              title="Built on one simple promise: people you can depend on"
              description="Om Shiv Security Force began in 2002 with a straightforward idea: a security agency is only as good as the person standing at the gate at 3 a.m. Everything we do, from how we hire to how we supervise, is built around making sure that person is verified, trained, alert and accountable."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              Today we serve housing societies, corporate offices, factories, hospitals, schools,
              hotels and commercial sites with security guards, housekeeping teams, valet drivers
              and technical staff. Our workforce includes retired defence personnel alongside
              trained security and facility professionals, and every one of them answers to an OSSF
              supervisor.
            </p>
            <div className="mt-6 rounded-xl border border-surface-border bg-surface-subtle p-5">
              <h3 className="text-sm font-semibold text-navy-950">Our Commitment</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                No missed shifts left uncovered. No guard left unsupervised. No statutory shortcuts.
                We plan every deployment around the client&apos;s site and stay accountable for it,
                from the first day to the last.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <PlaceholderImage {...imageSlots.aboutOperations} ratio="aspect-[5/4]" />
          </RevealOnScroll>
        </div>
      </Section>

      <MissionVision />

      <Section tone="light">
        <SectionHeading
          eyebrow="One Partner"
          title="Four services, one point of contact"
          description="Combine security, upkeep and manpower under one contract instead of managing a separate vendor for each."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <RevealOnScroll>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">Security & Event Protection</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Armed and unarmed guards, supervisors, bouncers, gate control and CCTV monitoring
                for sites, events and exhibitions, backed by daily reporting.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={60}>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">Housekeeping & Soft Services</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Office and industrial housekeeping, deep cleaning, pantry services and waste
                management on a fixed, supervised schedule.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">
                Valet & Front-of-House Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Courteous, experienced valet drivers for hotels, restaurants, corporate events,
                residential complexes and commercial establishments.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={180}>
            <div className="rounded-xl border border-surface-border bg-white p-6">
              <h3 className="text-sm font-semibold text-navy-950">
                Technical & Non-Technical Manpower
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Electricians, plumbers, HVAC and maintenance technicians, machine operators,
                helpers, office assistants, loaders, packers and facility support staff.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Our People"
              title="The standard every OSSF employee is held to"
              description="Whether they guard a factory gate or a hospital lobby, every OSSF employee meets the same bar."
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {workforcePrinciples.map((item, index) => (
              <RevealOnScroll key={item.title} delay={index * 50}>
                <div className="flex gap-3">
                  <item.icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-navy-950">{item.title}</h3>
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

      <ComplianceSection />
      <FinalCTA secondary={{ href: "/services", label: "Explore our services" }} />
    </>
  );
}
