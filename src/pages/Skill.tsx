import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { Reveal } from "../components/Reveal";
import skills from "../data/skills";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  if (loading) return <Preloader />;
  return (
    <main className="flex-1 flex flex-col ">
      <section
        id="backend"
        className="prose max-w-none pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2"
      >
        <Reveal index={1}>
          <h2 className="text-2xl font-bold leading-9">Backend</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {skills.backend.map((skill, index) => (
            <div key={index} className="mb-2">
              <Reveal index={2 + index}>
                <div className="flex rounded-lg bg-card text-card-foreground p-3 text-left w-full">
                  <div className="flex-none">
                    <div
                      className="relative flex shrink-0 overflow-hidden rounded-full bg-muted-background m-auto size-12 border border-gray-300 dark:border-gray-700"
                      data-avatar-root=""
                    >
                      <img
                        src={skill.icon}
                        alt="Prima Cipta Teknologi."
                        className="aspect-square h-full w-full object-contain bg-white p-2"
                      />{" "}
                    </div>
                  </div>{" "}
                  <div className="group ml-4 flex flex-grow items-center justify-between ">
                    <h3 className="inline-flex items-center justify-center text-md font-semibold leading-none sm:text-sm">
                      {skill.name}
                    </h3>{" "}
                    <div className="text-right text-sm font-bold ">
                      {skill.level}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <section
        id="frontend"
        className="prose max-w-none pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2"
      >
        <Reveal index={2}>
          <h2 className="text-2xl font-bold leading-9">Frontend</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {skills.frontend.map((skill, index) => (
            <div key={index} className="mb-2">
              <Reveal index={3 + index}>
                <div className="flex rounded-lg bg-card text-card-foreground p-3 text-left w-full">
                  <div className="flex-none">
                    <div
                      className="relative flex shrink-0 overflow-hidden rounded-full bg-muted-background m-auto size-12 border border-gray-300 dark:border-gray-700"
                      data-avatar-root=""
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="aspect-square h-full w-full object-contain bg-white p-2"
                      />{" "}
                    </div>
                  </div>{" "}
                  <div className="group ml-4 flex flex-grow  items-center justify-between ">
                    <h3 className="inline-flex items-center justify-center text-md font-semibold leading-none sm:text-sm">
                      {skill.name}
                    </h3>{" "}
                    <div className="text-right text-sm font-bold ">
                      {skill.level}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
