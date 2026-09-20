import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="absolute inset-0 bg-navy-radial" aria-hidden="true" />
      <Container className="relative">
        <Badge tone="dark">{eyebrow}</Badge>
        <h1 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
