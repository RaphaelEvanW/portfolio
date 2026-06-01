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

  const selectedImage = selectedProject
    ? selectedProject.images[activeImageIndex]
    : "";

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
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm sm:px-6"
          onClick={closeProject}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[1180px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1120] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project detail"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/[0.08] bg-black/45 text-xl text-white transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/20"
            >
              ×
            </button>

            <div className="project-modal-scroll max-h-[90vh] overflow-y-auto overflow-x-hidden">
              <div className="grid min-w-0 lg:grid-cols-[390px_minmax(0,1fr)]">
                {/* LEFT: Project Information */}
                <div className="min-w-0 border-b border-white/[0.08] p-6 pt-16 md:p-8 md:pt-16 lg:border-b-0 lg:border-r lg:border-white/[0.08]">
                  <p className="text-sm font-medium tracking-wide text-[var(--blue-soft)]">
                    Project Detail
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-[15px] md:leading-8">
                    {selectedProject.description}
                  </p>

                  <div className="mt-8 border-t border-white/[0.08] pt-6">
                    <p className="text-sm font-medium text-white">
                      Tech stack
                    </p>

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

                {/* RIGHT: Image Preview */}
                <div className="min-w-0 bg-[#070B14] p-4 md:p-6 lg:pt-16">
                  <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#05070D] md:h-[430px]">
                    <Image
                      src={selectedImage}
                      alt={selectedProject.title}
                      fill
                      className="object-contain p-3"
                      sizes="(min-width: 1024px) 720px, 100vw"
                    />
                  </div>

                  {selectedProject.images.length > 1 ? (
                    <div className="mt-5 min-w-0">
                      <div className="project-thumbnail-scroll flex max-w-full gap-3 overflow-x-auto overflow-y-hidden pb-2">
                        {selectedProject.images.map((image, index) => (
                          <button
                            key={image}
                            type="button"
                            onClick={() => setActiveImageIndex(index)}
                            aria-label={`Show ${selectedProject.title} image ${
                              index + 1
                            }`}
                            className={`relative h-16 w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border bg-[#05070D] transition ${
                              activeImageIndex === index
                                ? "border-[var(--blue)] opacity-100 shadow-[0_0_18px_rgba(29,78,216,0.28)]"
                                : "border-white/[0.08] opacity-60 hover:border-white/[0.22] hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="112px"
                            />
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
      ) : null}
    </section>
  );
}