"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { getProjectsSortedByDateDesc } from "@/data/projects";

const projects = getProjectsSortedByDateDesc();

const ProjectsSection = () => {
  return (
    <section className="section-y section-x bg-section-1 text-text-primary">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-16 text-center text-4xl text-heading-primary">My Projects</h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="relative overflow-hidden rounded-lg border border-slate-200/90 bg-section-1/80 shadow-lg transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-slate-800/30"
            >
              <div className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-white">
                {project.date.slice(0, 4)}
              </div>

              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-section-1 to-transparent" />
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl text-heading-primary">
                  <Link
                    href={`/development/${project.slug}`}
                    className="hover:underline hover:decoration-accent hover:underline-offset-2"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mb-4 text-body-secondary">{project.description}</p>

                <ul className="mb-4 space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-body-secondary">
                      <span className="mr-2 text-accent">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold transition hover:border-accent hover:text-accent dark:border-slate-600"
                    >
                      <Globe className="h-3.5 w-3.5" aria-hidden />
                      Live
                    </a>
                  ) : null}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold transition hover:border-accent hover:text-accent dark:border-slate-600"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden />
                    Code
                  </a>
                </div>
                <Link
                  href={`/development/${project.slug}`}
                  className="text-sm font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Full write-up →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
