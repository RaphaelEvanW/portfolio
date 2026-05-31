
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
  {name: "Python", icon: "/logos/icon/stack/python.png"},
  {name: "Zeebe"},
  { name: "KNIME", icon: "/logos/icon/stack/knime.png" },
  {name: "Task Scheduler"},
  {name: "openpyxl"},
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
      className="relative mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-14 xl:px-16"
    >
      <div className="pointer-events-none absolute right-10 top-20 hidden h-72 w-72 rounded-full bg-[var(--blue)]/10 blur-3xl lg:block" />

      <div className="relative">
        <div className="max-w-3xl">

          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Personal Experiences
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Internship and organizational experience where I worked on technical
            implementation, documentation, coordination, and operational support.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Professional Experience */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-[var(--blue)]" />
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Professional Experience
              </h3>
            </div>

            <article className="rounded-2xl border border-white/[0.08] bg-[var(--card)]/55 p-6 transition hover:border-[var(--blue)]/40 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold tracking-tight text-white">
                    Automation Intern
                  </h4>

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    <span className="font-medium text-[var(--blue-soft)]">
                      PT Jababeka Tbk
                    </span>
                    <span className="hidden h-4 w-px bg-white/[0.14] sm:block" />
                    <span className="text-[var(--muted)]">
                      Feb 2026 – May 2026 (4 Months)
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-base">
                Worked on internal IT automation, reporting workflows, and
                technical documentation during internship.
              </p>

              <div className="mt-6 h-px w-full bg-white/[0.08]" />

              <ul className="mt-6 space-y-4">
                {professionalPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-7 text-[#CBD5E1] md:text-[15px]"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue-soft)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {professionalStacks.map((stack) => (
                    <span
                        key={stack.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-[var(--blue)]/20 bg-[#172554]/70 px-3 py-1.5 text-xs font-medium text-[#93C5FD]"
                    >
                        {stack.icon ? (
                        <Image
                            src={stack.icon}
                            alt=""
                            width={14}
                            height={14}
                            className="h-3.5 w-3.5"
                        />
                        ) : null}

                        {stack.name}
                    </span>
                    ))}
              </div>
            </article>
          </div>

          {/* Organizational Experience */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-[var(--blue)]" />
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Organizational Experience
              </h3>
            </div>

            <div className="space-y-5">
              {organizations.map((item) => (
                <article
                  key={`${item.role}-${item.organization}`}
                  className="rounded-2xl border border-white/[0.08] bg-[var(--card)]/45 p-6 transition hover:border-[var(--blue)]/35"
                >
                  <h4 className="text-lg font-semibold tracking-tight text-white">
                    {item.role}
                  </h4>

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    <span className="font-medium text-[var(--blue-soft)]">
                      {item.organization}
                    </span>
                    <span className="hidden h-4 w-px bg-white/[0.14] sm:block" />
                    <span className="text-[var(--muted)]">{item.period}</span>
                  </div>

                  <div className="mt-5 h-px w-full bg-white/[0.08]" />

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-[#CBD5E1]"
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