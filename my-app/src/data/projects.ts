export type Project = {
  title: string;
  description: string;
  demoUrl: string;
  demoLabel?: string;
  /** Path under `public/`, e.g. `/projects/pincs.png` */
  imageSrc?: string;
  imageAlt?: string;
  /** Optional GitHub or other source link */
  repoUrl?: string;
  /** When no image, a subtle placeholder accent (1–4) */
  placeholderTone?: 1 | 2 | 3 | 4;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "TeachIdaho",
    description:
      "Creating digital infrastructure for one of Idaho’s largest education nonprofits—digitizing parts of their economic summit and making hands-on activities easier to run and more sustainable year over year.",
    demoUrl: "https://teachidaho.vercel.app/",
    repoUrl: "https://github.com/hoyoonsong/teachidaho",
    imageSrc: "/projects/teachidaho.png",
    imageAlt:
      "TeachIdaho homepage with programs for the economic summit and pitch competition",
    tags: ["Nonprofit", "Web", "Education"],
  },
  {
    title: "PinCS",
    description:
      "Summer research at Stanford: a hub for digital learning resources plus an interactive Unity experience that walks learners through concepts in 3D (papermaking and beyond).",
    demoUrl: "https://pincs.stanford.edu/interactive-lessons",
    demoLabel: "Open interactive lesson",
    imageSrc: "/projects/pincs.png",
    imageAlt:
      "3D Unity lesson scene with robots, vats of pulp, and instructional UI",
    tags: ["Research", "Unity", "Stanford", "Education"],
  },
  {
    title: "Shrek: The Escape Room",
    description:
      "Design 1 class project—an escape-room style experience built for the web, balancing narrative, pacing, and playful interaction design.",
    demoUrl: "https://shrek-escape-room.vercel.app/",
    repoUrl: "https://github.com/hoyoonsong/shrek",
    imageSrc: "/projects/shrek.jpeg",
    imageAlt:
      "Shrek the Escape Room web UI showing stage progress and castle wall puzzle",
    tags: ["Design", "Web", "Class project"],
  },
  {
    title: "Neopply",
    description:
      "Redesigning and connecting all parts of the application process for a more efficient and equitable experience for all.",
    demoUrl: "https://www.neopply.com/",
    imageSrc: "/projects/Screenshot 2026-04-14 at 10.55.53 PM.png",
    imageAlt: "Neopply application process",
    demoLabel: "View site",
    placeholderTone: 3,
    tags: ["UX", "Product", "Web"],
  },
];

export const GITHUB_PROFILE = "https://github.com/hoyoonsong/";
export const LINKEDIN = "https://www.linkedin.com/in/hoyoonsong";
