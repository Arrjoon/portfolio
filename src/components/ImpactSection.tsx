"use client";

import React from "react";
import SectionSurface from "@/components/SectionSurface";

const ImpactSection = () => {
  return (
    <SectionSurface className="section-y section-x text-center text-text-primary">
      <div className="mx-auto max-w-4xl">
        <p className="text-body-secondary mb-4 text-base tracking-wide md:text-lg">
          I have always been committed towards
        </p>

        <h2 className="text-3xl text-heading-primary leading-tight tracking-tight md:text-5xl">
          Creating a Positive Impact
          <br className="hidden md:block" /> in the Community
        </h2>
      </div>
    </SectionSurface>
  );
};

export default ImpactSection;
