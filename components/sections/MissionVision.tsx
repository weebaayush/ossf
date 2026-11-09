import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { mission, vision, coreValues } from "@/lib/data/company";

/** Mission, vision and core values — used on the About page. */
export function MissionVision() {
  return (
    <Section tone="subtle">
      <SectionHeading
        eyebrow="Mission, Vision & Values"
        title="What we stand for"
        description="The principles that guide how we hire, train and serve, on every site and every shift."
        align="center"
        className="mx-auto"
      />

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {[mission, vision].map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 80}>
            <div className="h-full rounded-xl border border-surface-border bg-white p-7 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50">
                <item.icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value, index) => (
          <RevealOnScroll key={value.title} delay={index * 40}>
            <div className="flex h-full gap-3 rounded-xl border border-surface-border bg-white p-5">
              <value.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-navy-950">{value.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{value.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
