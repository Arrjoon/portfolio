"use client"; // For App Router (Next.js 13+)

import React from 'react';
import { motion } from 'framer-motion';


const ImpactSection = () => {
  return (
    <section className="relative bg-impact py-24 px-6 text-center text-text-primary overflow-hidden">
      {/* Decorative blur circle */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow delay-1000"></div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-base md:text-lg mb-4 tracking-wide">
          I have always been committed towards
        </p>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Creating a Positive Impact<br className="hidden md:block" /> in the Community
        </h2>
      </motion.div>
    </section>
  );
};

export default ImpactSection;
