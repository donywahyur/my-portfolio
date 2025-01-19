import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { Reveal } from "../components/Reveal";
import educations from "../data/educations";
import experiences from "../data/experiences";
import { companyImage } from "../data/images";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Preloader />;

  return (
    <main>
      <section
        id="about"
        className="prose max-w-none pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2"
      >
        <Reveal index={3}>
          <h2 className="text-2xl font-bold leading-9">Hello!</h2>
        </Reveal>
        <Reveal index={4}>
          <p className="mb-5 font-thin tracking-normal">
            My name is Dony Wahyu Ramadhan, and I am a skilled web developer
            with over 4 years of experience in software development. I have
            focused my career on creating efficient and scalable web
            applications that drive impactful software solutions
          </p>
        </Reveal>
        <Reveal index={5}>
          <p className="mb-5 font-thin tracking-normal">
            Currently, I am working as a Web Developer at Prima Cipta
            Technology, where I collaborate with team members and contribute to
            the development of academic systems for universities across
            Indonesia. My work focuses on creating scalable and efficient
            solutions that streamline academic operations and enhance the
            educational experience.
          </p>
        </Reveal>
        <Reveal index={6}>
          <p className="mb-5 font-thin tracking-normal">
            In addition to my role at Prima Cipta Technology, I also create
            freelance web projects, delivering tailored solutions that cater to
            diverse client needs. This allows me to explore a wide range of
            technologies and industries, further honing my skills as a web
            developer
          </p>
        </Reveal>
        <Reveal index={7}>
          <p className="font-thin tracking-normal">
            I am deeply committed to advancing technology and look forward to
            opportunities to innovate and drive impactful projects. Thank you
            for taking the time to get to know me!
          </p>
        </Reveal>
      </section>
      <section
        id="experience"
        className="prose max-w-none  text-sm dark:prose-dark md:text-lg xl:col-span-2"
      >
        <Reveal index={1}>
          <h2 className="text-2xl font-bold leading-9">Experience</h2>
        </Reveal>
        {experiences.map((experience, index) => (
          <Reveal index={2 + index} key={index}>
            <div className="flex rounded-lg bg-card text-card-foreground p-3 text-left w-full mb-4">
              <div className="flex-none">
                <div
                  className="relative flex shrink-0 overflow-hidden rounded-full bg-muted-background m-auto size-12 border border-gray-300 dark:border-gray-700"
                  data-avatar-root=""
                >
                  <img
                    src={experience.imageUrl || companyImage}
                    alt={experience.company}
                    className="aspect-square h-full w-full object-contain bg-white"
                  />{" "}
                </div>
              </div>{" "}
              <div className="group ml-4 flex-grow flex-col items-center">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center text-md font-semibold leading-none tracking-wide">
                      {experience.company}.{" "}
                    </h3>{" "}
                    <div className="text-right text-md tabular-nums text-muted-foreground ">
                      {experience.date}
                    </div>
                  </div>{" "}
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <div className="font-sans text-md">
                      {experience.position}
                    </div>{" "}
                    <div className="text-right text-md text-muted-foreground">
                      {experience.duration}
                    </div>
                  </div>{" "}
                  <div className="font-sans text-sm">{experience.location}</div>
                </div>{" "}
                <div className="mt-2 text-sm ">
                  <ul>
                    {experience.description.map((description, index) => (
                      <li key={index}>- {description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <section
        id="eduucation"
        className="prose max-w-none pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2"
      >
        <Reveal index={1}>
          <h2 className="text-2xl font-bold leading-9">Education</h2>
        </Reveal>
        {educations.map((education, index) => (
          <Reveal index={2 + index} key={index}>
            <div className="flex rounded-lg bg-card text-card-foreground p-3 text-left w-full mb-4">
              <div className="flex-none">
                <div
                  className="relative flex shrink-0 overflow-hidden rounded-full bg-muted-background m-auto size-12 border border-gray-300 dark:border-gray-700"
                  data-avatar-root=""
                >
                  <img
                    src={education.imageUrl}
                    alt={education.name}
                    className="aspect-square h-full w-full object-contain bg-white"
                  />{" "}
                </div>
              </div>{" "}
              <div className="group ml-4 flex-grow flex-col items-center">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center text-md font-semibold leading-none ">
                      {education.name}.{" "}
                    </h3>{" "}
                    <div className="text-right text-md tabular-nums text-muted-foreground sm:text-sm">
                      {education.date}
                    </div>
                  </div>{" "}
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <div className="font-sans text-md">
                      {education.degree}{" "}
                      <span className="font-semibold">
                        {" "}
                        ( {education.major} )
                      </span>
                    </div>{" "}
                    <div className="text-right text-md text-muted-foreground">
                      {education.duration}
                    </div>
                  </div>{" "}
                  <div className="font-sans text-sm">{education.location}</div>
                </div>{" "}
                <div className="mt-2 text-sm "></div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
