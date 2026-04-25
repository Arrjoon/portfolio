"use client";
import React from "react";
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
      </div>
    </section>
  );
};

export default Skills;
