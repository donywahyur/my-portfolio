export interface SkillGroup {
  name: string;
  items: string[];
  primary?: boolean;
}

const skills: SkillGroup[] = [
  {
    name: "Programming Languages",
    items: ["PHP", "JavaScript", "Go Language", "Java Spring Boot"],
    primary: true,
  },
  { name: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { name: "Tools", items: ["Docker", "Git", "Redis", "AWS", "Jenkins"] },
  { name: "Languages", items: ["Indonesian", "English"] },
];

export default skills;
