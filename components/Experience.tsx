import Image from "next/image";

const professionalPoints = [
  "Built and maintained BPMN workflow automation using Camunda and Python Zeebe workers.",
  "Worked on onboarding and offboarding automation workflow design.",
  "Automated reporting pipelines using KNIME and Python for Nessus and Kali Linux reports.",
  "Generated structured PDF/XLSX reports using wkhtmltopdf, pdfkit, and openpyxl.",
  "Managed scheduled execution using Windows Task Scheduler and batch scripts.",
  "Created technical documentation for automation and reporting workflows.",
];

const professionalStacks = [
  { name: "Camunda", icon: "/logos/icon/stack/camunda.png" },
  { name: "Python", icon: "/logos/icon/stack/python.png" },
  { name: "Zeebe" },
  { name: "KNIME", icon: "/logos/icon/stack/knime.png" },
  { name: "Task Scheduler" },
  { name: "openpyxl" },
  { name: "Docker", icon: "/logos/icon/stack/docker.png" },
  { name: "PostgreSQL", icon: "/logos/icon/stack/postgresql.png" },
];

const professionalExperiences: {
  role: string;
  company: string;
  period: string;
  badge: string;
  summary: string;
  stacks: { name: string; icon?: string }[];
  points: string[];
}[] = [
  {
    role: "IT Programmer",
    company: "PT Sari Tirta Group",
    period: "Aug 2026 – Present",
    badge: "Current Role",
    summary:
      "Developing internal business tools, procurement reports, and digital workflows in Central Jakarta.",
    stacks: [
      { name: "Progress OpenEdge ABL" },
      { name: "React", icon: "/logos/icon/stack/react.png" },
      { name: "Vue.js" },
      { name: "Docker", icon: "/logos/icon/stack/docker.png" },
      { name: "AppSheet" },
      { name: "WordPress" },
      { name: "WooCommerce" },
      { name: "CSV / XLSX" },
    ],
    points: [
      "Built a desktop procurement reporting application using Progress OpenEdge ABL, with date-based database queries and CSV/XLSX exports for PR, PO, and receiving data.",
      "Developing an AppSheet security patrol application with QR-based shift and checkpoint scanning, plus patrol status recording.",
      "Set up an ongoing WordPress and WooCommerce e-commerce project, including plugins, payment and shipping gateway installation, and frontend UI development.",
      "Debugged and fixed a backend issue in the company's existing procurement web application.",
    ],
  },
  {
    role: "Automation Intern",
    company: "PT Jababeka Tbk",
    period: "Feb 2026 – May 2026",
    badge: "4 Months",
    summary:
      "Worked on internal IT automation, reporting workflows, scheduled execution, and technical documentation during internship.",
    stacks: professionalStacks,
    points: professionalPoints,
  },
];

const organizations = [
  {
    role: "Logistic Staff",
    organization: "Himpunan Mahasiswa Teknik Informatika",
    period: "Mar 2023 – May 2024",
    points: [
      "Supported logistics planning and preparation for student organization activities.",
      "Coordinated equipment, event needs, and on-site execution with the team.",
      "Helped maintain event readiness through task tracking and communication.",
    ],
  },
  {
    role: "Technical & Mentor",
    organization: "New Student Orientation",
    period: "May 2023 – Aug 2023",
    points: [
      "Assisted technical preparation and mentoring activities for new students.",
      "Helped coordinate activity flow and communication during orientation.",
      "Supported event execution in a structured and collaborative way.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-8 md:py-24 lg:px-14 xl:px-16"
    >
      <div className="pointer-events-none absolute right-10 top-20 hidden h-72 w-72 rounded-full bg-[var(--blue)]/8 blur-3xl lg:block" />

      <div className="relative">
        <div className="max-w-3xl">
          <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-4xl md:text-5xl">
            Personal Experiences
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base">
            Current programming work, internship experience, and organizational
            roles involving business systems, automation, documentation, and
            operational support.
          </p>
        </div>

        <div className="mt-10 grid gap-10">
          {/* Professional Experience */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-[var(--blue)]" />
              <h3 className="text-xl font-semibold tracking-tight text-[var(--heading)] sm:text-2xl">
                Professional Experience
              </h3>
            </div>

            <div className="grid gap-5">
              {professionalExperiences.map((experience) => (
                <article key={experience.company} className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] shadow-[var(--card-shadow)]">
                  <div className="p-5 sm:p-6 lg:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-[22px] font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-2xl">
                          {experience.role}
                        </h4>

                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="font-semibold text-[var(--blue-soft)]">
                            {experience.company}
                          </span>
                          <span className="hidden h-4 w-px bg-[var(--border-soft)] sm:block" />
                          <span className="text-[var(--muted)]">
                            {experience.period}
                          </span>
                          <span className="rounded-full border border-[var(--blue)]/25 bg-[var(--blue)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--blue-soft)]">
                            {experience.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
                      {experience.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.stacks.map((stack) => (
                        <span
                          key={stack.name}
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-soft)] bg-[var(--tag-bg)] px-2.5 py-1.5 text-xs font-medium text-[var(--tag-text)] transition hover:border-[var(--blue)]/35 hover:bg-[var(--hover-surface)] hover:text-[var(--blue)]"
                        >
                          {stack.icon ? (
                            <Image
                              src={stack.icon}
                              alt=""
                              width={14}
                              height={14}
                              className="h-3.5 w-3.5 object-contain opacity-85"
                            />
                          ) : null}
                          {stack.name}
                        </span>
                    ))}
                </div>

                <div className="my-6 h-px w-full bg-[var(--border-soft)]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--blue-soft)]">
                  What I worked on
                </p>

                <ul className="mt-5 grid gap-4 lg:grid-cols-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={point}
                      className="grid grid-cols-[28px_1fr] gap-3 text-sm leading-6 text-[var(--muted)] sm:text-[15px] sm:leading-7"
                    >
                      <span className="pt-0.5 text-xs font-semibold text-[var(--blue-soft)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-[var(--blue)]" />
              <h3 className="text-xl font-semibold tracking-tight text-[var(--heading)] sm:text-2xl">
                Organizational Experience
              </h3>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {organizations.map((item) => (
                <article
                  key={`${item.role}-${item.organization}`}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[var(--card-shadow)] transition hover:border-[var(--blue)]/35 hover:bg-[var(--surface-strong)] sm:p-6"
                >
                  <h4 className="text-lg font-semibold tracking-tight text-[var(--heading)]">
                    {item.role}
                  </h4>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-medium text-[var(--blue-soft)]">
                      {item.organization}
                    </span>
                    <span className="hidden h-4 w-px bg-[var(--border-soft)] sm:block" />
                    <span className="text-[var(--muted)]">{item.period}</span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue-soft)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
