"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { ImageSlot } from "@/lib/data/images";

const INTERVAL_MS = 6000;

/**
 * Full-width photo slideshow behind the homepage headline. Fills its parent
 * (which must be `relative`). Slides crossfade every few seconds (opacity
 * only, nothing moves); it pauses while the pointer or keyboard focus is on
 * the arrows or dots, and after a visitor uses them. Slides are configured in
 * lib/data/images.ts.
 *
 * The photos are decorative behind the text, so they carry empty alt text;
 * the slide controls are labelled for screen readers.
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

  const go = (step: number) => {
    setPaused(true);
    setIndex((i) => (i + step + count) % count);
  };

  return (
    <>
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src ?? ""}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-1000 ease-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
            style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
          />
        ))}
      </div>

      {count > 1 ? (
        <div
          className="absolute bottom-5 right-5 z-20 flex items-center gap-3 sm:bottom-8 sm:right-8"
          role="group"
          aria-roledescription="carousel"
          aria-label="Background photos"
          onMouseEnter={() => setPaused(true)}
          onFocus={() => setPaused(true)}
        >
          <div className="hidden items-center gap-1 sm:flex">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => {
                  setPaused(true);
                  setIndex(i);
                }}
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
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-night hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-night hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}
