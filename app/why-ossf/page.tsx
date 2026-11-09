import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhyOSSF } from "@/components/sections/WhyOSSF";
import { RecruitmentProcess } from "@/components/sections/RecruitmentProcess";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why OSSF",
  description:
    "Why organizations choose OSSF: police-verified, professionally trained personnel, ex-servicemen in the workforce, a structured recruitment and training process, 24×365 operations and close supervision.",
  path: "/why-ossf",
});

export default function WhyOSSFPage() {
  return (
    <>
      <PageHero
        eyebrow="Why OSSF"
        title="Why clients choose OSSF and stay with us"
        description="Verified people, real supervision, immediate replacements and full compliance. Here is exactly what you can expect from us."
      />
      <WhyOSSF showAll />
      <RecruitmentProcess tone="subtle" />
      <FAQ />
      <FinalCTA secondary={{ href: "/compliance", label: "View our compliance & licensing" }} />
    </>
  );
}
