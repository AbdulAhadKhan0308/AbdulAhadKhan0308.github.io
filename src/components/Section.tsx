import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-zinc-100 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div aria-hidden="true" className="mb-4 h-1 w-8 rounded-full bg-brand-500" />
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
