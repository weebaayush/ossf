import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { logoClients } from "@/lib/data/clients";

/**
 * Compact grid of client logos for the homepage (see lib/data/clients.ts; the
 * full filterable directory is ClientDirectory on /clients). Every logo sits
 * in an equal white cell and is scaled to fit, so wide wordmarks, square marks
 * and tile-style logos balance. Logos keep their original colours.
 */
export function ClientLogoWall({
  limit,
  className,
}: {
  /** Show only the first N logos. */
  limit?: number;
  className?: string;
}) {
  const clients = typeof limit === "number" ? logoClients.slice(0, limit) : logoClients;
  if (clients.length === 0) return null;

  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4 lg:grid-cols-6",
        className
      )}
      aria-label="Client logos"
    >
      {clients.map((client) => (
        <li key={client.name} className="flex items-center justify-center bg-white px-5 py-5">
          <div className="relative h-14 w-full max-w-[150px]">
            <Image
              src={client.logo.src}
              alt={client.name}
              fill
              sizes="150px"
              className="object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
