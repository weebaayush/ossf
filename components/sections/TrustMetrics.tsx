import { Users, Clock, LayoutGrid, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/utils/site-config";
import { industries } from "@/lib/data/industries";

const metrics = [
  { icon: Users, value: "100+", label: "Client Relationships" },
  { icon: Clock, value: "24×365", label: "Security Operations" },
  { icon: LayoutGrid, value: String(industries.length), label: "Sectors Served" },
  { icon: ShieldCheck, value: "PSARA", label: "Licensed Agency" },
];

export function TrustMetrics() {
  return (
    <section className="relative z-10 -mt-16 sm:-mt-20">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-navy-800 bg-navy-950 shadow-lifted">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1px_1fr]">
            <div className="flex flex-col justify-center gap-2 px-7 py-8">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                Track Record
              </span>
              <p className="text-sm leading-relaxed text-white/60">
                Operating since {siteConfig.foundingYear} from Thane, serving
                sites across Maharashtra, Goa, Gujarat and Daman.
              </p>
            </div>
            <div className="hidden bg-navy-800 lg:block" aria-hidden="true" />
            <div className="grid grid-cols-2 divide-x divide-y divide-navy-800 border-t border-navy-800 lg:grid-cols-4 lg:divide-y-0 lg:border-t-0">
              {metrics.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-start gap-3 px-6 py-8"
                >
                  <Icon className="h-5 w-5 text-accent-500" aria-hidden="true" />
                  <div>
                    <div className="text-2xl font-bold text-white sm:text-3xl">
                      {value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
