import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { complianceItems } from "@/lib/data/compliance";
import { ArrowRight } from "lucide-react";

export function ComplianceSection() {
  return (
    <Section tone="navy">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Compliance"
            title="Operating under statutory compliance"
            description="OSSF maintains registration and compliance across the frameworks that govern private security operations in India — verifiable, not incidental."
            tone="light"
          />
          <Button href="/compliance" variant="outline-light" className="mt-8">
            View Compliance Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <RevealOnScroll className="flex flex-wrap gap-3">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5"
            >
              <item.icon className="h-4 w-4 text-accent-500" aria-hidden="true" />
              <span className="text-sm font-medium text-white">{item.title}</span>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </Section>
  );
}
