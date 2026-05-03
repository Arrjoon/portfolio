import Link from "next/link";
import { Github, Globe } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";

type Props = {
  projects: PortfolioProject[];
};

export default function DevelopmentProjectsTable({ projects }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-300/90 dark:border-slate-700/70">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-300 dark:border-slate-600">
            <th className="whitespace-nowrap py-3 pl-3 pr-2 font-semibold text-body-secondary md:pl-4">
              Date
            </th>
            <th className="py-3 pr-2 font-semibold text-body-secondary">Project</th>
            <th className="hidden py-3 pr-3 font-semibold text-body-secondary sm:table-cell md:pr-4">
              Stack
            </th>
            <th className="py-3 pr-2 text-center font-semibold text-body-secondary">Link</th>
            <th className="w-px py-3 pr-3 md:pr-4">
              <span className="sr-only">Detail</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => {
            const externalHref = p.liveUrl ?? p.repoUrl;
            const isLive = Boolean(p.liveUrl);

            return (
              <tr
                key={p.slug}
                className="border-b border-slate-200/90 last:border-0 dark:border-slate-700/50"
              >
                <td className="whitespace-nowrap py-3 pl-3 align-middle font-mono text-xs tabular-nums text-body-secondary md:pl-4">
                  {p.date}
                </td>
                <td className="py-3 pr-2 align-middle">
                  <Link
                    href={`/development/${p.slug}`}
                    className="text-heading-primary underline decoration-accent/40 underline-offset-2 transition hover:decoration-accent"
                  >
                    {p.title}
                  </Link>
                  <p className="mt-1 text-xs text-body-secondary sm:hidden">{p.stack}</p>
                </td>
                <td className="hidden py-3 pr-3 align-middle text-body-secondary sm:table-cell md:pr-4">
                  {p.stack}
                </td>
                <td className="py-3 pr-2 align-middle text-center">
                  <a
                    href={externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-accent transition hover:border-accent hover:bg-accent/10 dark:border-slate-600"
                    aria-label={isLive ? `Open live site: ${p.title}` : `Open source code: ${p.title}`}
                    title={isLive ? "Live site" : "Source code"}
                  >
                    {isLive ? <Globe className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                  </a>
                </td>
                <td className="py-3 pr-3 align-middle md:pr-4">
                  <Link
                    href={`/development/${p.slug}`}
                    className="inline-block rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-body-secondary transition hover:border-accent hover:text-accent dark:border-slate-600"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
