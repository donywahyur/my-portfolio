import Section from "../components/Section";
import type { Profile, RichParagraph } from "../data/profile";

interface Props {
  index: number;
  profile: Profile;
}

// "**…**" in the lede marks the highlighted phrase.
function Lede({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/).map((part, i) =>
        i % 2 === 1 ? (
          <span
            key={i}
            className="inline-block -rotate-[1.2deg] rounded-lg border-2 border-edge bg-lime px-2 text-[#0a0f0d] shadow-hard-sm"
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

function Paragraph({ paragraph }: { paragraph: RichParagraph }) {
  return (
    <p className="mb-3.5 text-pretty text-[17px] leading-[1.65] text-ink-soft last:mb-0">
      {paragraph.children.map((run, i) => {
        let node: React.ReactNode = run.text;
        if (run.bold) node = <b className="font-semibold text-ink">{node}</b>;
        if (run.italic) node = <em>{node}</em>;
        if (run.url)
          node = (
            <a href={run.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">
              {node}
            </a>
          );
        return <span key={i}>{node}</span>;
      })}
    </p>
  );
}

export default function About({ index, profile }: Props) {
  return (
    <Section id="about" index={index} title="About">
      <p className="mb-[18px] text-pretty font-display text-[clamp(22px,2.6vw,28px)] leading-[1.4] tracking-[-0.02em]">
        <Lede text={profile.aboutLede} />
      </p>
      {profile.aboutBody.map((p, i) => (
        <Paragraph key={i} paragraph={p} />
      ))}
    </Section>
  );
}
