import type { ReactNode } from "react";

type TimelineEntryProps = {
  logo: string;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  children?: ReactNode;
};

export function TimelineEntry({ logo, title, subtitle, period, location, children }: TimelineEntryProps) {
  return (
    <li className="flex gap-4">
      <img
        src={logo}
        alt=""
        className="mt-0.5 size-10 shrink-0 rounded-lg border border-zinc-200 bg-white object-contain p-1.5"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-x-6 sm:flex-row sm:items-baseline sm:justify-between">
          <h4 className="font-semibold text-zinc-900">{title}</h4>
          <p className="shrink-0 text-sm tabular-nums text-zinc-500">{period}</p>
        </div>
        <p className="text-zinc-600">
          {subtitle}
          {location && <span className="text-zinc-500"> · {location}</span>}
        </p>
        {children}
      </div>
    </li>
  );
}
