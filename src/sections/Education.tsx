import Card from "../components/Card";
import Section from "../components/Section";
import type { Education as EducationItem } from "../data/educations";

interface Props {
  index: number;
  educations: EducationItem[];
}

export default function Education({ index, educations }: Props) {
  return (
    <Section id="education" index={index} title="Education">
      <Card className="divide-y divide-line px-6">
        {educations.map((edu) => (
          <div key={edu.name} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-[22px]">
            <div className="w-[150px] flex-none whitespace-nowrap pt-[3px] font-mono text-xs text-ink-faint">
              {edu.date}
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-2 text-base font-semibold leading-snug">
                {edu.name}
                {edu.gpa && (
                  <span className="rounded-full border-[1.5px] border-edge bg-lime px-[9px] py-0.5 font-mono text-[11px] font-semibold text-[#0a0f0d]">
                    GPA {edu.gpa}
                  </span>
                )}
              </p>
              <p className="mt-1 text-[15px] text-ink-soft">{edu.degree}</p>
            </div>
          </div>
        ))}
      </Card>
    </Section>
  );
}
