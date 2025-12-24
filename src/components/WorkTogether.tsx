"use client"; // Only if using App Router (Next.js 13+)

import React from 'react';
import { motion } from 'framer-motion';

const WorkTogetherSection = () => {
  return (
    <section className="relative bg-section-2 py-24 px-6 text-text-primary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-accent-hover) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-accent via-accent-hover to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's work together
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I specialize in designing and developing scalable systems and sleek landing pages that empower startups and organizations to grow. Whether it's a simple portfolio or an experimental project — I help ideas come to life.
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I also speak and advocate on topics like Mental Health, Personal Growth, and Community Empowerment.
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          If this resonates with you, let's connect and create something meaningful.
        </motion.p>

        <motion.a 
          href="#contact"
          className="group relative inline-block bg-gradient-to-r from-accent to-accent-hover text-white font-semibold px-10 py-4 rounded-xl border border-accent overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="relative z-10">Contact Me</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-30"
            style={{
              background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
            }}
            initial={{ x: "-100%" }}
            whileHover={{ x: "200%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.a>
      </div>
    </section>
  );
};

export default WorkTogetherSection;