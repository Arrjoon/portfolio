'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration",
      points: [
        "Built with React & Node.js",
        "Integrated Stripe payment gateway",
        "Real-time inventory management",
        "Responsive mobile-first design"
      ],
      year: "2023",
      imageId: "300/200?random=1"
    },
    {
      id: 2,
      title: "Health Tracking App",
      description: "Mobile application for fitness and health monitoring",
      points: [
        "React Native cross-platform app",
        "Syncs with wearable devices",
        "Data visualization dashboard",
        "Secure cloud storage"
      ],
      year: "2022",
      imageId: "300/200?random=2"
    },
    {
      id: 3,
      title: "Project Management Tool",
      description: "Collaborative workspace for team productivity",
      points: [
        "Real-time updates with Socket.io",
        "Drag-and-drop task boards",
        "Role-based access control",
        "Automated reporting"
      ],
      year: "2021",
      imageId: "300/200?random=3"
    },
    {
      id: 4,
      title: "AI Content Analyzer",
      description: "Natural language processing for content moderation",
      points: [
        "Python machine learning backend",
        "Custom-trained NLP models",
        "REST API integration",
        "Dashboard with analytics"
      ],
      year: "2020",
      imageId: "300/200?random=4"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-500 transform -translate-x-1/2"></div>
          
          {/* Projects container */}
          <div className="space-y-16 md:space-y-32">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isEven }: { project: any, index: number, isEven: boolean }) => {
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
    <div className="container mx-auto px-2 max-w-6xl">

    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 h-6 w-6 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
      
      {/* Project image */}
      <div className={`md:w-1/2 mb-8 md:mb-0 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
          <Image 
            src={`https://picsum.photos/id/${project.imageId}`} 
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white text-lg font-medium">{project.description}</span>
          </div>
        </div>
      </div>
      
      {/* Project content */}
      <div className={`md:w-1/2 ${isEven ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
        <div className={`p-6 rounded-lg bg-gray-800 border-l-4 ${isEven ? 'border-blue-400' : 'border-purple-400'}`}>
          <span className="text-blue-400 font-semibold">{project.year}</span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-4">{project.title}</h3>
          <ul className={`space-y-2 ${isEven ? 'ml-auto' : 'mr-auto'}`} style={{ maxWidth: '90%' }}>
            {project.points.map((point: string, i: number) => (
              <li key={i} className="text-gray-300 flex items-start">
                {!isEven && <span className="text-blue-400 mr-2">•</span>}
                <span>{point}</span>
                {isEven && <span className="text-blue-400 ml-2">•</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default ProjectsSection;