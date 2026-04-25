"use client";
import React from "react";
import { Briefcase } from "lucide-react";
import SectionSurface from "@/components/SectionSurface";

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
    <SectionSurface className="section-y section-x text-text-primary">
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
    </SectionSurface>
  );
};
export default WorkExperience;
