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
    "How OSSF recruits, verifies, trains, deploys and supervises its security and facility staff, and what clients can expect on site.",
  path: "/why-ossf",
});

export default function WhyOSSFPage() {
  return (
    <>
      <PageHero
        title="Why clients choose OSSF"
        description="How we recruit, train, deploy and supervise the staff we send to your site."
      />
      <WhyOSSF showAll />
      <RecruitmentProcess tone="subtle" />
      <FAQ />
      <FinalCTA secondary={{ href: "/compliance", label: "Licence and registrations" }} />
    </>
  );
}
