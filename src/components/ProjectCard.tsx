"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { getProjectsSortedByDateDesc, type PortfolioProject } from "@/data/projects";

const projects = getProjectsSortedByDateDesc();

const ProjectsCardSection = () => {
  return (
    <section className="relative flex min-h-0 min-w-0 flex-col overflow-hidden bg-section-1 text-text-primary section-y section-x">
      <div
        className="absolute inset-0 -z-30 pointer-events-none bg-gradient-to-b from-section-1 via-slate-200/80 to-slate-200 dark:from-section-1 dark:via-[#0f172a] dark:to-[#0b1220]"
        aria-hidden
      />
      <div className="absolute inset-0 -z-20" aria-hidden>
        <div
          className="absolute h-[900px] w-[900px] rounded-full blur-3xl opacity-30 dark:opacity-40"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute h-[800px] w-[800px] rounded-full blur-3xl opacity-20 dark:opacity-30"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            bottom: "-10%",
            right: "-10%",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_90%_75%_at_55%_40%,rgba(37,99,235,0.1),transparent_60%)] dark:bg-[radial-gradient(ellipse_85%_70%_at_55%_42%,rgba(255,255,255,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-[size:32px_32px] bg-[linear-gradient(rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] opacity-[0.04] dark:bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] dark:opacity-[0.07]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-4 text-center text-5xl text-heading-primary">My Projects</h2>
          <div className="mx-auto mb-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
          <p className="mb-12 text-center text-body-secondary">
            <Link href="/development" className="font-medium text-accent underline-offset-2 hover:underline">
              Table view of all projects →
            </Link>
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const year = project.date.slice(0, 4);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-300/90 bg-white/85 shadow-lg backdrop-blur-sm transition-shadow duration-200 hover:shadow-2xl dark:border-slate-700/70 dark:bg-slate-900/85">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(56, 189, 248, 0.06) 100%)",
        }}
      />

      <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-accent to-accent-hover px-4 py-2 text-sm font-semibold text-white shadow-lg">
        {year}
      </div>

      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent dark:from-slate-950/50" />
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className="object-cover"
          priority={index < 2}
        />
      </div>

      <div className="relative z-10 p-6">
        <h3 className="mb-3 text-2xl text-heading-primary">
          <Link
            href={`/development/${project.slug}`}
            className="hover:underline hover:decoration-accent hover:underline-offset-2"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mb-5 leading-relaxed text-slate-700 dark:text-slate-100">{project.description}</p>
        <ul className="mb-4 space-y-3">
          {project.points.map((point, i) => (
            <li key={i} className="group/item flex items-start text-sm text-slate-700 dark:text-slate-100">
              <span className="mr-3 mt-0.5 text-lg text-accent" aria-hidden>
                ✓
              </span>
              <span className="transition-colors group-hover/item:text-slate-900 dark:group-hover/item:text-white">
                {point}
              </span>
            </li>
          ))}
        </ul>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-600 dark:text-white"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              Live
            </a>
          ) : null}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-600 dark:text-white"
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            Code
          </a>
        </div>
        <Link
          href={`/development/${project.slug}`}
          className="text-sm font-semibold text-accent underline-offset-2 hover:underline"
        >
          Read project page →
        </Link>
      </div>
    </article>
  );
}

export default ProjectsCardSection;
