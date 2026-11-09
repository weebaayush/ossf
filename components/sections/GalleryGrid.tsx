"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/data/gallery";

type Filter = "all" | GalleryCategory;

const categoryLabel = (id: GalleryCategory) =>
  galleryCategories.find((c) => c.id === id)?.label ?? "";

/**
 * Filterable photo gallery. Slots without a `src` render as labelled
 * placeholders. Photos open in an enlarged view (native <dialog>: Esc closes,
 * arrow keys move between photos).
 */
export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible =
    filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);
  const viewable = visible.filter((i): i is GalleryItem & { src: string } => Boolean(i.src));

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: galleryItems.length },
    ...galleryCategories
      .map((c) => ({ ...c, count: galleryItems.filter((i) => i.category === c.id).length }))
      .filter((c) => c.count > 0),
  ];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  const current = openIndex !== null ? viewable[openIndex] : null;
  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + viewable.length) % viewable.length));

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter gallery by category"
      >
        {tabs.map((tab) => {
          const active = tab.id === filter;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              aria-pressed={active}
              aria-controls="gallery-grid"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "border-navy-950 bg-navy-950 text-white"
                  : "border-surface-border bg-white text-ink-muted hover:border-navy-400 hover:text-navy-950"
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "rounded-full px-1.5 text-xs tabular-nums",
                  active ? "bg-white/15 text-white" : "bg-surface-muted text-ink-soft"
                )}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "photo" : "photos"}.
      </p>

      <ul id="gallery-grid" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => {
          const viewIndex = viewable.findIndex((v) => v.file === item.file);
          return (
            <li key={item.file}>
              <figure className="group overflow-hidden rounded-xl border border-surface-border bg-white shadow-soft">
                {item.src ? (
                  <button
                    type="button"
                    onClick={() => setOpenIndex(viewIndex)}
                    className="relative block aspect-[4/3] w-full overflow-hidden"
                    aria-label={`Enlarge photo: ${item.title}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </button>
                ) : (
                  <div
                    className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-50 to-navy-100 px-6 text-center text-navy-400"
                    data-gallery-placeholder={item.file}
                  >
                    <ImageOff className="h-7 w-7" aria-hidden="true" />
                    <span className="text-xs font-medium uppercase tracking-wide">
                      Photo coming soon
                    </span>
                    <span className="font-mono text-[11px] text-navy-300">{item.file}</span>
                  </div>
                )}
                <figcaption className="px-5 py-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600">
                    {categoryLabel(item.category)}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-navy-950">{item.title}</p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenIndex(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="w-[min(92vw,1100px)] rounded-xl bg-navy-950 p-0 text-white backdrop:bg-navy-950/85"
        aria-label={current ? current.title : "Photo"}
      >
        {current ? (
          <div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="92vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-400">
                  {categoryLabel(current.category)}
                </span>
                <p className="mt-0.5 text-sm font-semibold">{current.title}</p>
              </div>
              <div className="flex items-center gap-2">
                {viewable.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </>
                ) : null}
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
