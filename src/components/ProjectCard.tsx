import type { ReactNode } from "react";
import type { Project } from "../types";
import { Card } from "./Card";
import { ArrowUpRightIcon } from "./icons";

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800">
      {children}
    </span>
  );
}

const hostOf = (href: string) => new URL(href).hostname.replace(/^www\./, "");

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, href, tag, source } = project;
  const meta = href ? hostOf(href) : source;

  return (
    <Card href={href} className="flex flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-zinc-900">{title}</h3>
        {href && (
          <ArrowUpRightIcon className="mt-0.5 size-4 shrink-0 text-zinc-400 transition group-hover:text-brand-700 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
        {tag && <Badge>{tag}</Badge>}
        {meta && <span className="text-xs text-zinc-500">{meta}</span>}
      </div>
    </Card>
  );
}
