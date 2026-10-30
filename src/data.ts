import type { Education, Experience, Profile, Project } from "./types";

export const site = {
  name: "Abdul Ahad Khan",
  initials: "AK",
  role: "Software Engineer",
  company: "Microsoft",
  location: "Hyderabad, India",
  intro: "Discover more about my work, education and projects.",
  resumeUrl:
    "https://drive.google.com/file/d/1Af4SBWUwkF1w63W4QLxcJdSI8ps41sNx/view",
  githubUrl: "https://github.com/AbdulAhadKhan0308",
  contactFormAction: "https://formspree.io/f/xanwypap",
};

export const experience: Experience[] = [
  {
    company: "Microsoft",
    logo: "img/microsoft.ico",
    role: "Software Engineer",
    period: "Jul 2023 – Present",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Developed a framework to mock the WebSocket protocol for end-to-end testing of the UI code in a Copilot application. This framework is essential for avoiding costly calls to the LLM API during automation tests running in CI pipeline.",
    ],
  },
  {
    company: "Microsoft",
    logo: "img/microsoft.ico",
    role: "Software Engineer Intern",
    period: "May 2022 – Jul 2022",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Developed a hybrid autosuggestion workflow that leverages both local caching and service calls to optimize load time.",
      "Optimized core modules by incorporating WebAssembly over traditional JavaScript, resulting in improvements in autosuggest latency and overall application performance.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Motilal Nehru National Institute of Technology, Allahabad",
    logo: "img/mnnit.png",
    field: "Information Technology",
    period: "Aug 2019 – Jun 2023",
  },
  {
    institution: "Academic Heights Public School",
    logo: "img/ahps.png",
    field: "Physics, Chemistry and Maths stream",
    period: "Feb 2017 – Apr 2019",
  },
];

export const projects: Project[] = [
  {
    title: "Digital Medical Service",
    description:
      "A web application offering consultations, appointments and medicine lookup digitally.",
    href: "https://github.com/AbdulAhadKhan0308/Digital-Medical-Service",
  },
  {
    title: "Hybrid Autosuggestion in Bing",
    description:
      "Built a search suggestion framework that pulls data from both service calls and local caches, ranks and displays suggestions.",
    href: "https://drive.google.com/file/d/1DeEj6oooU5hPC_C1SHH6d1baDj-4kcA4/view",
    tag: "Microsoft intern project",
  },
  {
    title: "Tasks Memo with Geolocation",
    description:
      "A compact frontend application that enables you to track the timing and locations of your tasks.",
    href: "https://github.com/AbdulAhadKhan0308/GeolocationTaskMemo/tree/react-app-geolocation",
  },
  {
    title: "Bit Count in JS",
    description: "Identified and resolved a bug in the bit counting algorithm.",
    href: "https://github.com/TheAlgorithms/JavaScript/pull/1137",
    tag: "Open source",
  },
  {
    title: "Tamperproof Document Storage",
    description:
      "Using IPFS and Ethereum Blockchain technologies for tamperproof storage.",
    href: "https://github.com/AbdulAhadKhan0308/TamperProofDocumentStorage",
  },
  {
    title: "Inventory Management Application",
    description:
      "A desktop application designed to manage inventory, generate charts, and issue alerts when supplies run low.",
    href: "https://github.com/AbdulAhadKhan0308/Inventory-Application",
  },
  {
    title: "MP3 Player",
    description: "An MP3 player written in Java.",
    href: "https://github.com/AbdulAhadKhan0308/MP3-Player",
  },
  {
    title: "Mocking WebSocket Protocol in Playwright",
    description:
      "Added WebSocket protocol mocking support to the Playwright framework for end-to-end testing.",
    source: "Microsoft",
  },
];

export const profiles: Profile[] = [
  {
    name: "Codeforces",
    logo: "img/codeforces.png",
    href: "https://codeforces.com/profile/AbdulAhadKhan",
    detail: "Rated Expert",
  },
  {
    name: "LeetCode",
    logo: "img/leetcode.ico",
    href: "https://leetcode.com/u/AbdulAhadKhan030801/",
    detail: "2000+ rating",
  },
  {
    name: "CodeChef",
    logo: "img/codechef.ico",
    href: "https://www.codechef.com/users/abdul030801",
    detail: "5★ rated",
  },
  {
    name: "HackerEarth",
    logo: "img/hackerearth.png",
    href: "https://www.hackerearth.com/@AbdulAhadKhan",
    detail: "1900+ contest rating",
  },
  {
    name: "AtCoder",
    logo: "img/atcoder.png",
    href: "https://atcoder.jp/users/AbdulAhadKhan",
    detail: "1000+ rating",
  },
  {
    name: "HackerRank",
    logo: "img/hackerrank.png",
    href: "https://www.hackerrank.com/profile/aahad6674",
    detail: "5★ Java and SQL badges",
  },
  {
    name: "GitHub",
    logo: "img/github.svg",
    href: "https://github.com/AbdulAhadKhan0308/",
    detail: "Projects and source code",
  },
  {
    name: "Newton Coding",
    logo: "img/newtoncoding.ico",
    href: "https://my.newtonschool.co/user/aahad6674",
    detail: "2100+ contest rating",
  },
];
