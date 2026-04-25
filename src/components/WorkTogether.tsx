"use client";

import React from "react";

const WorkTogetherSection = () => {
  return (
    <section className="relative flex min-h-0 min-w-0 flex-col overflow-hidden bg-section-1 text-text-primary section-y section-x">
      <div
        className="absolute inset-0 -z-30 pointer-events-none bg-gradient-to-b from-section-1 via-slate-200/80 to-slate-200 dark:from-section-1 dark:via-[#0f172a] dark:to-[#0b1220]"
        aria-hidden
      />
      <div className="absolute inset-0 -z-20" aria-hidden>
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-30 dark:opacity-40"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 dark:opacity-30"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            bottom: "-10%",
            right: "-10%",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_90%_75%_at_55%_40%,rgba(37,99,235,0.1),transparent_60%)] dark:bg-[radial-gradient(ellipse_85%_70%_at_55%_42%,rgba(255,255,255,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.04] dark:opacity-[0.07] bg-[size:32px_32px] bg-[linear-gradient(rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 w-full min-w-0 flex-1 flex-col">
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
      </div>
    </section>
  );
};

export default WorkTogetherSection;
