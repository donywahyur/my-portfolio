export interface Experience {
  company: string;
  position: string;
  date: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Jobseeker Company",
    position: "Backend Engineer",
    date: "Oct 2025 — Now",
    highlights: [
      "Design and build scalable microservices with clean architecture and SOLID, exposing gRPC and REST APIs",
      "Built event-driven systems on Redis Streams, AWS EventBridge and SNS/SQS (Lambda, EC2) for sub-second message processing",
      "Integrated Indomaret, DANA, Gojek and TikTok using the Backend-for-Frontend pattern",
      "Added Testcontainers integration test suites to CI/CD, cutting deployment regressions",
    ],
  },
  {
    company: "Prima Cipta Teknologi",
    position: "Web Developer",
    date: "May 2020 — Oct 2025",
    highlights: [
      "Improved performance through code revisions, query optimization and faster page loads",
      "Integrated academic data with Feeder Bridge for ministry compliance",
      "Connected campus systems with banking services for secure financial transactions",
    ],
  },
  {
    company: "Kepanjen Eye Center",
    position: "Freelance Web Developer",
    date: "2022 — 2024",
    highlights: [
      "Built and extended the clinic system on CodeIgniter",
      "Integrated VClaim BPJS bridging for health insurance services",
    ],
  },
  {
    company: "Malang Eye Center",
    position: "Freelance Web Developer",
    date: "2022 — 2024",
    highlights: [
      "Built and extended the clinic system on CodeIgniter",
      "Integrated VClaim BPJS bridging for health insurance services",
    ],
  },
  {
    company: "Farmstudio Net",
    position: "Freelance Web Developer",
    date: "2021 — 2022",
    highlights: [
      "Built custom web systems tailored to client needs",
      "Integrated third-party services such as banking systems and RajaOngkir",
    ],
  },
];

export default experiences;
