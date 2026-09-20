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
      "We start by understanding your site, sector, operating hours and specific security or facility concerns.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "A risk assessment of the premises informs the deployment plan — headcount, shift structure and coverage points.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Trained, police-verified personnel are deployed according to the agreed plan and briefed on site-specific instructions.",
  },
  {
    number: "04",
    title: "Supervise",
    description:
      "Ongoing supervision, surprise inspections and night audits keep deployment standards consistent.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Daily occurrence reporting and shift handovers feed back into the plan, so coverage keeps adapting to your site.",
  },
];
