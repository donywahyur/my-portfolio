/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Stack Sans Headline"', '"Avenir Next"', '"Segoe UI"', "sans-serif"],
        sans: ['"Stack Sans Text"', '"Avenir Next"', '"Segoe UI"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        hand: ["Caveat", "cursive"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-deep": "var(--bg-deep)",
        card: "var(--card)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        edge: "var(--edge)",
        accent: "var(--accent)",
        lime: "var(--lime)",
        evergreen: "var(--evergreen)",
      },
      boxShadow: {
        hard: "5px 5px 0 var(--shadow)",
        "hard-sm": "3px 3px 0 var(--shadow)",
        "hard-lg": "7px 7px 0 var(--shadow)",
      },
      keyframes: {
        write: {
          from: { clipPath: "inset(0 100% 0 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        write: "write 1.3s cubic-bezier(.6,.1,.3,1) .35s both",
        rise: "rise .7s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};
