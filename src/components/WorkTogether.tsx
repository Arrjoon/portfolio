"use client"; // Only if using App Router (Next.js 13+)

import React from 'react';
import { motion } from 'framer-motion';

const WorkTogetherSection = () => {
  return (
    <section className="bg-section-2 py-20 px-6 text-text-primary">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          className="inline-block bg-accent text-impact font-semibold px-8 py-3 rounded-md border border-accent hover:bg-transparent hover:text-text-primary transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default WorkTogetherSection;