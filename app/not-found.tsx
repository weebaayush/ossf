import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-page">
      <Container className="py-24">
        <p className="text-sm font-semibold text-brand">Error 404</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-3 max-w-md text-base text-ink-muted">
          The page you are looking for does not exist or has moved.
        </p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
