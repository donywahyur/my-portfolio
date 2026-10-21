export interface Education {
  name: string;
  degree: string;
  date: string;
  gpa?: string;
}

const educations: Education[] = [
  {
    name: "Institut Teknologi dan Bisnis Asia Malang",
    degree: "Bachelor's degree, Computer Science",
    date: "Sep 2020 — May 2024",
    gpa: "3.84 / 4.00",
  },
];

export default educations;
