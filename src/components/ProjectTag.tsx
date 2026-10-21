import type { ProjectTag as Tag } from "../data/projects";

export default function ProjectTag({ tag }: { tag: Tag }) {
  const filled = tag === "live" || tag === "production";
  return (
    <span
      className={`rounded-full px-[9px] py-0.5 font-mono text-[11px] ${
        filled
          ? "border-[1.5px] border-edge bg-lime font-semibold text-[#0a0f0d]"
          : "border border-line-strong text-accent"
      }`}
    >
      {tag}
    </span>
  );
}
