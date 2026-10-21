import { useEffect, useState } from "react";
import { fetchPortfolio, type PortfolioContent } from "../api/strapi";
import educations from "../data/educations";
import experiences from "../data/experiences";
import profile from "../data/profile";
import { featuredProjects, moreProjects } from "../data/projects";
import skills from "../data/skills";

// Built-in copy of the content: shown on first paint and kept if Strapi
// is down, slow or returns an error.
const fallback: PortfolioContent = {
  profile,
  skills,
  experiences,
  featuredProjects,
  moreProjects,
  educations,
};

const TIMEOUT_MS = 8000;

export default function usePortfolioContent() {
  const [content, setContent] = useState<PortfolioContent>(fallback);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    let unmounted = false;

    fetchPortfolio(controller.signal)
      .then(setContent)
      .catch((err) => {
        if (!unmounted) console.warn("Strapi unavailable, using built-in content:", err);
      })
      .finally(() => clearTimeout(timer));

    return () => {
      unmounted = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return content;
}
