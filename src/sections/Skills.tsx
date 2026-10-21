import Card from "../components/Card";
import Section from "../components/Section";
import type { SkillGroup } from "../data/skills";

export default function Skills({ index, skills }: { index: number; skills: SkillGroup[] }) {
  return (
    <Section id="skills" index={index} title="Skills">
      <Card className="divide-y-2 divide-edge overflow-hidden">
        {skills.map((group, i) => (
          <div
            key={group.name}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 px-[22px] py-5 transition-colors hover:bg-bg-deep"
          >
            <div className="flex w-[170px] flex-none flex-col gap-0.5">
              <span className="font-mono text-xs font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-semibold">{group.name}</span>
            </div>
            <div className="flex min-w-0 flex-[1_1_260px] flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-[13px] py-1.5 font-mono text-[13px] ${
                    group.primary
                      ? "border-accent font-medium text-accent"
                      : "border-line-strong text-ink-soft"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </Section>
  );
}
