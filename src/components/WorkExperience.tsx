"use client";
import React from "react";
import { motion } from "framer-motion";
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
    <section className="relative bg-impact min-h-screen text-text-primary">
      <div className="relative z-10 px-4 md:px-12 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Work & Freelance Experience
        </h2>

        <div className="space-y-10 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative backdrop-blur-lg p-6 shadow-xl rounded-lg" // Removed border-l-4 border-accent
            >
              {/* Icon */}
              <div className="absolute -left-4 top-4 p-2 rounded-full bg-accent text-white">
                <Briefcase className="h-5 w-5" />
              </div>

              {/* Role */}
              <h3 className="text-xl font-semibold">{exp.role}</h3>

              {/* Company */}
              <p className="text-sm text-text-secondary">{exp.company}</p>

              {/* Duration */}
              <p className="text-sm font-medium mb-3 text-accent">{exp.duration}</p>

              {/* Description */}
              <p>{exp.description}</p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-accent text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkExperience;