import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { complianceItems } from "@/lib/data/compliance";
import { ArrowRight } from "lucide-react";

export function ComplianceSection() {
  return (
    <Section tone="navy">
      <SectionHeading
        eyebrow="Compliance"
        title="Operating under statutory compliance"
        description="OSSF maintains registration and compliance across the frameworks that govern private security operations in India."
        tone="light"
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {complianceItems.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 40}>
            <div className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <item.icon className="h-5 w-5 text-accent-500" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-xs leading-relaxed text-white/55">
                {item.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <Button href="/compliance" variant="outline-light" className="mt-10">
        View Compliance Details
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </Section>
  );
}
