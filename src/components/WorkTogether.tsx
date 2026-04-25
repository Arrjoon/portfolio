"use client";

import React from "react";
import SectionSurface from "@/components/SectionSurface";

const WorkTogetherSection = () => {
  return (
    <SectionSurface className=" section-x text-text-primary">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-5xl md:text-6xl text-heading-primary mb-8">Let&apos;s work together</h2>

        <p className="text-lg md:text-xl text-body-secondary leading-relaxed mb-6">
          I specialize in designing and developing scalable systems and sleek landing pages that
          empower startups and organizations to grow. Whether it&apos;s a simple portfolio or an
          experimental project — I help ideas come to life.
        </p>

        <p className="text-lg md:text-xl text-body-secondary leading-relaxed mb-6">
          I also speak and advocate on topics like Mental Health, Personal Growth, and Community
          Empowerment.
        </p>

        <p className="text-lg md:text-xl text-body-secondary leading-relaxed mb-10">
          If this resonates with you, let&apos;s connect and create something meaningful.
        </p>

        <a
          href="#contact"
          className="inline-block rounded-xl border border-accent bg-gradient-to-r from-accent to-accent-hover px-10 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl hover:opacity-95 active:scale-[0.99]"
        >
          Contact Me
        </a>
      </div>
    </SectionSurface>
  );
};

export default WorkTogetherSection;
