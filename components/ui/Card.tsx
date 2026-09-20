import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-surface-border bg-white p-6 shadow-soft transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-navy-400/40 hover:shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}
