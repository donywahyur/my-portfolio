import Card from "../components/Card";
import Section from "../components/Section";
import type { Experience as ExperienceItem } from "../data/experiences";

interface Props {
  index: number;
  experiences: ExperienceItem[];
}

export default function Experience({ index, experiences }: Props) {
  return (
    <Section id="experience" index={index} title="Experience">
      <Card className="divide-y divide-line px-6">
        {experiences.map((xp) => (
          <div
            key={`${xp.company}-${xp.date}`}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-[22px]"
          >
            <div className="w-[150px] flex-none whitespace-nowrap pt-[3px] font-mono text-xs text-ink-faint">
              {xp.date}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-base font-semibold leading-snug">
                {xp.company} <span className="font-normal text-ink-soft">— {xp.position}</span>
              </p>
              <ul className="ml-[18px] mt-2 list-disc text-[14.5px] leading-[1.55] text-ink-soft">
                {xp.highlights.map((h) => (
                  <li key={h} className="mb-1">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Card>
    </Section>
  );
}
