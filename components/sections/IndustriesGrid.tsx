import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data/industries";

/** Homepage index of sectors; each links to its entry on /industries. */
export function IndustriesGrid() {
  return (
    <Section tone="light">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          title="Sectors we work in"
          description="A factory gate, a hospital lobby and a society entrance need different things from their staff. Deployments are planned for the kind of site."
        />
        <ul className="marker-list grid grid-cols-1 gap-x-10 gap-y-3.5 self-start sm:grid-cols-2">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries#${industry.slug}`}
                className="link-underline text-base font-semibold text-ink hover:text-brand"
              >
                {industry.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
