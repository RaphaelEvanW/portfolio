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
            Internship and organizational experience where I worked on technical
            implementation, documentation, coordination, and operational support.
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

            <article className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] shadow-[var(--card-shadow)]">
              <div className="p-5 sm:p-6 lg:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-[22px] font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-2xl">
                      Automation Intern
                    </h4>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-semibold text-[var(--blue-soft)]">
                        PT Jababeka Tbk
                      </span>
                      <span className="hidden h-4 w-px bg-[var(--border-soft)] sm:block" />
                      <span className="text-[var(--muted)]">
                        Feb 2026 – May 2026
                      </span>
                      <span className="rounded-full border border-[var(--blue)]/25 bg-[var(--blue)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--blue-soft)]">
                        4 Months
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
                  Worked on internal IT automation, reporting workflows,
                  scheduled execution, and technical documentation during
                  internship.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {professionalStacks.map((stack) => (
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
                  {professionalPoints.map((point, index) => (
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