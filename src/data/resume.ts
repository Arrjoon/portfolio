/** Single source for the /myresume page. Update links or copy here when your CV changes. */

export const resumeProfile = {
  name: "Arjun Nepali",
  headline: "Full Stack Backend Focused Software Engineer",
  location: "Kalimati, Kathmandu, Nepal",
  email: "nepaliarjun049@gmail.com",
  phone: "+977 9862569729",
  links: [
    { label: "GitHub", href: "https://github.com/Arrjoon" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-nepali/" },
  ],
};

/** Merges your CV summary with the themes from the former About page. */
export const professionalSummary = [
  "Software engineer focused on scalable web applications, with hands-on experience across Django, Django REST Framework, Next.js, and real-time systems. I enjoy turning complex product requirements into maintainable backends, clear APIs, and thoughtful frontends that stay fast under load.",
  "At work I lean on collaborative delivery, code review, and pragmatic architecture—balancing technical quality with shipping value. I care about user-centered outcomes: secure auth, solid CMS and multi-tenant patterns, and performance for real users.",
];

export const skillGroups: { category: string; items: string }[] = [
  {
    category: "Programming languages",
    items: "Python, JavaScript, TypeScript, C/C++",
  },
  {
    category: "Backend",
    items: "Django, Django REST Framework, FastAPI, Django Channels",
  },
  {
    category: "Frontend",
    items: "React.js, Next.js, HTML, CSS, Tailwind CSS, Bootstrap",
  },
  {
    category: "Databases",
    items: "PostgreSQL, MySQL, SQLite",
  },
  {
    category: "Task queues & caching",
    items: "Celery, Redis",
  },
  {
    category: "DevOps & tools",
    items: "Docker, AWS (EC2, S3, RDS), Linux, Git",
  },
  {
    category: "AI / ML exposure",
    items: "RAG, NLP, OpenAI API integration",
  },
];

export type ResumeExperience = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  isCurrent?: boolean;
  bullets: string[];
};

export const experience: ResumeExperience[] = [
  {
    title: "Software Engineer",
    company: "Prixa Technologies",
    location: "Lalitpur, Nepal",
    start: "Sep 2024",
    end: "Present",
    isCurrent: true,
    bullets: [
      "Leading development of scalable web applications using Django, DRF, and Next.js.",
      "Managing a small development team including task planning, mentorship, and code reviews.",
      "Designed and optimized backend architectures for multi-tenant SaaS platforms serving nationwide users.",
      "Built role-based CMS platforms with dynamic UI for clients such as Ukaalo and New Business Age.",
      "Developed RESTful APIs and implemented authentication systems including JWT and 2FA.",
      "Integrated payment gateways like eSewa, Khalti, and international providers.",
      "Built an AI-powered news scraping and summarization pipeline using LLM-based techniques.",
      "Progressed from Intern → Junior → Mid-Level Software Engineer to Team Lead within the organization.",
    ],
  },
];

/** Shape for `/myresume` project bullets (built from `portfolioProjects` via `getKeyProjectsForResume`). */
export type ResumeProject = {
  title: string;
  meta?: string;
  bullets: string[];
  /** Optional link to the portfolio case study */
  slug?: string;
};

export const education = [
  {
    degree: "Bachelor of Computer Engineering",
    school: "Cosmos College of Management and Technology, Satdobato, Lalitpur",
    university: "Pokhara University",
    period: "2019 – 2024",
    detail: "CGPA: 3.53",
  },
];

export const credentials = [
  "Licensed Computer Engineer, Nepal Engineering Council",
];
