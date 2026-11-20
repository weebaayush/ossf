import { Section } from "@/components/ui/Section";
import { mission, vision, coreValues } from "@/lib/data/company";

/** Mission, vision and core values - used on the About page. */
export function MissionVision() {
  return (
    <Section tone="subtle">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="mt-3 max-w-[48ch] text-lg leading-relaxed text-ink-muted">{mission}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-3 max-w-[48ch] text-lg leading-relaxed text-ink-muted">{vision}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Values</h2>
          <dl className="mt-5 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {coreValues.map((value) => (
              <div key={value.title} className="border-t border-line py-4">
                <dt className="text-base font-bold text-ink">{value.title}</dt>
                <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
