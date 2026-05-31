export type ProjectStack = {
  name: string;
  icon?: string;
};

export type Project = {
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
  stacks: ProjectStack[];
};

export const projects: Project[] = [
  {
    title: "Automation Workflow",
    shortDescription:
      "Workflow automation project built during internship to support task execution and process tracking.",
    description:
      "A practical automation workflow project focused on translating operational requirements into structured process flows, worker execution, and technical documentation.",
    images: ["/projects/automation-workflow.png"],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "Camunda", icon: "/logos/icon/stack/camunda.png" },
      { name: "Docker", icon: "/logos/icon/stack/docker.png" },
    ],
  },
  {
    title: "Reporting Pipeline",
    shortDescription:
      "Automated reporting pipeline for transforming raw scan data into structured reports.",
    description:
      "A reporting automation project that processes raw data, applies transformation logic, and generates structured PDF and spreadsheet reports for operational use.",
    images: [
      "/projects/reporting-pipeline-1.png",
      "/projects/reporting-pipeline-2.png",
      "/projects/reporting-pipeline-3.png",
    ],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "KNIME", icon: "/logos/icon/stack/knime.png" },
      { name: "PostgreSQL", icon: "/logos/icon/stack/postgresql.png" },
    ],
  },
  {
    title: "AI-Based Fall Detection Research",
    shortDescription:
      "Academic AI research using pose keypoints and LSTM for fall detection.",
    description:
      "An academic research project focused on fall detection using pose-estimation keypoints and LSTM-based temporal classification.",
    images: ["/projects/fall-detection.png"],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "AI Research" },
      { name: "LSTM" },
    ],
  },
];