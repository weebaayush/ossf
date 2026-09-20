import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Badge({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
}) {
  const toneClasses = {
    light: "bg-surface-muted text-ink-muted border-surface-border",
    dark: "bg-white/10 text-white border-white/15",
    accent: "bg-accent-50 text-accent-600 border-accent-100",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
