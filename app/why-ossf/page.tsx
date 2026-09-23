import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhyOSSF } from "@/components/sections/WhyOSSF";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why OSSF",
  description:
    "Why organizations choose OSSF: police-verified, professionally trained security personnel, ex-servicemen in the workforce, 24×365 operations, regular supervision and customized deployment.",
  path: "/why-ossf",
});

export default function WhyOSSFPage() {
  return (
    <>
      <PageHero
        eyebrow="Why OSSF"
        title="The standards behind every deployment"
        description="What clients can expect from OSSF personnel and supervision on every site, as set out in our company profile."
      />
      <WhyOSSF showAll />
      <HowWeWork />
      <FinalCTA secondary={{ href: "/compliance", label: "View our compliance & licensing" }} />
    </>
  );
}
