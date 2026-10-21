import { useRef, useState } from "react";
import type { Profile } from "../data/profile";
import sections from "../data/sections";

interface Props {
  profile: Profile;
  active: string;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Sidebar({ profile, active, isDark, onToggleTheme }: Props) {
  // Changing the key remounts the intro so its animation plays again.
  const [introKey, setIntroKey] = useState(0);
  const lastReplay = useRef(0);

  const replayIntro = () => {
    const now = Date.now();
    if (now - lastReplay.current < 2200) return;
    lastReplay.current = now;
    setIntroKey((k) => k + 1);
  };

  return (
    <aside className="min-w-0 lg:sticky lg:top-14 lg:self-start">
      <div key={introKey} onMouseEnter={replayIntro}>
        <p className="mb-0.5 origin-left -rotate-3 font-hand text-[26px] font-bold text-accent">
          <span className="inline-block animate-write pr-1">hi there, I'm</span>
        </p>
        <h1 className="mb-3 font-display text-[32px] font-bold leading-[1.08] tracking-[-0.03em]">
          {profile.name.split(" ").map((word, i) => (
            <span key={`${word}-${i}`}>
              {i > 0 && " "}
              <span
                className="inline-block animate-rise"
                style={{ animationDelay: `${0.9 + i * 0.15}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <p className="mb-3 text-[15px] leading-normal text-ink-soft">
        {[profile.title, profile.stackLine, profile.years]
          .filter(Boolean)
          .map((part, i) => (
            <span key={part}>
              {i > 0 && <b className="text-accent"> · </b>}
              {part}
            </span>
          ))}
      </p>
      <p className="mb-6 flex items-center gap-2 font-mono text-xs text-ink-soft">
        <span className="size-2 rounded-full bg-[#0aff9d] shadow-[0_0_10px_rgba(10,255,157,0.6)]" />
        {profile.location}
      </p>

      <a
        href={profile.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-[30px] inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-edge bg-lime px-[18px] text-[15px] font-semibold text-[#0a0f0d] shadow-hard-sm transition hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_var(--shadow)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
      >
        Read my CV <span aria-hidden="true">↗</span>
      </a>

      <nav
        aria-label="Sections"
        className="mb-[26px] hidden flex-col gap-0.5 border-t border-dashed border-line-strong pt-[18px] lg:flex"
      >
        {sections.map((s, i) => {
          const on = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={on ? "true" : undefined}
              className={`flex min-h-9 items-center gap-2.5 text-sm transition hover:translate-x-[3px] hover:text-accent ${
                on ? "font-semibold text-accent" : "text-ink-soft"
              }`}
            >
              <span
                className={`w-6 font-mono text-xs font-semibold ${
                  on ? "text-accent" : "text-ink-soft"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
            </a>
          );
        })}
      </nav>

      <div className="flex items-center gap-4 border-t border-dashed border-line-strong pt-[18px] text-[13px] text-ink-soft">
        <a href="#contact" className="py-2.5 hover:text-accent">
          Email
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 hover:text-accent"
        >
          LinkedIn
        </a>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="ml-auto flex size-11 flex-none items-center justify-center rounded-xl border-2 border-edge bg-card text-ink shadow-[2px_2px_0_var(--shadow)]"
        >
          {isDark ? (
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
}
