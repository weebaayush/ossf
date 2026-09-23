import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";
import { industries } from "@/lib/data/industries";

// Index-based spans create a bento layout: one large feature tile, two wide
// tiles, and the rest as compact tiles — deliberately different from the
// uniform card grid on the dedicated /industries page.
const featureIndex = 0;
const wideIndices = new Set([3, 7]);

export function IndustriesGrid() {
  return (
    <Section tone="navy" className="bg-navy-radial">
      <SectionHeading
        eyebrow="Sectors We Serve"
        title="Industries relying on OSSF"
        description="Deployment approaches adapted to the operating realities of each sector."
        tone="light"
      />

      <div className="mt-12 grid grid-cols-2 gap-4 [grid-auto-flow:dense] lg:grid-cols-4 lg:auto-rows-[minmax(136px,auto)]">
        {industries.map((industry, index) => {
          const isFeature = index === featureIndex;
          const isWide = wideIndices.has(index);

          return (
            <RevealOnScroll
              key={industry.slug}
              delay={index * 40}
              className={cn(
                isFeature && "lg:col-span-2 lg:row-span-2",
                isWide && "col-span-2"
              )}
            >
              <div
                className={cn(
                  "group flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-accent-500/40 hover:bg-white/[0.06]",
                  isWide && "sm:flex-row sm:items-center sm:gap-5"
                )}
              >
                <div className={cn(isWide && "sm:flex sm:items-center sm:gap-4")}>
                  <industry.icon
                    className={cn(
                      "text-accent-500",
                      isFeature ? "h-7 w-7" : "h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                  <h3
                    className={cn(
                      "font-semibold text-white",
                      isFeature ? "mt-4 text-lg" : "mt-4 text-sm",
                      isWide && "mt-0 sm:mt-0"
                    )}
                  >
                    {industry.title}
                  </h3>
                </div>
                <p
                  className={cn(
                    "leading-relaxed text-white/55",
                    isFeature ? "mt-3 max-w-sm text-sm" : "mt-1.5 text-xs",
                    isWide && "mt-1.5 sm:mt-0 sm:max-w-xs"
                  )}
                >
                  {industry.description}
                </p>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
