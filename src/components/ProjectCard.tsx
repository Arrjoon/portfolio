'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const ProjectsCardSection = () => {
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
      imagePath: "/projects/resume_extraction.png"
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
      imagePath: "/projects/multivendor_ecommerce.png"
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
      title: "Dealer Management System",
      description: "Role-based appliance management platform for manufacturers, dealers, and customers",
      points: [
        "Developed a role-based appliance management platform for manufacturers, warehouse managers, dealers, customers, and technicians.",
        "Implemented custom dashboards, purchase order management, bulk sales, and warehouse inventory control.",
        "Integrated QR code scanning for product purchase registration and repair request tracking workflows.",
        "Built order management and notification system to track orders and inform users of updates in real-time."
      ],
      year: "2025",
      imagePath: "/projects/neo-appliances.jpg"
    }

  ];

  return (
    <section className="py-20 bg-section-1 text-text-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-accent via-accent-hover to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div 
          className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-accent to-transparent mb-16"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        
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
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-section-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 dark:border-white/5"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%)",
        }}
      />
      
      {/* Year indicator */}
      <motion.div 
        className="absolute top-4 right-4 bg-gradient-to-r from-accent to-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-full z-10 shadow-lg"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {project.year}
      </motion.div>
      
      {/* Project image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-section-2 via-transparent to-transparent z-10"></div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={project.imagePath} 
            alt={project.title}
            fill
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
          }}
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.8 }}
        />
      </div>
      
      {/* Project content */}
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-text-primary mb-3 bg-gradient-to-r from-text-primary to-accent bg-clip-text text-transparent"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-text-secondary mb-5 leading-relaxed">{project.description}</p>
        
        <ul className="space-y-3">
          {project.points.map((point: string, i: number) => (
            <motion.li 
              key={i} 
              className="text-text-secondary text-sm flex items-start group/item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <motion.span 
                className="text-accent mr-3 mt-1 text-lg"
                whileHover={{ rotate: 90, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                ✓
              </motion.span>
              <span className="group-hover/item:text-text-primary transition-colors duration-200">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectsCardSection;