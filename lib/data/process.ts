export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We listen first: your site, your operating hours, what has gone wrong before and what you expect from a vendor.",
  },
  {
    number: "02",
    title: "Survey & Plan",
    description:
      "We walk the premises, identify weak points and propose the headcount, shifts and posts that cover them.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Verified, trained and uniformed staff take charge, briefed on your site's specific instructions.",
  },
  {
    number: "04",
    title: "Supervise",
    description:
      "Regular visits, surprise checks and night audits make sure standards hold long after day one.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Daily reports and your feedback shape the plan, so coverage keeps improving as your site changes.",
  },
];
