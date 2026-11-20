import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Logo yellow with dark text: the one button that asks for the enquiry.
  primary: "bg-signal text-signal-ink hover:bg-signal-strong",
  secondary: "bg-ink text-page hover:bg-ink/85",
  outline: "border border-ink/25 text-ink hover:border-ink/60 hover:bg-sunken",
  // For use on the solid blue bands only.
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost: "text-ink hover:bg-sunken",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
  type?: undefined;
  onClick?: never;
  disabled?: undefined;
};

type NativeButtonProps = BaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
