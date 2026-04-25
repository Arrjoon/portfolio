"use client";
import React from "react";
import SectionSurface from "@/components/SectionSurface";
import {
  Code,
  Users,
  Lightbulb,
  MessageSquare,
  Languages,
  BrainCircuit,
} from "lucide-react";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTensorflow,
  SiFlask,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazon,
} from "react-icons/si";

const hardSkills = [
  { name: "Python", icon: <SiPython size={32} />, color: "#3776AB" },
  { name: "Django", icon: <SiDjango size={32} />, color: "#092E20" },
  { name: "React", icon: <SiReact size={32} />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs size={32} />, color: "#000000" },
  { name: "JavaScript", icon: <SiJavascript size={32} />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript size={32} />, color: "#3178C6" },
  { name: "Node.js", icon: <SiNodedotjs size={32} />, color: "#339933" },
  { name: "Express", icon: <SiExpress size={32} />, color: "#000000" },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb size={32} />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, color: "#06B6D4" },
  { name: "TensorFlow", icon: <SiTensorflow size={32} />, color: "#FF6F00" },
  { name: "Flask", icon: <SiFlask size={32} />, color: "#000000" },
  { name: "Git", icon: <SiGit size={32} />, color: "#F05032" },
  { name: "Docker", icon: <SiDocker size={32} />, color: "#2496ED" },
  { name: "Redis", icon: <SiRedis size={32} />, color: "#DC382D" },
  { name: "AWS", icon: <SiAmazon size={32} />, color: "#FF9900" },
];

const softSkills = [
  { name: "Communication", icon: <MessageSquare size={24} /> },
  { name: "Teamwork", icon: <Users size={24} /> },
  { name: "Problem Solving", icon: <Lightbulb size={24} /> },
  { name: "Creativity", icon: <BrainCircuit size={24} /> },
  { name: "Adaptability", icon: <Languages size={24} /> },
  { name: "Leadership", icon: <Users size={24} /> },
];

const skillCardClass =
  "group relative flex cursor-default flex-col items-center gap-3 overflow-hidden rounded-2xl p-5 transition-shadow duration-200 hover:shadow-md " +
  "border border-slate-200/80 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/30";

const Skills = () => {
  return (
    <SectionSurface className="section-y section-x">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-5xl text-heading-primary mb-4">My Skills</h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3
              className="mb-8 flex items-center gap-3 text-2xl font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              <Code style={{ color: "var(--color-accent)" }} size={28} aria-hidden />
              <span className="text-heading-primary">Technical Skills</span>
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {hardSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={skillCardClass}
                  style={{
                    boxShadow: "0 4px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}12 0%, ${skill.color}05 100%)`,
                    }}
                  />
                  <div
                    className="relative z-10 transition-transform duration-200 group-hover:scale-105"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span
                    className="relative z-10 text-sm font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="mb-8 flex items-center gap-3 text-2xl font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              <Users style={{ color: "var(--color-accent)" }} size={28} aria-hidden />
              <span className="text-heading-primary">Professional Skills</span>
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={skillCardClass}
                  style={{
                    boxShadow: "0 4px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="absolute inset-0 bg-accent/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className="relative z-10 text-accent transition-transform duration-200 group-hover:scale-105">
                    {skill.icon}
                  </div>
                  <span
                    className="relative z-10 text-sm font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionSurface>
  );
};

export default Skills;
