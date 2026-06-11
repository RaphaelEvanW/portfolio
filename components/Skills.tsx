import Image from "next/image";

type Skill = {
  name: string;
  icon?: string;
};

type SkillSubGroup = {
  label: string;
  skills: Skill[];
};

type SkillGroup = {
  title: string;
  description: string;
  subGroups: SkillSubGroup[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Development",
    description:
      "Languages, frameworks, and web technologies I use to build application features, interfaces, APIs, and backend logic.",
    subGroups: [
      {
        label: "Languages",
        skills: [
          { name: "Python", icon: "/logos/icon/stack/python.png" },
          { name: "JavaScript", icon: "/logos/icon/stack/js.png" },
          { name: "TypeScript", icon: "/logos/icon/stack/typescript.png" },
          { name: "Go", icon: "/logos/icon/stack/go.png" },
          { name: "Java", icon: "/logos/icon/stack/java.png" },
          { name: "PHP", icon: "/logos/icon/stack/php.png" },
          { name: "Kotlin", icon: "/logos/icon/stack/kotlin.png" },
        ],
      },
      {
        label: "Frontend",
        skills: [
          { name: "React", icon: "/logos/icon/stack/react.png" },
          { name: "Next.js", icon: "/logos/icon/stack/nextjs.png" },
          { name: "Tailwind", icon: "/logos/icon/stack/tailwind.png" },
          { name: "HTML5", icon: "/logos/icon/stack/html.png" },
          { name: "CSS3", icon: "/logos/icon/stack/css.png" },
        ],
      },
      {
        label: "Backend",
        skills: [
          { name: "Node.js", icon: "/logos/icon/stack/nodejs.png" },
          { name: "Gin", icon: "/logos/icon/stack/gin.png" },
          { name: "Django", icon: "/logos/icon/stack/django.png" },
          { name: "Spring Boot", icon: "/logos/icon/stack/springboot.png" },
          { name: "REST API" },
        ],
      },
    ],
  },
  {
    title: "Automation & Reporting",
    description:
      "Workflow automation, scheduled execution, and structured reporting from internship work.",
    subGroups: [
      {
        label: "Workflow",
        skills: [
          { name: "Camunda", icon: "/logos/icon/stack/camunda.png" },
          { name: "KNIME", icon: "/logos/icon/stack/knime.png" },
          { name: "N8N", icon: "/logos/icon/stack/n8n.png" },
        ],
      },
      {
        label: "Reporting",
        skills: [
          { name: "Python", icon: "/logos/icon/stack/python.png" },
          { name: "PDF/XLSX generation" },
          { name: "Power BI", icon: "/logos/icon/stack/powerbi.png" },
          { name: "Tableau", icon: "/logos/icon/stack/tableau.png" },
        ],
      },
      {
        label: "Execution",
        skills: [
          { name: "Batch scripts" },
          { name: "Task Scheduler" },
          { name: "Docker", icon: "/logos/icon/stack/docker.png" },
        ],
      },
    ],
  },
  {
    title: "Data, Tools & Platforms",
    description:
      "Database work, API testing, version control, design, cloud basics, and enterprise-system exposure.",
    subGroups: [
      {
        label: "Database",
        skills: [
          { name: "PostgreSQL", icon: "/logos/icon/stack/postgresql.png" },
          { name: "MySQL", icon: "/logos/icon/stack/mysql.png" },
          { name: "NoSQL", icon: "/logos/icon/stack/nosql.png" },
        ],
      },
      {
        label: "Tools",
        skills: [
          { name: "Git", icon: "/logos/icon/stack/git.png" },
          { name: "Postman", icon: "/logos/icon/stack/postman.png" },
          { name: "Figma", icon: "/logos/icon/stack/figma.png" },
          { name: "Docker", icon: "/logos/icon/stack/docker.png" },
        ],
      },
      {
        label: "Platforms",
        skills: [
          { name: "AWS", icon: "/logos/icon/stack/aws.png" },
          { name: "SAP S/4HANA", icon: "/logos/icon/stack/sap.png" },
        ],
      },
    ],
  },
];

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-soft)] bg-[var(--tag-bg)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--tag-text)] transition hover:border-[var(--blue)]/35 hover:bg-[var(--hover-surface)] hover:text-[var(--blue)] sm:gap-2 sm:px-3 sm:text-sm">
      {skill.icon ? (
        <Image
          src={skill.icon}
          alt=""
          width={16}
          height={16}
          className="h-3.5 w-3.5 object-contain opacity-85 sm:h-4 sm:w-4"
        />
      ) : null}
      <span>{skill.name}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-8 sm:py-24 lg:px-14 xl:px-16"
    >
      <div className="pointer-events-none absolute right-16 top-20 hidden h-80 w-80 rounded-full bg-[var(--blue)]/8 blur-3xl lg:block" />
      <div className="pointer-events-none absolute left-10 bottom-20 hidden h-72 w-72 rounded-full bg-[var(--blue-soft)]/5 blur-3xl lg:block" />

      <div className="relative">
        <div className="max-w-3xl">
          <h2 className="text-[34px] font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">
            Skills built through practical work
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base">
            A focused toolkit shaped by internship work, academic projects, and
            personal experiments — grouped by how I actually use them.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] shadow-[var(--card-shadow)]">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="border-r border-[var(--border-soft)] px-3 py-3 last:border-r-0 sm:px-5 sm:py-4"
            >
              <p className="text-lg font-semibold leading-none text-[var(--heading)] sm:text-2xl">
                0{index + 1}
              </p>
              <p className="mt-1 truncate text-[10px] font-medium text-[var(--muted)] sm:text-sm">
                {group.title.split(" & ")[0]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-9 space-y-9 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="border-t border-[var(--border-soft)] pt-5 lg:rounded-2xl lg:border lg:border-[var(--border-soft)] lg:bg-[var(--surface)] lg:p-6 lg:shadow-[var(--card-shadow)]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-6 w-1 shrink-0 rounded-full bg-[var(--blue)]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-soft)]">
                    0{index + 1} / Skill Area
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--heading)] sm:text-2xl">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-5">
                {group.subGroups.map((subGroup) => (
                  <div
                    key={`${group.title}-${subGroup.label}`}
                    className="border-t border-[var(--border-soft)] pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--blue-soft)]">
                      {subGroup.label}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {subGroup.skills.map((skill) => (
                        <SkillChip
                          key={`${group.title}-${subGroup.label}-${skill.name}`}
                          skill={skill}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}