export interface SectionLink {
  id: string;
  label: string;
}

const sections: SectionLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Get in Touch" },
];

export default sections;
