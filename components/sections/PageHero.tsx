import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { ImageSlot } from "@/lib/data/images";

export function PageHero({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  /** Photography slot shown beside the heading on large screens. */
  image?: ImageSlot;
}) {
  const heading = (
    <div>
      <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">{description}</p>
      ) : null}
    </div>
  );

  return (
    <section className="border-b border-line bg-panel">
      <Container className="py-12 sm:py-16">
        {image ? (
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {heading}
            <div className="hidden lg:block">
              <PlaceholderImage {...image} ratio="aspect-[3/2]" priority sizes="40vw" />
            </div>
          </div>
        ) : (
          heading
        )}
      </Container>
    </section>
  );
}
