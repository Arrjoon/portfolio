"use client";

import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "Prixa Technologies",
    duration: "Apr 2023 – Present",
    description:
      "I have been working for 2 years on various news,fantech,inventory, and digital platforms. Responsible for developing, maintaining, and optimizing modern web applications.",
    techStack: ["Next.js", "Django", "PostgreSQL", "TailwindCSS"],
  },
  {
    id: 2,
    role: "Freelancing ",
    company: "Projects(own projects & Clients)",
    // duration: "Jan 2024 – Present",
    description:
      "i have been working on own ideas as well as for clients on websites, landing pages, and web apps, including deployment, SEO, and performance optimization.",
    techStack: ["Next.js", "Django", "TailwindCSS","FastAPI"],
  },
];

const WorkExperience = () => {
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
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_75%_at_55%_40%,rgba(37,99,235,0.1),transparent_60%)] dark:bg-[radial-gradient(ellipse_85%_70%_at_55%_42%,rgba(255,255,255,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[size:32px_32px] bg-[linear-gradient(rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] opacity-[0.04] dark:bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] dark:opacity-[0.07]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl text-heading-primary">
            Work Experience
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="rounded-2xl border border-slate-200/90 p-6 text-body-secondary shadow-lg backdrop-blur-sm dark:border-border dark:bg-secondary not-first:mt-10 md:p-8"
            >
              <div className="flex gap-4 sm:gap-5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent dark:bg-sky-500/20 dark:text-sky-300"
                  aria-hidden
                >
                  <Briefcase className="h-5 w-5" strokeWidth={2} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-heading-primary">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm">
                    {exp.company}
                  </p>
                  <p className="mt-2 text-sm font-medium tabular-nums text-accent dark:text-sky-300">
                    {exp.duration}
                  </p>
                  <p className="mt-4 leading-relaxed text-body-secondary">
                    {exp.description}
                  </p>
                  {/* <div className="mt-5 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 dark:border-slate-500/60 dark:bg-black/25 dark:text-slate-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
