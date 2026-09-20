import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/**
 * Placeholder used wherever real OSSF photography has not been supplied yet.
 * Keeps a consistent, clearly-labelled visual slot so layout doesn't shift
 * when real images (via next/image) are dropped in later — just replace the
 * usage with an <Image src="/images/..." /> pointing at the same folder.
 */
export function PlaceholderImage({
  label,
  className,
  ratio = "aspect-[4/3]",
  fill = false,
  rounded = true,
}: {
  label: string;
  className?: string;
  ratio?: string;
  fill?: boolean;
  rounded?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden border border-navy-700 bg-gradient-to-br from-navy-900 to-navy-800",
        rounded && "rounded-xl",
        fill ? "absolute inset-0 h-full" : ratio,
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center text-white/40">
        <ImageOff className="h-6 w-6" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
