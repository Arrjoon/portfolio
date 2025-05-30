"use client"; // For App Router (Next.js 13+)

import React from 'react';
import { motion } from 'framer-motion';

const ImpactSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] py-24 px-6 text-center text-white overflow-hidden">
      {/* Decorative blur circle */}
      <div className="absolute top-[-80px] right-[-80px] w-60 h-60 bg-yellow-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-base md:text-lg text-gray-300 mb-4 tracking-wide">
          I have always been committed towards
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 tracking-tight leading-tight">
          Creating a Positive Impact<br className="hidden md:block" /> in the Community
        </h2>
      </motion.div>
    </section>
  );
};

export default ImpactSection;
