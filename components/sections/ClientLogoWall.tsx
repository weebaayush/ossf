import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { logoClients } from "@/lib/data/clients";

/**
 * Compact grid of client logos for the homepage teaser (see lib/data/clients.ts;
 * the full filterable directory is ClientDirectory on /clients). Every logo sits in an
 * equal white cell and is scaled to fit, so wide wordmarks, square marks and
 * tile-style logos balance. Logos keep their original colours.
 */
export function ClientLogoWall({
  limit,
  className,
}: {
  /** Show only the first N logos (e.g. on the homepage teaser). */
  limit?: number;
  className?: string;
}) {
  const clients = typeof limit === "number" ? logoClients.slice(0, limit) : logoClients;
  if (clients.length === 0) return null;

  return (
    <ul
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-surface-border bg-surface-border sm:grid-cols-4",
        className
      )}
      aria-label="Our clients"
    >
      {clients.map((client) => (
        <li
          key={client.name}
          className="group flex items-center justify-center bg-white px-5 py-6 sm:px-6 sm:py-8"
        >
          <div className="relative h-16 w-full max-w-[170px] sm:h-20">
            <Image
              src={client.logo.src}
              alt={client.name}
              fill
              sizes="170px"
              className="object-contain transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
