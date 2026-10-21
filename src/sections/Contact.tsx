import { useState } from "react";
import Section from "../components/Section";

const inputClass =
  "rounded-[10px] border-2 border-edge bg-bg px-3.5 text-[15px] text-ink placeholder:text-ink-faint";

export default function Contact({ index, email }: { index: number; email: string }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  };

  // No backend: hand the message to the visitor's mail app.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${from ? ` (${from})` : ""}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" index={index} title="Get in Touch">
      <p className="mb-[18px] font-display text-[clamp(22px,2.6vw,28px)] leading-[1.35] tracking-[-0.02em]">
        Need a backend that scales, or an integration that just works? Let's talk.
      </p>

      <div className="mb-7 flex flex-wrap items-center gap-2.5">
        <a
          href={`mailto:${email}`}
          className="py-3 font-mono text-[15px] underline underline-offset-4 hover:text-accent"
        >
          {email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="min-h-11 rounded-[10px] border-2 border-edge bg-card px-4 text-sm font-semibold text-ink shadow-hard-sm transition hover:-translate-x-px hover:-translate-y-px active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4 rounded-[18px] border-2 border-edge bg-card p-6 shadow-[6px_6px_0_var(--shadow)]"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-name" className="text-sm font-semibold">
            Name
          </label>
          <input id="f-name" name="name" type="text" required placeholder="Your name" className={`${inputClass} min-h-[46px]`} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-email" className="text-sm font-semibold">
            Email
          </label>
          <input id="f-email" name="email" type="email" placeholder="you@company.com" className={`${inputClass} min-h-[46px]`} />
        </div>
        <div className="col-span-full flex flex-col gap-1.5">
          <label htmlFor="f-msg" className="text-sm font-semibold">
            Message
          </label>
          <textarea id="f-msg" name="message" rows={4} required placeholder="Tell me about the project" className={`${inputClass} resize-y py-3`} />
        </div>
        <div className="col-span-full flex flex-wrap items-center justify-between gap-3">
          <span className="font-hand text-[22px] font-bold text-accent">let's build something solid</span>
          <button
            type="submit"
            className="min-h-12 rounded-xl border-2 border-edge bg-lime px-[22px] text-[15px] font-bold text-[#0a0f0d] shadow-hard-sm transition hover:-translate-x-px hover:-translate-y-px active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Send message →
          </button>
        </div>
      </form>
    </Section>
  );
}
