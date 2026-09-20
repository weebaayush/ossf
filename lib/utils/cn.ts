type ClassValue = string | number | null | boolean | undefined;

/**
 * Minimal className combiner (clsx-style) so we don't need an extra dependency.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
