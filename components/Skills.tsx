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
      "The area I explored most during internship work: workflow automation, scheduled execution, and structured reporting.",
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
      "Supporting tools I use for database work, API testing, version control, design, cloud basics, and enterprise-system exposure.",
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
    <div className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-sm font-medium text-[var(--tag-text)] transition hover:border-[var(--blue)]/35 hover:bg-[var(--blue)]/10 hover:text-white">
      {skill.icon ? (
        <Image
          src={skill.icon}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] object-contain opacity-85 transition group-hover:opacity-100"
        />
      ) : null}

      <span>{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-14 xl:px-16"
    >
      <div className="pointer-events-none absolute right-16 top-20 hidden h-80 w-80 rounded-full bg-[var(--blue)]/8 blur-3xl lg:block" />
      <div className="pointer-events-none absolute left-10 bottom-20 hidden h-72 w-72 rounded-full bg-[var(--blue-soft)]/5 blur-3xl lg:block" />

      <div className="relative">
        <div className="max-w-3xl">

          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Skills built through practical work
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
            A focused toolkit shaped by internship work, academic projects, and
            personal experiments — grouped by how I actually use them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`rounded-2xl border border-white/[0.08] bg-[var(--card)]/45 p-6 transition hover:-translate-y-0.5 hover:border-[var(--blue)]/30 hover:bg-[var(--card)]/65 md:p-7 ${
                group.title === "Data, Tools & Platforms" ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-6 w-1 shrink-0 rounded-full bg-[var(--blue)]" />

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 divide-y divide-white/[0.07]">
                {group.subGroups.map((subGroup) => (
                  <div
                    key={`${group.title}-${subGroup.label}`}
                    className="grid gap-2.5 py-4 first:pt-0 last:pb-0 md:grid-cols-[120px_1fr]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue-soft)]">
                      {subGroup.label}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
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