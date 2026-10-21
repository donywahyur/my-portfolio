import type { ProjectTag as Tag } from "../data/projects";

// "live" and "production" are the default state of a project, so only the
// exceptions (private, open source, thesis) get a tag.
const HIDDEN: Tag[] = ["live", "production"];

export default function ProjectTag({ tag }: { tag: Tag }) {
  if (HIDDEN.includes(tag)) return null;
  return (
    <span className="rounded-full border border-line-strong px-[9px] py-0.5 font-mono text-[11px] text-accent">
      {tag}
    </span>
  );
}
