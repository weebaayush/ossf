import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { ImageCredit } from "@/lib/data/images";

/**
 * Photography slot. With `src` + `alt` (normally spread from an entry in
 * lib/data/images.ts) it renders the photo through next/image, filling a
 * fixed-ratio frame so there is no layout shift. Without `src` it renders a
 * clearly labelled placeholder panel of the same size.
 */
export function PlaceholderImage({
  label,
  src,
  alt = "",
  className,
  ratio = "aspect-[4/3]",
  fill = false,
  rounded = true,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  objectPosition,
}: {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  ratio?: string;
  fill?: boolean;
  rounded?: boolean;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  /** Source/licence record — kept with the slot for reference, not rendered. */
  credit?: ImageCredit;
}) {
  // `absolute` and `relative` must not both be applied: Tailwind emits
  // `.relative` after `.absolute`, which would collapse a fill frame to 0px.
  const frame = cn(
    "w-full overflow-hidden",
    rounded && "rounded-xl",
    fill ? "absolute inset-0 h-full" : cn("relative", ratio),
    className
  );

  if (src) {
    return (
      <div className={cn(frame, "bg-navy-900")}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={fill ? "100vw" : sizes}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        frame,
        "flex items-center justify-center border border-navy-700 bg-gradient-to-br from-navy-900 to-navy-800"
      )}
      // Purely a layout placeholder — nothing meaningful for assistive tech.
      aria-hidden="true"
      data-placeholder-image={label}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center text-white/40">
        <ImageOff className="h-6 w-6" />
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
}
