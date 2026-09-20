import { Users, Clock, LayoutGrid, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const metrics = [
  { icon: Users, value: "100+", label: "Client Relationships" },
  { icon: Clock, value: "24×7", label: "Operational Support" },
  { icon: LayoutGrid, value: "11", label: "Sectors Served" },
  { icon: ShieldCheck, value: "PSARA", label: "Licensed Agency" },
];

export function TrustMetrics() {
  return (
    <section className="relative z-10 -mt-16 sm:-mt-20">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-800 bg-navy-800 shadow-lifted lg:grid-cols-4">
          {metrics.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 bg-navy-950 px-6 py-8"
            >
              <Icon className="h-5 w-5 text-accent-500" aria-hidden="true" />
              <div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/55">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
