"use client";

import Image from "next/image";

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
    imagePath: "/projects/neo-appliance.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-y section-x bg-section-1 text-text-primary">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-16 text-center text-4xl text-heading-primary">My Projects</h2>

        <div className="grid max-w-6xl mx-auto grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="relative overflow-hidden rounded-lg border border-slate-200/90 bg-section-1/80 shadow-lg transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-slate-800/30"
            >
              <div className="absolute top-4 right-4 z-10 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-white">
                {project.year}
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
                <h3 className="mb-2 text-xl text-heading-primary">{project.title}</h3>
                <p className="text-body-secondary mb-4">{project.description}</p>

                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-body-secondary">
                      <span className="text-accent mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
