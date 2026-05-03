import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, Globe } from "lucide-react";
import { getProjectBySlug, portfolioProjects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] min-w-0 flex-col overflow-hidden bg-section-1 text-text-primary section-y section-x">
      <div
        className="absolute inset-0 -z-30 pointer-events-none bg-gradient-to-b from-section-1 via-slate-200/80 to-slate-200 dark:from-section-1 dark:via-[#0f172a] dark:to-[#0b1220]"
        aria-hidden
      />
      <div className="absolute inset-0 -z-20" aria-hidden>
        <div
          className="absolute h-[900px] w-[900px] rounded-full blur-3xl opacity-30 dark:opacity-40"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute h-[800px] w-[800px] rounded-full blur-3xl opacity-20 dark:opacity-30"
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
        className="absolute inset-0 -z-10 pointer-events-none bg-[size:32px_32px] bg-[linear-gradient(rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] opacity-[0.04] dark:bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] dark:opacity-[0.07]"
        aria-hidden
      />

      <article className="relative z-10 mx-auto w-full max-w-3xl">
        <Link
          href="/development"
          className="mb-6 inline-block text-sm font-medium text-accent underline-offset-2 hover:underline"
        >
          ← All projects
        </Link>

        <p className="mb-2 font-mono text-sm tabular-nums text-body-secondary">{project.date}</p>
        <h1 className="mb-2 text-3xl font-bold text-heading-primary md:text-4xl">{project.title}</h1>
        <p className="mb-4 text-sm text-body-secondary">
          <span className="font-semibold text-text-primary">Stack:</span> {project.stack}
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-600 dark:bg-slate-950/50 dark:text-white"
            >
              <Globe className="h-4 w-4 shrink-0" aria-hidden />
              Live site
            </a>
          ) : null}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-600 dark:bg-slate-950/50 dark:text-white"
          >
            <Github className="h-4 w-4 shrink-0" aria-hidden />
            Source code
          </a>
        </div>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl border border-slate-300/90 dark:border-slate-700/70">
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 48rem) 100vw, 48rem"
            priority
          />
        </div>

        <p className="mb-8 text-body-secondary">{project.description}</p>

        <h2 className="mb-4 text-lg font-semibold text-heading-primary">Highlights</h2>
        <ul className="space-y-3">
          {project.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-100">
              <span className="text-accent" aria-hidden>
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
