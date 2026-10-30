import type { ReactNode } from "react";

function Icon({ className = "size-4", children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

type IconProps = { className?: string };

export const ArrowUpRightIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const MenuIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Icon>
);

export const CloseIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const MailIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

export const MapPinIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

export const AlertCircleIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5M12 16.5h.01" />
  </Icon>
);
