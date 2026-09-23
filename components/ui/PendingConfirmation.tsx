import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { CLIENT_CONFIRM } from "@/lib/utils/site-config";

/**
 * Visible marker for content the client has not confirmed yet.
 *
 * Deliberately rendered (not hidden) so reviewers can see every gap before
 * launch. Once the client supplies the value, replace the usage with the real
 * content — searching the codebase for `PendingConfirmation` or
 * `CLIENT CONFIRMATION REQUIRED` lists every remaining instance.
 */
export function PendingConfirmation({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border border-dashed border-ink-soft/50 px-1.5 py-0.5 text-xs font-medium text-ink-muted",
        className
      )}
      data-client-confirmation="required"
    >
      {children ?? CLIENT_CONFIRM}
    </span>
  );
}
