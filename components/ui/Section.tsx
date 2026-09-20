import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

type Tone = "light" | "subtle" | "navy";

const toneClasses: Record<Tone, string> = {
  light: "bg-surface",
  subtle: "bg-surface-subtle",
  navy: "bg-navy-950 text-white",
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
    <Tag id={id} className={cn("py-20 md:py-28", toneClasses[tone], className)}>
      <Container>{children}</Container>
    </Tag>
  );
}
