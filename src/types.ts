export type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Education = {
  institution: string;
  logo: string;
  field: string;
  period: string;
};

export type Project = {
  title: string;
  description: string;
  href?: string;
  tag?: string;
  // Shown in place of the link's site name when there is no href.
  source?: string;
};

export type Profile = {
  name: string;
  logo: string;
  href: string;
  detail: string;
};
