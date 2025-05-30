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
];

const WorkExperience = () => {
  return (
    <section className="relative min-h-screen text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>

        <div className="space-y-10 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative border-l-4 border-blue-400 pl-6 bg-white/10 backdrop-blur-lg p-6 shadow-xl rounded-lg"
            >
              <div className="absolute -left-4 top-4 bg-blue-500 text-white p-2 rounded-full">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-gray-200">{exp.company}</p>
              <p className="text-sm text-blue-300 font-medium mb-3">{exp.duration}</p>
              <p className="text-gray-100">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
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
