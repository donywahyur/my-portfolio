interface Props {
  id: string;
  index: number;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="mb-[88px] scroll-mt-10 last:mb-6">
      <h2 className="mb-5 flex items-center gap-2.5 font-mono text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-soft">
        <span className="size-1.5 rounded-full bg-accent" />
        {String(index).padStart(2, "0")} · {title}
      </h2>
      {children}
    </section>
  );
}
