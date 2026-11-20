"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { ImageSlot } from "@/lib/data/images";

const INTERVAL_MS = 5000;

/**
 * Photo slideshow beside the homepage headline. Slides crossfade every few
 * seconds (opacity only, nothing moves) and it pauses while the pointer or
 * keyboard focus is on it. The arrows and dots always work. Slides are
 * configured in lib/data/images.ts.
 */
export function HeroSlideshow({ slides }: { slides: ImageSlot[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <div
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-sunken"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src ?? ""}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 45vw, 100vw"
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-700 ease-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
          style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
        />
      ))}

      {count > 1 ? (
        <>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-night/60 to-transparent px-3 pb-3 pt-10">
            <div className="flex items-center gap-1.5" role="group" aria-label="Choose photo">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Photo ${i + 1} of ${count}`}
                  aria-current={i === index}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={cn(
                      "h-2 w-2 transition-colors",
                      i === index ? "bg-signal" : "bg-white/70"
                    )}
                  />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/90 text-night hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/90 text-night hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
