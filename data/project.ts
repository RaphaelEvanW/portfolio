export type ProjectStack = {
  name: string;
  icon?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectCategory =
  | "Workflow & Automation"
  | "AI Integrated"
  | "AI Research"
  | "Fullstack";

export type Project = {
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
  stacks: ProjectStack[];
  categories: ProjectCategory[];
  featured?: boolean;
  metrics: ProjectMetric[];
};
export const projects: Project[] = [
  {
    title: "Automation Onboarding & Offboarding Karyawan",
    categories: ["Workflow & Automation"],
    featured: false,
    shortDescription:
      "Workflow automation untuk proses onboarding dan offboarding karyawan menggunakan BPMN, Camunda, dan integrasi osTicket.",
    description:
      "Proyek ini dikembangkan semasa magang di PT Jababeka Tbk. Saya membangun workflow automation untuk membantu proses onboarding karyawan, mulai dari perancangan form, pembuatan alur BPMN, integrasi dengan osTicket, hingga desain workflow offboarding sebagai pengembangan proses lanjutan.",
    images: [
      "/projects/onboarding/onboarding3.png",
      "/projects/onboarding/onboarding1.png",
      "/projects/onboarding/onboarding2.png",
      "/projects/offboarding/offboarding.png",
    ],
    metrics: [
      { label: "Scope", value: "Onboarding & Offboarding" },
      { label: "Flow", value: "BPMN Workflow" },
      { label: "Integration", value: "osTicket" },
    ],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "Camunda", icon: "/logos/icon/stack/camunda.png" },
      { name: "Docker", icon: "/logos/icon/stack/docker.png" },
      { name: "OsTicket" },
      { name: "BPMN" },
    ],
  },
  {
    title: "Nessus Auto Report",
    categories: ["Workflow & Automation", "AI Integrated"],
    shortDescription:
      "Workflow ETL untuk memproses data Nessus dan menghasilkan laporan PDF/XLSX yang terstruktur.",
    description:
      "Pada proyek ini saya menerapkan proses ETL menggunakan KNIME untuk mengolah data Nessus dan menghasilkan output laporan PDF serta XLSX. Output laporan digunakan untuk kebutuhan operasional dan decision making, dengan format berbeda untuk management team dan internal team.",
    images: [
      "/projects/nessus/nessuswf.png",
      "/projects/nessus/nessusinput1.png",
      "/projects/nessus/nessusinput2.png",
      "/projects/nessus/nessusinput3.png",
      "/projects/nessus/nessusinput4.png",
      "/projects/nessus/nessuspdf1.png",
      "/projects/nessus/nessuspdf2.png",
      "/projects/nessus/detailednessus.png",
      "/projects/nessus/detailednessus2.png",
      "/projects/nessus/detailednessus3.png",
      "/projects/nessus/detailedsummaryxlsx.png",
    ],
    metrics: [
      { label: "Output", value: "PDF & XLSX" },
      { label: "Process", value: "ETL Pipeline" },
      { label: "Use Case", value: "Security Report" },
    ],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "KNIME", icon: "/logos/icon/stack/knime.png" },
      { name: "PostgreSQL", icon: "/logos/icon/stack/postgresql.png" },
    ],
  },
  {
    title: "Kalilinux Auto Report",
    categories: ["Workflow & Automation", "AI Integrated"],
    shortDescription:
      "Workflow ETL untuk memproses data Kali Linux dan menghasilkan laporan PDF/XLSX yang terstruktur.",
    description:
      "Pada proyek ini saya menerapkan proses ETL menggunakan KNIME untuk mengolah data Kali Linux dan menghasilkan laporan PDF serta XLSX. Laporan dibuat dalam format management dan internal agar hasil pemrosesan data lebih mudah dianalisis oleh stakeholder terkait.",
    images: [
      "/projects/kalilinux/kalilinuxwf.png",
      "/projects/kalilinux/kalilinuxinput1.png",
      "/projects/kalilinux/kalilinuxinput2.png",
      "/projects/kalilinux/kalilinuxpdf1.png",
      "/projects/kalilinux/kalilinuxpdf2.png",
      "/projects/kalilinux/detailedkalilinux1.png",
      "/projects/kalilinux/detailedkalilinux2.png",
      "/projects/kalilinux/detailedkalilinux3.png",
      "/projects/kalilinux/detailedxlsx.png",
    ],
    metrics: [
      { label: "Output", value: "PDF & XLSX" },
      { label: "Process", value: "ETL Pipeline" },
      { label: "Use Case", value: "Security Report" },
    ],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "KNIME", icon: "/logos/icon/stack/knime.png" },
      { name: "PostgreSQL", icon: "/logos/icon/stack/postgresql.png" },
    ],
  },
  {
    title:
      "Implementasi OpenPose dengan Long Short-Term Memory (LSTM) untuk Deteksi Kejadian Jatuh Berbasis Keypoints",
    categories: ["AI Research"],
    featured: true,
    shortDescription:
      "Proyek skripsi berbasis OpenPose dan LSTM untuk deteksi kejadian jatuh dari keypoints video.",
    description:
      "Proyek skripsi ini menggunakan OpenPose untuk mengekstraksi keypoints dari video dan LSTM untuk melakukan klasifikasi temporal terhadap kejadian jatuh. Fokus utama proyek ini adalah membangun pipeline deteksi berbasis pose estimation dan deep learning.",
    images: ["/projects/Skripsi/fall.png", "/projects/Skripsi/summary.png"],
    metrics: [
      { label: "Dataset", value: "UR Fall Detection Dataset" },
      { label: "Method", value: "OpenPose + LSTM" },
      { label: "Focus", value: "Deep Learning" },
    ],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "AI Research" },
      { name: "LSTM" },
      { name: "PyTorch" },
      { name: "NumPy" },
      { name: "Deep Learning" },
    ],
  },
  {
    title: "Automation CV Screening (AI Based) using N8N",
    categories: ["Workflow & Automation", "AI Integrated"],
    shortDescription:
      "Workflow AI untuk membantu proses CV screening dengan reasoning dan output laporan kandidat.",
    description:
      "Pada proyek ini saya menggunakan n8n sebagai base workflow automation untuk CV screening. Workflow mengintegrasikan AI dan script pendukung untuk menghasilkan data kandidat, reasoning, serta output berbentuk PDF yang mudah dibaca oleh stakeholder atau HR.",
    images: [
      "/projects/cv_screening/Workflow.png",
      "/projects/cv_screening/result1.png",
      "/projects/cv_screening/result2.png",
      "/projects/cv_screening/result3.png",
      "/projects/cv_screening/dataset.png",
    ],
    metrics: [
      { label: "Output", value: "PDF Report" },
      { label: "Flow", value: "AI Screening" },
      { label: "Tool", value: "n8n Workflow" },
    ],
    stacks: [
      { name: "N8N", icon: "/logos/icon/stack/n8n.png" },
      { name: "Javascript", icon: "/logos/icon/stack/js.png" },
      { name: "Docker", icon: "/logos/icon/stack/docker.png" },
    ],
  },
];