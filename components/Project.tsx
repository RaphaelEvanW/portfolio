"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/data/project";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
      className="relative mx-auto max-w-[1440px] px-6 pb-28 pt-16 sm:px-10 lg:px-14 xl:px-16"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-[var(--blue-soft)]">
          Personal Projects
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Practical work, not just UI experiments.
        </h2>

        <p className="mt-5 text-base leading-7 text-[var(--muted)]">
          A small collection of projects from internship work, academic
          projects, and fullstack experiments. Each project focuses on practical
          implementation and technical learning.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => openProject(project)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.07] bg-[var(--card)]/55 text-left transition hover:-translate-y-0.5 hover:border-[var(--blue)]/50 hover:bg-[var(--card)]/80"
          >
            <div className="relative h-52 w-full overflow-hidden bg-[#080D18]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/75 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {project.shortDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stacks.slice(0, 4).map((stack) => (
                  <span
                    key={stack.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-[var(--tag-text)]"
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
            </div>
          </button>
        ))}
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={closeProject}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1120] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project detail"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/[0.08] bg-black/40 text-xl text-white transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/20"
            >
              ×
            </button>

            <div className="relative h-72 w-full bg-[#080D18]">
              <Image
                src={selectedProject.images[activeImageIndex]}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/25 to-transparent" />
            </div>

            {selectedProject.images.length > 1 ? (
              <div className="border-t border-white/[0.06] bg-[#0B1120] px-6 py-4 md:px-8">
                <div className="flex gap-3 overflow-x-auto">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative h-16 w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border transition ${
                        activeImageIndex === index
                          ? "border-[var(--blue)]"
                          : "border-white/[0.08] hover:border-white/[0.2]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} preview ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {selectedProject.title}
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">
                {selectedProject.description}
              </p>

              <div className="mt-7">
                <p className="text-sm font-medium text-white">Tech stack</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.stacks.map((stack) => (
                    <span
                      key={stack.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-[var(--tag-text)]"
                    >
                      {stack.icon ? (
                        <Image
                          src={stack.icon}
                          alt=""
                          width={16}
                          height={16}
                          className="h-4 w-4"
                        />
                      ) : null}

                      {stack.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}