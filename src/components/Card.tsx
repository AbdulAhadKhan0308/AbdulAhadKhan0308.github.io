import type { ReactNode } from "react";
import { external, focusRing } from "./styles";

type CardProps = {
  href?: string;
  onClick?: () => void;
  className: string;
  children: ReactNode;
};

const base = "group relative h-full rounded-xl border border-zinc-200 bg-white";

export function Card({ href, onClick, className, children }: CardProps) {
  if (!href) {
    return <div className={`${base} ${className}`}>{children}</div>;
  }
  return (
    <a
      href={href}
      {...external}
      onClick={onClick}
      className={`${base} transition hover:border-zinc-300 hover:shadow-md hover:shadow-zinc-900/5 ${focusRing} ${className}`}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
