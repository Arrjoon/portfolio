import DevelopmentProjectsTable from "@/components/DevelopmentProjectsTable";
import { getProjectsSortedByDateDesc } from "@/data/projects";

export const metadata = {
  title: "Projects | Arjun Nepali",
  description: "Selected development work and project notes.",
};

export default function DevelopmentPage() {
  const projects = getProjectsSortedByDateDesc();

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

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-heading-primary md:text-4xl">Projects</h1>
        <p className="mb-8 text-body-secondary">
          A compact index of work. The link column opens the live site when available, otherwise the
          GitHub repo. Use <span className="whitespace-nowrap">View</span> for the full project page.
        </p>
        <DevelopmentProjectsTable projects={projects} />
      </div>
    </section>
  );
}
