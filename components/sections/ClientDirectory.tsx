"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { clients, clientCategories, type ClientCategory } from "@/lib/data/clients";

type Filter = "all" | ClientCategory;

/**
 * Client showcase with sector filter tabs above a grid of bordered logo cards
 * (layout modelled on a classic "Our Clientele" page). Clients without a
 * logo file render as name cards in the same grid. All cards are in the
 * server-rendered HTML; filtering only hides/shows them.
 */
export function ClientDirectory() {
  const [filter, setFilter] = useState<Filter>("all");

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: clients.length },
    ...clientCategories
      .map((c) => ({ ...c, count: clients.filter((cl) => cl.category === c.id).length }))
      .filter((c) => c.count > 0),
  ];

  const visible = filter === "all" ? clients : clients.filter((c) => c.category === filter);
  const activeLabel = tabs.find((t) => t.id === filter)?.label ?? "All";

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter clients by sector">
        {tabs.map((tab) => {
          const active = tab.id === filter;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              aria-pressed={active}
              aria-controls="client-grid"
              className={cn(
                "inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm font-medium transition-colors",
                active
                  ? "border-ink bg-ink text-page"
                  : "border-line bg-panel text-ink-muted hover:border-ink-soft hover:text-ink"
              )}
            >
              {tab.label}
              <span
                className={cn("text-xs tabular-nums", active ? "text-page/70" : "text-ink-soft")}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "client" : "clients"}
        {filter === "all" ? "" : ` in ${activeLabel}`}.
      </p>

      <ul
        id="client-grid"
        className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
      >
        {visible.map((client) => (
          <li
            key={client.name}
            className="flex aspect-[3/2] items-center justify-center rounded-lg border border-line bg-white p-5 sm:p-6"
          >
            {client.logo ? (
              <div className="relative h-full w-full">
                <Image
                  src={client.logo.src}
                  alt={client.name}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="text-center font-display text-base font-semibold leading-snug text-ink sm:text-lg">
                {client.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
