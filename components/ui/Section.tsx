import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

type Tone = "light" | "subtle";

const toneClasses: Record<Tone, string> = {
  light: "bg-page",
  subtle: "border-y border-line bg-sunken",
};

export function Section({
  children,
  className,
  tone = "light",
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={cn("py-16 md:py-24", toneClasses[tone], className)}>
      <Container>{children}</Container>
    </Tag>
  );
}
