interface Experience {
  company: string;
  position: string;
  date: string;
  duration: string;
  location: string;
  description: string[];
  imageUrl?: string;
}

import { keceImage, mecImage } from "./images";

const experiences: Experience[] = [
  {
    company: "Prima Cipta Teknologi",
    position: "Programmer",
    date: "2020 - Present",
    duration: "4 years +",
    location: "Malang, East Java, Indonesia",
    description: [
      "Reviewed program functionality and made adjustments to align with project objectives, management feedback, and other inputs.",
      "Enhanced programming and software development projects by revising code and optimizing functionality for better performance and user experience",
      "Integrated academic data systems with Feeder Bridge for seamless synchronization and compliance with regulations",
      "Connected software systems with banking services to enable secure and efficient financial transactions",
    ],
  },
  {
    company: "Klinik Malang Eye Center",
    position: "Freelance Programmer",
    date: "2022 - 2024",
    duration: "2 years",
    location: "Malang, East Java, Indonesia",
    imageUrl: mecImage,
    description: [
      "Developed and enhanced existing web-based systems using the CodeIgniter framework",
      "Integrated VClaim BPJS bridging for seamless connectivity with health insurance services",
      "Maintained and updated web-based systems to ensure optimal performance and compliance with user requirements",
    ],
  },
  {
    company: "Klinik Kepanjen Eye Center",
    position: "Freelance Programmer",
    date: "2022 - 2024",
    duration: "2 years",
    location: "Malang, East Java, Indonesia",
    imageUrl: keceImage,
    description: [
      "Developed and enhanced existing web-based systems using the CodeIgniter framework",
      "Integrated VClaim BPJS bridging for seamless connectivity with health insurance services",
      "Maintained and updated web-based systems to ensure optimal performance and compliance with user requirements",
    ],
  },
  {
    company: "Farmstudio Net",
    position: "Freelance Programmer",
    date: "2022 - 2023",
    duration: "1 years +",
    location: "Malang, East Java, Indonesia",
    description: [
      "Designed and developed custom web-based systems tailored to client needs",
      "Integrated third-party APIs and services to enhance functionality and user experience",
      "Provided maintenance and updates for client websites to ensure security, performance, and compatibility with the latest technologies",
      "Collaborated with clients to translate business requirements into scalable and efficient web solutions",
    ],
  },
  {
    company: "Prima Cipta Teknologi",
    position: "Internship Programmer",
    date: "2018 - 2019",
    duration: "1 years",
    location: "Malang, East Java, Indonesia",
    description: [
      "Assisted in developing and maintaining web-based applications using modern programming frameworks.",
      "Collaborated with senior developers to implement new features and fix bugs in existing systems.",
      "Gained hands-on experience in integrating APIs and optimizing application performance",
      "Participated in team discussions to understand project requirements and contribute to technical solutions",
    ],
  },
];

export default experiences;
