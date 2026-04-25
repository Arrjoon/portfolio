"use client";

import React from "react";
import Image from "next/image";
import SectionSurface from "@/components/SectionSurface";

const projects = [
  {
    id: 1,
    title: "Resume Extractor",
    description: "Automated resume information extraction using NLP",
    points: [
      "Used spaCy for custom named entity recognition models",
      "Developed Django web app for user interaction",
      "Stored extracted data in SQLite database",
      "Implemented resume-to-job matching with fit scoring",
      "Deployed with Docker containerization",
    ],
    year: "2023",
    imagePath: "/projects/resume_extraction.png",
  },
  {
    id: 2,
    title: "Multivendor Ecommerce",
    description: "Online marketplace with multiple vendors",
    points: [
      "Integrated Khalti payment gateway",
      "Managed vendor accounts and product listings",
      "Implemented shopping cart functionality",
      "Developed order management system",
      "Built with Django and MySQL",
    ],
    year: "2022",
    imagePath: "/projects/multivendor_ecommerce.png",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description: "Web application for hospital administration",
    points: [
      "Doctor and patient management system",
      "Online appointment booking feature",
      "User authentication and authorization",
      "Developed with Django framework",
      "Responsive web interface",
    ],
    year: "2021",
    imagePath: "/projects/hospital-management.jpg",
  },
  {
    id: 4,
    title: "Dealer Management System",
    description: "Role-based appliance management platform for manufacturers, dealers, and customers",
    points: [
      "Developed a role-based appliance management platform for manufacturers, warehouse managers, dealers, customers, and technicians.",
      "Implemented custom dashboards, purchase order management, bulk sales, and warehouse inventory control.",
      "Integrated QR code scanning for product purchase registration and repair request tracking workflows.",
      "Built order management and notification system to track orders and inform users of updates in real-time.",
    ],
    year: "2025",
    imagePath: "/projects/neo-appliances.jpg",
  },
];

const ProjectsCardSection = () => {
  return (
    <SectionSurface className="section-y section-x text-text-primary">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-5xl text-center mb-4 text-heading-primary">My Projects</h2>
        <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent mb-16 mx-auto" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionSurface>
  );
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/60 shadow-lg backdrop-blur-sm transition-shadow duration-200 hover:shadow-2xl dark:border-white/15 dark:bg-slate-900/45">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(56, 189, 248, 0.06) 100%)",
        }}
      />

      <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-accent to-accent-hover px-4 py-2 text-sm font-semibold text-white shadow-lg">
        {project.year}
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
        <h3 className="mb-3 text-2xl text-heading-primary">{project.title}</h3>
        <p className="text-body-secondary mb-5 leading-relaxed">{project.description}</p>
        <ul className="space-y-3">
          {project.points.map((point, i) => (
            <li key={i} className="group/item flex items-start text-sm text-body-secondary">
              <span className="text-accent mt-0.5 mr-3 text-lg" aria-hidden>
                ✓
              </span>
              <span className="group-hover/item:text-text-primary transition-colors">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectsCardSection;
