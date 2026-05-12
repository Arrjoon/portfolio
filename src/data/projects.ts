import type { ResumeProject } from "./resume";

/** Replace repoUrl (and optional liveUrl) with your real links. */
export type PortfolioProject = {
  id: number;
  slug: string;
  /** ISO date YYYY-MM-DD for sorting and table display */
  date: string;
  title: string;
  /** Short tag for the table’s third column (like Jordan Lord’s stack column) */
  stack: string;
  description: string;
  points: string[];
  imagePath: string;
  /** If set, the table shows a globe linking to the live deployment */
  liveUrl?: string;
  /** Source code (e.g. GitHub) — shown when there is no liveUrl, and on the detail page */
  repoUrl?: string;
  /** When true, this project is listed under “Key software projects” on `/myresume`. */
  is_key_project?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: "multi-tenant-saas-news-platform",
    date: "2026-05-01",
    title: "Multi-Tenant SaaS News Platform",
    stack: "Django / DRF / Next.js",
    description:
      "Scalable multi-tenant SaaS for news portals: tenant isolation, CMS, and performance work for high-traffic sites.",
    points: [
      "Developed a scalable multi-tenant SaaS platform for news portals using Django REST Framework and Next.js, supporting multiple independent client websites.",
      "Upgraded a legacy system by refactoring backend architecture and improving performance, maintainability, and scalability.",
      "Implemented tenant-based data isolation and dynamic configuration for themes, domains, and content management.",
      "Built RESTful APIs and integrated them with a modern Next.js frontend for fast and dynamic user experience.",
      "Implemented a role-based CMS with dynamic group and permission management for articles, categories, tags, and media.",
      "Optimized performance using caching and query optimization for high-traffic news platforms.",
    ],
    imagePath: "/projects/multivendor_ecommerce.png",
    repoUrl: "https://github.com/arjun-nepali/multi-tenant-saas-news-platform",
    is_key_project: true,
  },
  {
    id: 2,
    slug: "realtime-chat-django-channels",
    date: "2025-11-15",
    title: "Real-time Chat Application",
    stack: "Django Channels / Next.js / WebSocket",
    description:
      "One-to-one and group chat with WebSockets, JWT-secured connections, and a Next.js client.",
    points: [
      "Developed a real-time chat system supporting one-to-one and group messaging using Django Channels and WebSockets.",
      "Implemented JWT authentication for secure WebSocket connections and message delivery.",
      "Built chat room listing, message history, typing indicators, and unread counters via Django REST Framework APIs.",
      "Integrated Redis for message brokering, presence tracking, and WebSocket event handling.",
      "Developed a Next.js frontend with React Query for state updates and instant message rendering.",
      "Optimized database queries and indexing for efficient message storage and retrieval.",
    ],
    imagePath: "/projects/resume_extraction.png",
    repoUrl: "https://github.com/Arrjoon/localchat-frontend",
    is_key_project: true,
  },
  {
    id: 3,
    slug: "multi-tenant-helpdesk-ai-rag",
    date: "2025-09-01",
    title: "Multi-Tenant Helpdesk AI SaaS (RAG)",
    stack: "Django / RAG / OpenAI / PostgreSQL",
    description:
      "Multi-tenant AI helpdesk with PDF ingestion, vector retrieval (FAISS), and OpenAI-grounded answers.",
    points: [
      "Designed and developed a multi-tenant AI-powered chatbot SaaS with strict tenant-level data isolation (schema-based tenancy).",
      "Implemented a RAG pipeline to answer user queries from tenant-specific PDF documents.",
      "Built PDF ingestion: text extraction, chunking, and vector embedding generation.",
      "Stored embeddings in FAISS for semantic retrieval; integrated OpenAI for grounded responses.",
      "Developed REST APIs for chat sessions, message history, and PDF management using Django REST Framework.",
      "Implemented role-based access control for tenant users and data.",
      "Containerized the application with Docker for consistent deployment.",
    ],
    imagePath: "/projects/resume_extraction.png",
    repoUrl: "https://github.com/Arrjoon/helpdesk_ai",
    is_key_project: true,
  },
  {
    id: 4,
    slug: "dealer-management-system",
    date: "2025-07-01",
    title: "Neo Appliances Management System",
    stack: "Django / REST",
    description:
      "Appliance management for manufacturers, warehouses, dealers, technicians, and customers with QR workflows.",
    points: [
      "Designed and developed a comprehensive appliance management system supporting 9+ user roles (manufacturer admin, warehouse, dealer, sub-dealer, sales, service, technician, customer, etc.).",
      "Built role-based dashboards and permission-controlled workflows using Django templates and REST APIs.",
      "Developed APIs and server-rendered flows for purchase orders, bulk sales, warehouse inventory, and dealer management.",
      "Integrated QR code-based product registration for purchases and warranty tracking.",
      "Implemented repair and service request workflows with real-time status tracking.",
      "Built order management and notifications for orders, deliveries, and service activities.",
    ],
    imagePath: "/projects/neo-appliances.jpg",
    // repoUrl: "https://github.com/arjun-nepali/dealer-management-system",
    is_key_project: true,
  },
  {
    id: 5,
    slug: "aarthik-abhiyan",
    date: "2024-10-01",
    title: "Aarthik Abhiyan",
    stack: "Django / DRF / GrapesJS",
    description:
      "CMS with GrapesJS, e-paper, scheduled publishing, social login, and AI voice playback for news.",
    points: [
      "Developed a drag-and-drop CMS using GrapesJS integrated with a Django backend.",
      "Implemented social login for seamless access and account creation.",
      "Built a dynamic magazine e-paper module for digital editions.",
      "Added scheduled publishing to release content at predefined times.",
      "Integrated Riri AI voice to read articles aloud for accessibility.",
      "Designed role-based workflows for editors, reporters, and chief editors.",
      "Developed REST APIs for publishing, user management, e-paper, and AI voice playback.",
    ],
    imagePath: "/projects/hospital-management.jpg",
    liveUrl: "https://www.abhiyandaily.com/",
    // repoUrl: "https://github.com/arjun-nepali/aarthik-abhiyan"
    is_key_project: true,
  },
  {
    id: 6,
    slug: "resume-extractor",
    date: "2023-06-15",
    title: "Resume Extractor",
    stack: "Django / NLP",
    description: "Automated resume information extraction using NLP.",
    points: [
      "Used spaCy for custom named entity recognition models",
      "Developed Django web app for user interaction",
      "Stored extracted data in SQLite database",
      "Implemented resume-to-job matching with fit scoring",
      "Deployed with Docker containerization",
    ],
    imagePath: "/projects/resume_extraction.png",
    repoUrl: "https://github.com/arjun-nepali/resume-extractor",
  },
  {
    id: 7,
    slug: "multivendor-ecommerce",
    date: "2022-09-20",
    title: "Multivendor Ecommerce",
    stack: "Django",
    description: "Online marketplace with multiple vendors.",
    points: [
      "Integrated Khalti payment gateway",
      "Managed vendor accounts and product listings",
      "Implemented shopping cart functionality",
      "Developed order management system",
      "Built with Django and MySQL",
    ],
    imagePath: "/projects/multivendor_ecommerce.png",
    repoUrl: "https://github.com/arjun-nepali/multivendor-ecommerce",
  },
  {
    id: 8,
    slug: "hospital-management-system",
    date: "2021-04-12",
    title: "Hospital Management System",
    stack: "Django",
    description: "Web application for hospital administration.",
    points: [
      "Doctor and patient management system",
      "Online appointment booking feature",
      "User authentication and authorization",
      "Developed with Django framework",
      "Responsive web interface",
    ],
    imagePath: "/projects/hospital-management.jpg",
    repoUrl: "https://github.com/arjun-nepali/hospital-management-system",
  },
  {
    id: 9,
    slug: "ukaalo-news-platform",
    date: "2025-03-01",
    title: "Ukaalo News Platform",
    stack: "Django / DRF / CMS",
    description:
      "Digital news platform with dynamic CMS, content workflows, and scalable publishing features.",
    points: [
      "Built and maintained a role-based CMS for content publishing and media management.",
      "Implemented dynamic category, tag, and article management workflows.",
      "Optimized backend APIs and database queries for high-traffic news delivery.",
      "Developed scalable publishing features with editor and reporter workflows.",
    ],
    imagePath: "/projects/ukaalo.jpg",
    liveUrl: "https://www.ukaalo.com/",
    is_key_project: true,
  },
  {
    id: 10,
    slug: "new-business-age",
    date: "2025-02-01",
    title: "New Business Age",
    stack: "Django / DRF / CMS",
    description:
      "Business news and magazine platform with scalable CMS and content management tools.",
    points: [
      "Developed and enhanced CMS features for business news publishing.",
      "Implemented article scheduling, media handling, and role-based workflows.",
      "Built scalable backend APIs for content delivery and management.",
      "Improved platform performance and maintainability for editorial operations.",
    ],
    imagePath: "/projects/new-business-age.jpg",
    liveUrl: "https://www.newbusinessage.com/",
    is_key_project: true,
  },

  {
    id: 11,
    slug: "giwms-government-system",
    date: "2025-01-01",
    title: "GIWMS Government System",
    stack: "Django / Multi-Tenant",
    description:
      "Multi-tenant government management system serving nationwide administrative operations.",
    points: [
      "Maintained and developed features for a government platform serving office,manicipality,and ward levels.",
      "Implemented scalable multi-tenant architecture and role-based access control.",
      "Optimized backend performance and database operations for large-scale usage.",
      "Developed APIs and workflows for administrative and reporting systems.",
    ],
    imagePath: "/projects/giwms.jpg",
    is_key_project: true,
  },
  {
    id: 12,
    slug: "bikashnews-platform",
    date: "2024-12-01",
    title: "BikashNews Platform",
    stack: "Django / DRF / CMS",
    description:
      "Online news portal with scalable CMS and dynamic publishing workflows.",
    points: [
      "Developed backend APIs and CMS modules for article publishing.",
      "Implemented category, media, and user management systems.",
      "Optimized content delivery and backend performance.",
      "Built role-based workflows for editors and reporters.",
    ],
    imagePath: "/projects/bikashnews.jpg",
    liveUrl: "https://bikashnews.com/",
      is_key_project: true,
    },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getProjectsSortedByDateDesc(): PortfolioProject[] {
  return [...portfolioProjects].sort((a, b) => b.date.localeCompare(a.date));
}

function resumeMetaLine(p: PortfolioProject): string {
  const year = p.date.slice(0, 4);
  const thisYear = String(new Date().getFullYear());
  const when = year >= thisYear ? "Present" : year;
  return `${p.stack} · ${when}`;
}

/** Projects with `is_key_project: true`, newest first — `/myresume` “Key software projects”. */
export function getKeyProjectsForResume(): ResumeProject[] {
  return [...portfolioProjects]
    .filter((p) => p.is_key_project === true)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => ({
      title: p.title,
      meta: resumeMetaLine(p),
      bullets: p.points,
      slug: p.slug,
    }));
}
