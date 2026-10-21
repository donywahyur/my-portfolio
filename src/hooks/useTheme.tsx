import { useState } from "react";

// Dark is the default; index.html applies a saved "light" choice before paint.
export default function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
    setIsDark(next);
  };

  return { isDark, toggle };
}
