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
      "Working for 1+ year on various news websites and digital platforms. Responsible for developing, maintaining, and optimizing modern web applications.",
    techStack: ["Next.js", "Django", "PostgreSQL", "TailwindCSS"],
  },
  {
    id: 2,
    role: "Freelance Developer",
    company: "Projects / Clients",
    duration: "Jan 2024 – Present",
    description:
      "Developed small websites, landing pages, and web apps for individual clients and startups, including deployment, SEO, and performance optimization.",
    techStack: ["React", "Next.js", "Django", "TailwindCSS"],
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
          className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-30 dark:opacity-40"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 dark:opacity-30"
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
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.04] dark:opacity-[0.07] bg-[size:32px_32px] bg-[linear-gradient(rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-0 w-full min-w-0 flex-1 flex-col">
      <div>
        <h2 className="mb-10 text-center text-3xl text-heading-primary">
          Work & Freelance Experience
        </h2>

        <div className="mx-auto max-w-3xl space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-lg border border-slate-200/90 bg-white/60 p-6 shadow-xl backdrop-blur-sm dark:border-white/15 dark:bg-slate-900/45"
            >
              <div className="absolute -left-4 top-4 rounded-full bg-accent p-2 text-white">
                <Briefcase className="h-5 w-5" />
              </div>

              <h3 className="text-xl text-heading-primary">{exp.role}</h3>

              <p className="text-sm text-body-secondary">{exp.company}</p>

              <p className="text-sm font-medium mb-3 text-accent">{exp.duration}</p>

              <p className="text-body-secondary">{exp.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent px-2 py-1 text-xs text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
export default WorkExperience;
