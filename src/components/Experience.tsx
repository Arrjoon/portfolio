"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Users,
  Lightbulb,
  MessageSquare,
  Languages,
  BrainCircuit,
} from 'lucide-react';
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
} from 'react-icons/si';

const Skills = () => {
  // Hard skills data with actual icons
  const hardSkills = [
    { name: 'Python', icon: <SiPython size={32} />, color: '#3776AB' },
    { name: 'Django', icon: <SiDjango size={32} />, color: '#092E20' },
    { name: 'React', icon: <SiReact size={32} />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs size={32} />, color: '#000000' },
    { name: 'JavaScript', icon: <SiJavascript size={32} />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript size={32} />, color: '#3178C6' },
    { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: '#339933' },
    { name: 'Express', icon: <SiExpress size={32} />, color: '#000000' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, color: '#4169E1' },
    { name: 'MongoDB', icon: <SiMongodb size={32} />, color: '#47A248' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, color: '#06B6D4' },
    { name: 'TensorFlow', icon: <SiTensorflow size={32} />, color: '#FF6F00' },
    { name: 'Flask', icon: <SiFlask size={32} />, color: '#000000' },
    { name: 'Git', icon: <SiGit size={32} />, color: '#F05032' },
    { name: 'Docker', icon: <SiDocker size={32} />, color: '#2496ED' },
    { name: 'Redis', icon: <SiRedis size={32} />, color: '#DC382D' },
    { name: 'AWS', icon: <SiAmazon size={32} />, color: '#FF9900' },
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
    show: { opacity: 1, x: 0, scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 } 
    }
  };

  const itemRight = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    show: { opacity: 1, x: 0, scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 } 
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-section-3 rounded-3xl my-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2 
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-accent-hover to-accent bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.div 
          className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-accent to-transparent"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Hard Skills Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
            style={{ color: "var(--color-text-primary)" }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code style={{ color: "var(--color-accent)" }} size={28} />
            </motion.div>
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {hardSkills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemLeft}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group relative p-5 rounded-2xl flex flex-col items-center gap-3 cursor-pointer overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}15 0%, ${skill.color}05 100%)`,
                  }}
                />
                
                <motion.div 
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </motion.div>
                <span 
                  className="font-semibold text-sm relative z-10 transition-colors duration-300"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {skill.name}
                </span>
                
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                  }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
            style={{ color: "var(--color-text-primary)" }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Users style={{ color: "var(--color-accent)" }} size={28} />
            </motion.div>
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Professional Skills
            </span>
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemRight}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  rotateY: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group relative p-5 rounded-2xl flex flex-col items-center gap-3 cursor-pointer overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, var(--color-accent)15 0%, var(--color-accent-hover)05 100%)",
                  }}
                />
                
                <motion.div 
                  whileHover={{
                    rotate: [0, 15, -15, 0],
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                  style={{ color: "var(--color-accent)" }}
                >
                  {skill.icon}
                </motion.div>
                <span 
                  className="font-semibold text-sm relative z-10 transition-colors duration-300"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {skill.name}
                </span>
                
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                  }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
