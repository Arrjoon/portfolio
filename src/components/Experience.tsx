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
  MessageSquare
} from 'lucide-react';

const Skills = () => {
  // Hard skills data
  const hardSkills = [
    { name: 'Python', icon: <Cpu className="text-blue-500" />, level: 90 },
    { name: 'Django', icon: <FlaskConical className="text-blue-500" />, level: 85 },
    { name: 'React', icon: <Code className="text-blue-500" />, level: 88 },
    { name: 'Next.js', icon: <Code className="text-blue-500" />, level: 80 },
    { name: 'PostgreSQL', icon: <Database className="text-blue-500" />, level: 75 },
    { name: 'Tailwind', icon: <Code className="text-blue-500" />, level: 85 },
    { name: 'REST API', icon: <Network className="text-blue-500" />, level: 82 },
    { name: 'AI/ML', icon: <BrainCircuit className="text-blue-500" />, level: 78 },
    { name: 'TensorFlow', icon: <BrainCircuit className="text-blue-500" />, level: 70 },
    { name: 'Flask', icon: <FlaskConical className="text-blue-500" />, level: 75 },
  ];

  // Soft skills data
  const softSkills = [
    { name: 'Communication', icon: <MessageSquare className="text-purple-500" /> },
    { name: 'Teamwork', icon: <Users className="text-purple-500" /> },
    { name: 'Problem Solving', icon: <Lightbulb className="text-purple-500" /> },
    { name: 'Creativity', icon: <BrainCircuit className="text-purple-500" /> },
    { name: 'Adaptability', icon: <Languages className="text-purple-500" /> },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Hard Skills Section */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
            <Code className="text-blue-500" /> Technical Skills
          </h3>
          <div className="space-y-4">
            {hardSkills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={hoverEffect}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-500">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
            <Users className="text-purple-500" /> Professional Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  ...hoverEffect,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)"
                }}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 transition-all"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-purple-500">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;