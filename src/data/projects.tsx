import siakadImage from "../assets/projects/siakad.png";
import simrsImage from "../assets/projects/mec.png";

export type ProjectTag = "production" | "live" | "private" | "open source" | "thesis";

export interface FeaturedProject {
  name: string;
  tag: ProjectTag;
  stack: string[];
  description: string;
  image?: string;
  // Shown instead of a screenshot when there is no image.
  coverNote?: string;
}

export interface Project {
  name: string;
  tag: ProjectTag;
  stack: string[];
  description: string;
  link?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Jobseeker App & Partners",
    tag: "production",
    stack: ["Java", "MongoDB", "Redis", "AWS"],
    description:
      "Mobile-first social recruitment platform helping Indonesian SMEs source, match and hire talent in-app.",
    coverNote: "hiring for Indonesian SMEs",
  },
  {
    name: "Jobseeker HCMS",
    tag: "production",
    stack: ["NestJS", "PostgreSQL", "Redis", "gRPC"],
    description:
      "Enterprise HR technology platform providing end-to-end Human Capital Management software for web and mobile.",
    coverNote: "end-to-end HR platform",
  },
  {
    name: "SIAKAD",
    tag: "live",
    stack: ["CodeIgniter", "MySQL", "JavaScript", "REST API"],
    description:
      "Academic information system for universities, integrating academic management with a banking system for tuition.",
    image: siakadImage,
  },
  {
    name: "SIMRS",
    tag: "live",
    stack: ["CodeIgniter", "MySQL", "JavaScript", "REST API"],
    description:
      "Eye hospital management system: patient registration, appointments, medical records and billing.",
    image: simrsImage,
  },
];

export const moreProjects: Project[] = [
  {
    name: "Feeder Bridge",
    tag: "private",
    stack: ["Laravel", "MySQL", "Redis", "Tailwind CSS"],
    description:
      "Middleware syncing a university's SIAKAD with Neo Feeder, the Ministry of Education's central data system.",
  },
  {
    name: "SiPoint Desktop",
    tag: "private",
    stack: ["Java", "REST API"],
    description:
      "PPOB bill-payment desktop app for PT Teleanjar Mitra Global, connected to multiple service providers.",
  },
  {
    name: "HEXAM",
    tag: "live",
    stack: ["CodeIgniter", "MySQL", "JavaScript"],
    description: "Exam platform for teachers and students with question banks and scheduled quizzes.",
    link: "https://hexam.kimedaka.com",
  },
  {
    name: "NIHR",
    tag: "live",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    description: "Budgeting system for doctors managing funds for medical research projects.",
    link: "https://nihr.siakad.net",
  },
  {
    name: "LIMS — PT. JX Nippon",
    tag: "private",
    stack: ["CodeIgniter", "MySQL"],
    description: "Lab information system for oil manufacturing: production, raw materials and quality.",
  },
  {
    name: "SignMate",
    tag: "open source",
    stack: ["Flutter", "Python", "Firebase"],
    description: "Translates sign-language gestures into written letters. Hackfest project.",
    link: "https://github.com/donywahyur/hackfest_signmate",
  },
  {
    name: "SPHA",
    tag: "thesis",
    stack: ["Python", "Flask", "React"],
    description: "Chicken price prediction with a GRU model.",
    link: "https://github.com/donywahyur/TUGAS-AKHIR",
  },
  {
    name: "Larazillow",
    tag: "open source",
    stack: ["Laravel", "Vue", "MySQL"],
    description: "Land bidding platform with listings and bid tracking.",
    link: "https://github.com/donywahyur/larazillow11",
  },
  {
    name: "Startup Project",
    tag: "open source",
    stack: ["Go", "Nuxt 3", "Docker"],
    description: "Crowdfunding API for new businesses and community causes.",
    link: "https://github.com/donywahyur/go_startup_api",
  },
  {
    name: "Restaurant API",
    tag: "open source",
    stack: ["Go", "PostgreSQL", "Docker"],
    description: "REST API for restaurant data and operations.",
    link: "https://github.com/donywahyur/go-restaurant-app",
  },
  {
    name: "Social App",
    tag: "open source",
    stack: ["Go", "PostgreSQL", "Docker"],
    description: "Social network backend: profiles, posts and comments.",
    link: "https://github.com/donywahyur/go_social_app",
  },
];
