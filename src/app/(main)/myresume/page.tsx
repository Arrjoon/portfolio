import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import {
  ResumeInquiryProvider,
  ResumeRequestButton,
  ResumeRequestLink,
} from "@/components/resume/ResumeInquiry";
import { getKeyProjectsForResume } from "@/data/projects";
import {
  credentials,
  education,
  experience,
  professionalSummary,
  resumeProfile,
  skillGroups,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Arjun Nepali",
  description:
    "Professional resume: experience at Prixa Technologies, technical skills, and selected software projects.",
};

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-text-primary border-b border-border pb-2 mb-5 mt-14 first:mt-0 md:text-2xl">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  const resumeProjects = getKeyProjectsForResume();

  return (
    <div className="section-y section-x bg-primary min-h-screen">
      <ResumeInquiryProvider>
      <article className="mx-auto max-w-3xl">
        {/* Hero — inspired by document-style resume pages like dipakniroula.com.np/my-resume */}
        <header className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Resume
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
            {resumeProfile.name}
          </h1>
          <p className="mt-2 text-lg text-body-secondary">{resumeProfile.headline}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
            <a
              href={`mailto:${resumeProfile.email}`}
              className="inline-flex items-center gap-1.5 text-body-secondary hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              {resumeProfile.email}
            </a>
            <span className="inline-flex items-center gap-1.5 text-body-secondary">
              <Phone className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              {resumeProfile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5 text-body-secondary">
              <MapPin className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              {resumeProfile.location}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {resumeProfile.links.map((l) => {
              const Icon = l.label === "GitHub" ? Github : Linkedin;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {l.label}
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:justify-start">
            <ResumeRequestButton />
            <Link
              href="/development"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/80 px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              View project index
            </Link>
          </div>
        </header>

        <SectionTitle>Professional summary</SectionTitle>
        <div className="space-y-4 text-body-secondary leading-relaxed">
          {professionalSummary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <SectionTitle>Technical skills</SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.category}>
              <h3 className="text-sm font-semibold text-text-primary mb-1.5">
                {g.category}
              </h3>
              <p className="text-sm text-body-secondary leading-relaxed">{g.items}</p>
            </div>
          ))}
        </div>

        <SectionTitle>Experience</SectionTitle>
        <ul className="space-y-10">
          {experience.map((job) => (
            <li key={`${job.title}-${job.start}`} className="relative pl-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {job.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {job.company}
                    <span className="font-normal text-body-secondary">
                      {" "}
                      · {job.location}
                    </span>
                  </p>
                </div>
                <p className="text-sm tabular-nums text-body-secondary shrink-0">
                  {job.start} – {job.end}
                  {job.isCurrent ? (
                    <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                      Current
                    </span>
                  ) : null}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body-secondary leading-relaxed">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <SectionTitle>Key software projects</SectionTitle>
        <ol className="list-decimal space-y-10 pl-5 marker:font-semibold marker:text-accent">
          {resumeProjects.map((proj) => (
            <li key={proj.title} className="pl-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-base font-semibold text-text-primary">
                  {proj.title}
                </h3>
                {proj.slug ? (
                  <Link
                    href={`/development/${proj.slug}`}
                    className="text-sm font-medium text-accent hover:text-accent-hover whitespace-nowrap"
                  >
                    Case study →
                  </Link>
                ) : null}
              </div>
              {proj.meta ? (
                <p className="mt-1 text-xs uppercase tracking-wide text-body-secondary">
                  {proj.meta}
                </p>
              ) : null}
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body-secondary leading-relaxed">
                {proj.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <SectionTitle>Education & credentials</SectionTitle>
        <ul className="space-y-6">
          {education.map((e) => (
            <li key={e.degree}>
              <h3 className="font-semibold text-text-primary">{e.degree}</h3>
              <p className="text-sm text-body-secondary">{e.school}</p>
              <p className="text-sm text-body-secondary">{e.university}</p>
              <p className="mt-1 text-sm tabular-nums text-body-secondary">
                {e.period}
                {e.detail ? ` · ${e.detail}` : ""}
              </p>
            </li>
          ))}
        </ul>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-body-secondary">
          {credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <footer className="mt-14 flex flex-col items-center gap-3 border-t border-border pt-10 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-body-secondary sm:text-left">
            Want a PDF copy?{" "}
            <ResumeRequestLink /> — I will send the latest version by email.
          </p>
        </footer>
      </article>
      </ResumeInquiryProvider>
    </div>
  );
}
