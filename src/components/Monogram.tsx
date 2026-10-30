import { site } from "../data";

const sizes = {
  sm: "size-8 rounded-lg text-xs",
  lg: "size-20 rounded-2xl text-2xl sm:size-24 sm:text-3xl",
};

export function Monogram({ size }: { size: keyof typeof sizes }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 select-none items-center justify-center bg-brand-700 font-semibold tracking-tight text-white ${sizes[size]}`}
    >
      {site.initials}
    </span>
  );
}
