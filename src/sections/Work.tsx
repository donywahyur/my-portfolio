import Card from "../components/Card";
import ProjectTag from "../components/ProjectTag";
import Section from "../components/Section";
import type { FeaturedProject, Project } from "../data/projects";

interface Props {
  index: number;
  featuredProjects: FeaturedProject[];
  moreProjects: Project[];
}

export default function Work({ index, featuredProjects, moreProjects }: Props) {
  return (
    <Section id="work" index={index} title="Selected Work">
      <div className="relative">
        <p
          aria-hidden="true"
          className="absolute -top-[46px] right-1 m-0 rotate-[4deg] font-hand text-[22px] font-bold text-accent"
        >
          running in production ↓
        </p>
      </div>

      <div className="mb-9 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[22px]">
        {featuredProjects.map((p) => (
          <article
            key={p.name}
            className="flex flex-col overflow-hidden rounded-2xl border-2 border-edge bg-card shadow-hard transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg"
          >
            {p.image ? (
              <div className="border-b-2 border-edge bg-white">
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="block h-[190px] w-full object-cover object-top"
                />
              </div>
            ) : (
              <div
                role="img"
                aria-label={`${p.name} cover`}
                className="flex h-[190px] flex-col justify-between border-b-2 border-edge bg-evergreen px-[22px] pb-[18px] pt-[22px]"
              >
                <span className="origin-left -rotate-2 font-hand text-2xl font-bold text-lime">
                  {p.coverNote}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border-[1.5px] border-lime px-2.5 py-[5px] font-mono text-xs text-[#eef5ee]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-[18px]">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display text-[19px] font-bold tracking-[-0.02em]">{p.name}</h3>
                <ProjectTag tag={p.tag} />
              </div>
              <p className="font-mono text-xs text-ink-faint">{p.stack.join(" · ")}</p>
              <p className="text-[14.5px] leading-[1.55] text-ink-soft">{p.description}</p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mb-1 text-sm font-semibold text-ink-soft">More projects</h3>
      <Card className="mt-3 divide-y divide-line px-6">
        {moreProjects.map((p) => (
          <div key={p.name} className="py-[18px]">
            <div className="flex flex-wrap items-baseline gap-2.5">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-semibold leading-snug hover:text-accent"
                >
                  {p.name}{" "}
                  <span aria-hidden="true" className="text-xs text-ink-faint">
                    ↗
                  </span>
                </a>
              ) : (
                <span className="text-[17px] font-semibold leading-snug">{p.name}</span>
              )}
              <ProjectTag tag={p.tag} />
            </div>
            <p className="mt-1 font-mono text-xs text-ink-faint">{p.stack.join(" · ")}</p>
            <p className="mt-1.5 text-[15px] leading-normal text-ink-soft">{p.description}</p>
          </div>
        ))}
      </Card>
    </Section>
  );
}
