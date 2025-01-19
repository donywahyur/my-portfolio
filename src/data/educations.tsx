import { kuliahImage, smkImage } from "./images";

interface Education {
  name: string;
  degree: string;
  date: string;
  duration: string;
  major: string;
  location: string;
  imageUrl: string;
}

const educations: Education[] = [
  {
    name: "Institut Teknologi dan Bisnis Asia Malang",
    degree: "Bachelor Degree",
    date: "Sep 2020 - May 2024",
    duration: "3 years 8 months",
    major: "Computer Science",
    location: "Malang, East Java, Indonesia",
    imageUrl: kuliahImage,
  },
  {
    name: "SMKN 4 Malang",
    degree: "High School Diploma",
    date: "Jul 2017 - May 2020",
    duration: "3 years",
    major: "Software Engineering",
    location: "Malang, East Java, Indonesia",
    imageUrl: smkImage,
  },
];

export default educations;
