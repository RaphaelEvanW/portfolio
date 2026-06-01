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
    title: "Automation Onboarding & Offboarding Karyawan",
    shortDescription:
      "Proyek workflow automation untuk onboarding dan offboarding karyawan yang saya buat semasa saya dalam masa internship saya.",
    description:
      "Proyek ini dikembangkan semasa saya  magang pada PT Jababeka Tbk, Saya berkesempatan untuk membangun workflow automation yang membantu proses onboarding karyawan. Saya ikut andil dalam membangun form - membuat alur workflow BPMN - integrasikan dengan sistem OsTicket, dan saya juga berkesempatan untuk mendesign offboarding workflow automation",
    images: ["/projects/onboarding/onboarding3.png",
      "/projects/onboarding/onboarding1.png",
      "/projects/onboarding/onboarding2.png",
      "/projects/offboarding/offboarding.png",
    ],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "Camunda", icon: "/logos/icon/stack/camunda.png" },
      { name: "Docker", icon: "/logos/icon/stack/docker.png" },
      { name: "OsTicket"},
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
    title: "Implementasi OpenPose dengan Long Short-Term Memory (LSTM) untuk Deteksi Kejadian Jatuh Berbasis Keypoints.",
    shortDescription:
      "Tugas skripsi berbasis Deep Learning LSTM dan OpenPose untuk ekstraksi pose.",
    description:
      "Merupakan proyek skripsi yang saya selesaikan untuk memperoleh gelar saya semasa kuliah, berbasis LSTM untuk temporal klasifikasi dan OpenPose untuk mengekstraksi Keypoints dari Video.",
    images: ["/projects/Skripsi/fall.png"],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "AI Research" },
      { name: "LSTM" },
      { name: "PyTorch"},
      { name: "NumPy"},
      { name: "Deep Learning"},
    ],
  },
];