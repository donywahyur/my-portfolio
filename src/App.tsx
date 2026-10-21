import Sidebar from "./components/Sidebar";
import sections from "./data/sections";
import usePortfolioContent from "./hooks/usePortfolioContent";
import useScrollSpy from "./hooks/useScrollSpy";
import useTheme from "./hooks/useTheme";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

const sectionIds = sections.map((s) => s.id);

export default function App() {
  const content = usePortfolioContent();
  const active = useScrollSpy(sectionIds);
  const { isDark, toggle } = useTheme();

  return (
    <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 px-7 pt-[clamp(40px,6vw,72px)] lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-x-[clamp(40px,7vw,88px)]">
      <Sidebar profile={content.profile} active={active} isDark={isDark} onToggleTheme={toggle} />
      <main className="min-w-0 pb-[72px]">
        <About index={1} profile={content.profile} />
        <Skills index={2} skills={content.skills} />
        <Experience index={3} experiences={content.experiences} />
        <Work
          index={4}
          featuredProjects={content.featuredProjects}
          moreProjects={content.moreProjects}
        />
        <Education index={5} educations={content.educations} />
        <Contact index={6} email={content.profile.email} />
      </main>
    </div>
  );
}
