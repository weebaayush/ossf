import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { complianceItems } from "@/lib/data/compliance";

export function ComplianceSection() {
  return (
    <Section tone="light">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <SectionHeading
            title="Licence and statutory registrations"
            description="If an agency skips its licence, PF or ESIC, the liability can fall on the principal employer. OSSF holds the registrations below and keeps the records your auditors ask for."
          />
          <Button href="/compliance" variant="outline" className="mt-7">
            Compliance details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div>
          <ul className="marker-list grid grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2">
            {complianceItems.map((item) => (
              <li key={item.title} className="text-base font-semibold text-ink">
                {item.title}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-muted">
            Registration numbers and certificate copies are shared with clients on request.
          </p>
        </div>
      </div>
    </Section>
  );
}
