export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2";

export const primaryButton = `inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 ${focusRing}`;

export const secondaryButton = `inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 ${focusRing}`;

export const textLink =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:decoration-brand-700";

export const external = { target: "_blank", rel: "noopener noreferrer" } as const;
