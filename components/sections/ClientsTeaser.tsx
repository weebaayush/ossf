import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { residentialSocieties } from "@/lib/data/clients";

/** Homepage strip of client logos, directly under the hero. */
export function ClientsTeaser() {
  return (
    <section className="border-y border-line bg-sunken py-12 md:py-14">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-bold sm:text-2xl">Some of the clients we work for</h2>
          <Link
            href="/clients"
            className="link-underline inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand"
          >
            All clients and {residentialSocieties.length} housing societies
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <ClientLogoWall limit={12} className="mt-8" />
      </Container>
    </section>
  );
}
