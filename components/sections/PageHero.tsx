import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/lib/utils/cn";
import type { ImageSlot } from "@/lib/data/images";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** Photography slot shown beside the heading on large screens. */
  image?: ImageSlot;
}) {
  const heading = (
    <>
      <Badge tone="dark">{eyebrow}</Badge>
      <h1 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
          {description}
        </p>
      ) : null}
    </>
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-950",
        image ? "pt-36 sm:pt-44" : "pb-16 pt-36 sm:pb-20 sm:pt-44"
      )}
    >
      <div className="absolute inset-0 bg-navy-radial" aria-hidden="true" />
      <Container className="relative">
        {image ? (
          <div className="grid grid-cols-1 items-end gap-10 pb-14 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>{heading}</div>
            <div className="hidden lg:block">
              <PlaceholderImage
                {...image}
                ratio="aspect-[4/3]"
                className="border-white/10"
                priority
                sizes="40vw"
              />
            </div>
          </div>
        ) : (
          heading
        )}
      </Container>
    </section>
  );
}
