export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "You share the requirement",
    description:
      "Site location, working hours, the services you need and any problems you have had with earlier vendors.",
  },
  {
    title: "We visit and plan",
    description:
      "We walk the premises, note the weak points and propose the headcount, shifts and posts.",
  },
  {
    title: "Staff are deployed",
    description:
      "Verified, trained and uniformed staff report on the agreed date, briefed on your site instructions.",
  },
  {
    title: "Supervisors check",
    description: "Regular visits, surprise checks and night audits keep the standard in place.",
  },
  {
    title: "We review with you",
    description:
      "Daily reports and your feedback are used to adjust the deployment as the site changes.",
  },
];
