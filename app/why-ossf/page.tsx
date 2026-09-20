import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhyOSSF } from "@/components/sections/WhyOSSF";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why OSSF",
  description:
    "Verified operational differentiators: police-verified, professionally trained personnel, statutory compliance, 24x7 support, supervision and immediate manpower replacement.",
  path: "/why-ossf",
});

export default function WhyOSSFPage() {
  return (
    <>
      <PageHero
        eyebrow="Why OSSF"
        title="Operational differentiators, not marketing claims"
        description="What clients can expect from OSSF on every deployment — grounded in how the company actually operates."
      />
      <WhyOSSF showAll />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
