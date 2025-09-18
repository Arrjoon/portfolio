'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const ProjectsSection = () => {
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
        "Deployed with Docker containerization"
      ],
      year: "2023",
      imagePath: "/projects/resume-extractor.jpg"
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
        "Built with Django and MySQL"
      ],
      year: "2022",
      imagePath: "/projects/ecommerce.jpg"
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
        "Responsive web interface"
      ],
      year: "2021",
      imagePath: "/projects/hospital-management.jpg"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative task management platform",
      points: [
        "Real-time updates with WebSockets",
        "Team collaboration features",
        "Project progress tracking",
        "Built with Next.js and Firebase",
        "Mobile-responsive design"
      ],
      year: "2023",
      imagePath: "/projects/task-management.jpg"
    }
  ];

  return (
    <section className="py-20 bg-section-1 text-text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          My Projects
        </h2>
        
        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative bg-section-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Year indicator */}
      <div className="absolute top-4 right-4 bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
        {project.year}
      </div>
      
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-section-1 to-transparent z-10"></div>
        <Image 
          src={project.imagePath} 
          alt={project.title}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500"
          priority={index < 2}
        />
      </div>
      
      {/* Project content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
        <p className="text-text-secondary mb-4">{project.description}</p>
        
        <ul className="space-y-2">
          {project.points.map((point: string, i: number) => (
            <li key={i} className="text-text-secondary text-sm flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;