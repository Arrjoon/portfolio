"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Database, 
  Network, 
  BrainCircuit, 
  Languages,
  Users,
  Lightbulb,
  FlaskConical,
  MessageSquare,
  GitBranch,
  Server,
  Terminal,
  LayoutDashboard
} from 'lucide-react';

const Skills = () => {
  // Hard skills data
  const hardSkills = [
    { name: 'Python', icon: <Cpu size={24} /> },
    { name: 'Django', icon: <FlaskConical size={24} /> },
    { name: 'React', icon: <Code size={24} /> },
    { name: 'Next.js', icon: <LayoutDashboard size={24} /> },
    { name: 'PostgreSQL', icon: <Database size={24} /> },
    { name: 'Tailwind', icon: <Terminal size={24} /> },
    { name: 'REST API', icon: <Network size={24} /> },
    { name: 'AI/ML', icon: <BrainCircuit size={24} /> },
    { name: 'TensorFlow', icon: <BrainCircuit size={24} /> },
    { name: 'Flask', icon: <Server size={24} /> },
    { name: 'Git', icon: <GitBranch size={24} /> },
  ];

  // Soft skills data
  const softSkills = [
    { name: 'Communication', icon: <MessageSquare size={24} /> },
    { name: 'Teamwork', icon: <Users size={24} /> },
    { name: 'Problem Solving', icon: <Lightbulb size={24} /> },
    { name: 'Creativity', icon: <BrainCircuit size={24} /> },
    { name: 'Adaptability', icon: <Languages size={24} /> },
    { name: 'Leadership', icon: <Users size={24} /> },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    show: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200,
        damping: 15
      } 
    }
  };

  const itemRight = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    show: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200,
        damping: 15
      } 
    }
  };

  const hoverEffect = {
    scale: 1.05,
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  const iconHover = {
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-blue-500 dark:bg-blue-600 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Hard Skills Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2"
          >
            <Code className="text-blue-500" />
            Technical Skills
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {hardSkills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemLeft}
                whileHover={hoverEffect}
                className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center gap-2"
              >
                <motion.div 
                  whileHover={iconHover}
                  className="text-blue-500 dark:text-blue-400"
                >
                  {skill.icon}
                </motion.div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2"
          >
            <Users className="text-purple-500" />
            Professional Skills
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemRight}
                whileHover={hoverEffect}
                className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center gap-2"
              >
                <motion.div 
                  whileHover={iconHover}
                  className="text-purple-500 dark:text-purple-400"
                >
                  {skill.icon}
                </motion.div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;