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
    title: "Nessus Auto Report",
    shortDescription:
      "Proyek workflow automation untuk memproses Data Nessus dan menghasilkan PDF & XLSX Reports yang terstruktur",
    description:
      "Pada proyek ini saya berhasil menerapkan proses ETL menggunakan KNIME, serta menghasilkan PDF dan XLSX reports untuk kepentingan operasional serta decision making, dengan total menghasilkan 3 files yaitu 2 PDF dan 1 XLSX, dimana 1 PDF untuk Management Team dan 1 PDF, 1XLSX untuk Team Internal dimana isinya lebih mendetail .",
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
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "KNIME", icon: "/logos/icon/stack/knime.png" },
      { name: "PostgreSQL", icon: "/logos/icon/stack/postgresql.png" },
    ],
  },
  {
    title: "Kalilinux Auto Report",
    shortDescription:
      "Proyek workflow automation untuk memproses Data Kalilinux dan menghasilkan PDF & XLSX Reports yang terstruktur",
    description:
      "Pada proyek ini saya berhasil menerapkan proses ETL menggunakan KNIME, serta menghasilkan PDF dan XLSX reports untuk kepentingan operasional serta decision making, dengan total menghasilkan 3 files yaitu 2 PDF dan 1 XLSX, dimana 1 PDF untuk Management Team dan 1 PDF, 1XLSX untuk Team Internal dimana isinya lebih mendetail .",
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
    images: [
      "/projects/Skripsi/fall.png",
      "/projects/Skripsi/summary.png"
    ],
    stacks: [
      { name: "Python", icon: "/logos/icon/stack/python.png" },
      { name: "AI Research" },
      { name: "LSTM" },
      { name: "PyTorch"},
      { name: "NumPy"},
      { name: "Deep Learning"},
    ],
  },
  {
    title: "Automation CV Screening (AI Based) using N8N",
    shortDescription:
      "Proyek workflow automation untuk memudahkan CV Screening dengan bantuan AI sebagai reasoning untuk membantu mengambil keputusan",
    description:
      "Pada proyek kali ini, saya munggunakan N8N sebagai base untuk membuat workflow Automation CV Screening, Saya mengintegrasikan AI bersama script yang ada, untuk menghasilkan data dan menambahkan reasoning untuk tiap kandidat, hasil dari proses workflow ini adalah file berbentuk PDF yang mudah di baca dengan isi seperti pada gambar, sehingga memudahkan stakeholder / HR untuk mengambil keputusan untuk kandidat yang tepat.",
    images: [
      "/projects/cv_screening/Workflow.png",
      "/projects/cv_screening/result1.png",
      "/projects/cv_screening/result2.png",
      "/projects/cv_screening/result3.png",
      "/projects/cv_screening/dataset.png",
    ],
    stacks: [
      { name: "N8N", icon: "/logos/icon/stack/n8n.png" },
      { name: "Javascript", icon: "/logos/icon/stack/js.png" },
      { name: "Docker", icon: "/logos/icon/stack/docker.png" },
    ],
  },
];