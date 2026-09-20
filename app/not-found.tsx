import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-950">
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/65">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
