"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Code2,
  FolderKanban,
  GitBranch,
  Layers3,
  Rocket,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/project";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Workflow & Automation",
  "AI Integrated",
  "AI Research",
  "Fullstack",
];

const categoryStyles: Record<
  ProjectCategory,
  {
    badge: string;
    dot: string;
    glow: string;
    ring: string;
  }
> = {
  "Workflow & Automation": {
    badge: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
    dot: "bg-cyan-300",
    glow: "from-cyan-500/18",
    ring: "group-hover:border-cyan-400/40",
  },
  "AI Integrated": {
    badge: "border-violet-400/30 bg-violet-400/10 text-violet-200",
    dot: "bg-violet-300",
    glow: "from-violet-500/18",
    ring: "group-hover:border-violet-400/40",
  },
  "AI Research": {
    badge: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
    dot: "bg-fuchsia-300",
    glow: "from-fuchsia-500/18",
    ring: "group-hover:border-fuchsia-400/40",
  },
  Fullstack: {
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    dot: "bg-amber-300",
    glow: "from-amber-500/18",
    ring: "group-hover:border-amber-400/40",
  },
};

const approachSteps = [
  {
    title: "Understand",
    description: "Define the problem, goal, constraints, and expected output.",
    icon: Search,
    accent: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    title: "Structure",
    description: "Plan the data flow, UI flow, workflow, or model pipeline.",
    icon: GitBranch,
    accent: "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
  {
    title: "Build",
    description: "Implement the core features with practical and maintainable tools.",
    icon: Code2,
    accent: "border-blue-400/20 bg-blue-400/10 text-blue-200",
  },
  {
    title: "Improve",
    description: "Test the result, fix issues, document decisions, and refine output.",
    icon: BadgeCheck,
    accent: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const featuredProject = filteredProjects.find((project) => project.featured);
  const regularProjects = featuredProject
    ? filteredProjects.filter((project) => project.title !== featuredProject.title)
    : filteredProjects;

  const selectedImage = selectedProject ? selectedProject.images[activeImageIndex] : "";

  function openProject(project: Project) {
    setSelectedProject(project);
    setActiveImageIndex(0);
  }

  function closeProject() {
    setSelectedProject(null);
    setActiveImageIndex(0);
  }

  return (
    <section
      id="project"
      className="relative w-full px-3.5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-14 xl:px-20 2xl:px-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_42%_0%,rgba(29,78,216,0.16),transparent_30%),radial-gradient(circle_at_85%_26%,rgba(167,139,250,0.08),transparent_24%)]" />

      <div className="mx-auto grid max-w-[1880px] gap-5 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--blue-soft)] sm:text-sm">
            Personal Projects
          </p>

          <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-white min-[390px]:text-[32px] sm:text-4xl md:text-5xl">
            Practical work, not just UI{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              experiments.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-[12px] leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
            A collection of internship work, academic research, automation
            workflows, and fullstack experiments focused on practical
            implementation, structured output, and technical learning.
          </p>
        </div>

        <div className="project-thumbnail-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:justify-start sm:overflow-visible lg:justify-end">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const style = filter !== "All" ? categoryStyles[filter] : null;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full border px-2.5 text-[9px] font-semibold transition sm:h-9 sm:px-4 sm:text-sm ${
                  isActive
                    ? filter === "All"
                      ? "border-[var(--blue)] bg-[var(--blue)]/15 text-white shadow-[0_0_18px_rgba(29,78,216,0.25)]"
                      : style?.badge
                    : "border-white/[0.08] bg-white/[0.025] text-[var(--muted)] hover:border-white/[0.18] hover:text-white"
                }`}
              >
                {filter !== "All" ? (
                  <span className={`h-1.5 w-1.5 rounded-full ${style?.dot ?? "bg-[var(--blue-soft)]"}`} />
                ) : null}
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-[1880px] grid-cols-3 gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:mt-8 sm:gap-4 sm:rounded-3xl sm:p-4">
        <ProjectStat
          label="Projects"
          value={projects.length.toString()}
          icon={FolderKanban}
          accent="text-cyan-200 border-cyan-400/20 bg-cyan-400/10"
        />
        <ProjectStat
          label="Categories"
          value={new Set(projects.flatMap((project) => project.categories)).size.toString()}
          icon={Layers3}
          accent="text-violet-200 border-violet-400/20 bg-violet-400/10"
        />
        <ProjectStat
          label="Focus"
          value="Practical Builds"
          icon={Rocket}
          accent="text-blue-200 border-blue-400/20 bg-blue-400/10"
        />
      </div>

      <div className="mx-auto mt-6 grid max-w-[1880px] grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-2 xl:grid-cols-12 xl:items-stretch">
        {featuredProject ? (
          <ProjectCard
            project={featuredProject}
            onOpen={openProject}
            variant="featured"
            className="col-span-2 xl:col-span-7"
          />
        ) : null}

        {regularProjects[0] ? (
          <ProjectCard
            project={regularProjects[0]}
            onOpen={openProject}
            variant="side"
            className="col-span-2 sm:col-span-1 xl:col-span-5"
          />
        ) : null}

        {regularProjects.slice(1).map((project, index) => {
          const layoutClasses = [
            "xl:col-span-4",
            "xl:col-span-4",
            "xl:col-span-4",
            "xl:col-span-6",
            "xl:col-span-6",
          ];

          return (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={openProject}
              variant={index === 1 ? "imageFocus" : "standard"}
              className={`col-span-1 ${layoutClasses[index % layoutClasses.length]}`}
            />
          );
        })}
      </div>

      <div className="mx-auto mt-8 hidden max-w-[1880px] overflow-hidden rounded-3xl border border-white/[0.07] bg-[linear-gradient(135deg,rgba(17,24,39,0.74),rgba(8,13,24,0.82))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] md:block">
        <div className="relative">
          <div className="pointer-events-none absolute left-[250px] top-1/2 hidden h-px w-[calc(100%-290px)] -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-emerald-400/20 lg:block" />

          <div className="grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--blue-soft)]">
                Process
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                How I approach and build projects
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                From problem framing to implementation, testing, and refinement.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {approachSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.045]"
                  >
                    <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${step.accent}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-[var(--blue-soft)]">0{index + 1}</p>
                    <h4 className="mt-2 text-base font-semibold text-white">{step.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          selectedImage={selectedImage}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
          onClose={closeProject}
        />
      ) : null}
    </section>
  );
}

function ProjectStat({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <div className="group flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#070B14]/60 p-2 transition hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-[#0B1220] sm:gap-4 sm:rounded-2xl sm:p-4">
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border sm:h-12 sm:w-12 sm:rounded-2xl ${accent}`}>
        <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-white sm:text-2xl">{value}</p>
        <p className="mt-0.5 truncate text-[9px] text-[var(--muted)] sm:mt-1 sm:text-sm">{label}</p>
      </div>
    </div>
  );
}

function CategoryBadges({
  categories,
  className = "",
  compact = false,
}: {
  categories: ProjectCategory[];
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${className}`}>
      {categories.map((category) => {
        const style = categoryStyles[category];

        return (
          <span
            key={category}
            className={`inline-flex w-fit items-center gap-1.5 rounded-full border font-semibold ${style.badge} ${
              compact ? "px-2 py-0.5 text-[7.5px] sm:px-3 sm:py-1 sm:text-xs" : "px-3 py-1 text-xs"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
            {category}
          </span>
        );
      })}
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
  variant = "standard",
  className = "",
}: {
  project: Project;
  onOpen: (project: Project) => void;
  variant?: "featured" | "side" | "standard" | "imageFocus";
  className?: string;
}) {
  const primaryCategory = project.categories[0];
  const primaryStyle = categoryStyles[primaryCategory];
  const isFeatured = variant === "featured";
  const isSide = variant === "side";
  const isImageFocus = variant === "imageFocus";

  const imageHeightClass = isFeatured
    ? "h-full min-h-[205px] sm:min-h-[300px]"
    : isSide
      ? "h-32 sm:h-64"
      : isImageFocus
        ? "h-28 sm:h-64"
        : "h-24 sm:h-52";

  const contentPaddingClass = isFeatured ? "p-3.5 sm:p-7" : "p-3 sm:p-6";

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.07] bg-[linear-gradient(145deg,rgba(17,24,39,0.76),rgba(7,11,20,0.92))] text-left shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(145deg,rgba(17,24,39,0.9),rgba(7,11,20,0.98))] hover:shadow-[0_26px_80px_rgba(0,0,0,0.35)] sm:rounded-[1.65rem] ${primaryStyle.ring} ${className}`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${primaryStyle.glow} via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100`} />

      <div className={`relative grid h-full ${isFeatured ? "grid-cols-[1.08fr_0.92fr]" : ""}`}>
        <div className={`relative w-full overflow-hidden bg-[#080D18] ${imageHeightClass}`}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes={isFeatured ? "(min-width: 1280px) 720px, 60vw" : "520px"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/90 via-[#05070D]/16 to-transparent" />
          <div className="absolute inset-0 border-b border-white/[0.07]" />

          {isFeatured ? (
            <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border border-amber-300/45 bg-black/45 px-2 py-1 text-[8px] font-semibold text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.22)] backdrop-blur-md sm:left-4 sm:top-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
              <Star className="h-3 w-3 fill-amber-200 text-amber-200 sm:h-3.5 sm:w-3.5" />
              Featured
            </span>
          ) : null}
        </div>

        <div className={`relative flex h-full min-w-0 flex-col ${contentPaddingClass}`}>
          <CategoryBadges categories={project.categories} compact />

          <h3 className={`mt-2 font-semibold tracking-tight text-white sm:mt-4 ${isFeatured ? "text-[13px] leading-tight sm:text-xl" : "text-[11px] leading-tight sm:text-xl"}`}>
            {project.title}
          </h3>

          <p className={`mt-2 text-[9px] leading-[1.55] text-[var(--muted)] sm:mt-3 sm:text-sm sm:leading-7 ${isFeatured ? "line-clamp-4" : "line-clamp-3"}`}>
            {project.shortDescription}
          </p>

          <div className="mt-3 grid gap-1.5 sm:mt-5 sm:gap-2">
            {project.metrics.slice(0, isFeatured ? 3 : 2).map((metric) => (
              <div key={`${metric.label}-${metric.value}`} className="flex min-w-0 items-center gap-1.5 text-[8px] text-[var(--muted)] sm:gap-2 sm:text-xs">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${primaryStyle.dot}`} />
                <span className="shrink-0 font-medium text-white/80">{metric.label}:</span>
                <span className="truncate">{metric.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
            {project.stacks.slice(0, isFeatured ? 4 : 3).map((stack) => (
              <span key={stack.name} className="inline-flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.035] px-1.5 py-1 text-[8px] font-medium text-[var(--tag-text)] sm:gap-2 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-xs">
                {stack.icon ? (
                  <Image src={stack.icon} alt="" width={14} height={14} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                ) : null}
                {stack.name}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-end gap-1.5 pt-3 text-[9px] font-semibold text-[var(--blue-soft)] opacity-80 transition group-hover:translate-x-1 group-hover:opacity-100 sm:gap-2 sm:pt-6 sm:text-sm">
            View case study
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  selectedImage,
  activeImageIndex,
  setActiveImageIndex,
  onClose,
}: {
  project: Project;
  selectedImage: string;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-3 py-5 backdrop-blur-sm sm:px-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[1180px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1120] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project detail"
          className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/[0.08] bg-black/45 text-xl text-white transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/20 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          ×
        </button>

        <div className="project-modal-scroll max-h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="grid min-w-0 lg:grid-cols-[390px_minmax(0,1fr)]">
            <div className="min-w-0 border-b border-white/[0.08] p-5 pt-14 sm:p-8 sm:pt-16 lg:border-b-0 lg:border-r lg:border-white/[0.08]">
              <p className="text-sm font-medium tracking-wide text-[var(--blue-soft)]">Project Detail</p>
              <CategoryBadges categories={project.categories} className="mt-4" />

              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                {project.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-[15px] sm:leading-8">
                {project.description}
              </p>

              <div className="mt-7 grid gap-3">
                {project.metrics.map((metric) => (
                  <div key={`${metric.label}-${metric.value}`} className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">{metric.label}</span>
                    <span className="text-right text-sm font-semibold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <p className="text-sm font-medium text-white">Tech stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stacks.map((stack) => (
                    <span key={stack.name} className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-[var(--tag-text)]">
                      {stack.icon ? (
                        <Image src={stack.icon} alt="" width={16} height={16} className="h-4 w-4" />
                      ) : null}
                      {stack.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-0 bg-[#070B14] p-4 sm:p-6 lg:pt-16">
              <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#05070D] sm:h-[430px]">
                <Image
                  src={selectedImage}
                  alt={project.title}
                  fill
                  className="object-contain p-3"
                  sizes="(min-width: 1024px) 720px, 100vw"
                />
              </div>

              {project.images.length > 1 ? (
                <div className="mt-5 min-w-0">
                  <div className="project-thumbnail-scroll flex max-w-full gap-3 overflow-x-auto overflow-y-hidden pb-2">
                    {project.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`Show ${project.title} image ${index + 1}`}
                        className={`relative h-16 w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border bg-[#05070D] transition ${
                          activeImageIndex === index
                            ? "border-[var(--blue)] opacity-100 shadow-[0_0_18px_rgba(29,78,216,0.28)]"
                            : "border-white/[0.08] opacity-60 hover:border-white/[0.22] hover:opacity-100"
                        }`}
                      >
                        <Image src={image} alt="" fill className="object-cover" sizes="112px" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
