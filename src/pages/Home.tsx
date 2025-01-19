import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { Reveal } from "../components/Reveal";

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
    <main className="flex-1 flex flex-col space-y-10">
      <div className="mx-auto w-full max-w-3xl space-y-8 px-5">
        <div className="flex flex-col justify-between gap-2">
          <section id="header">
            <div className="flex justify-between gap-2">
              <div className="flex flex-1 flex-col space-y-1.5">
                <Reveal index={1}>
                  <h1 className="font-merriweather text-3xl font-extrabold tracking-normal md:text-3xl lg:text-4xl ">
                    Dony Wahyu Ramadhan .
                  </h1>
                </Reveal>{" "}
                <Reveal index={1.5}>
                  <h2 className="font-merriweather text-xl font-thin tracking-normal md:text-3xl lg:text-2xl ">
                    I'm a{" "}
                    <span className="font-extrabold text-[#0aff9d]">
                      Web Developer
                    </span>{" "}
                  </h2>
                </Reveal>{" "}
              </div>{" "}
              <Reveal>
                <div
                  className="relative flex shrink-0 overflow-hidden rounded-full size-36"
                  data-avatar-root=""
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp"
                    data-melt-avatar-image=""
                    data-bits-avatar-image=""
                    alt="Dony Wahyu Ramadhan"
                    className="aspect-square h-full w-full grayscale"
                  />{" "}
                  <span
                    data-melt-avatar-fallback=""
                    data-avatar-fallback=""
                    className="flex h-full w-full items-center justify-center rounded-full bg-muted"
                  >
                    AI
                  </span>
                </div>
              </Reveal>{" "}
            </div>
          </section>
          <section id="about" className="mb-5">
            <Reveal index={3}>
              <p className="mt-5 text-lg font-thin tracking-wide">
                With over four years of experience in the field, I bring a solid
                technical foundation and a passion for solving complex problems.
                My focus is on building reliable, performance-driven systems
                that align with your business objectives.
              </p>
            </Reveal>
          </section>
          <section id="social" className="mb-5">
            <Reveal index={4}>
              <div className="flex items-center gap-4">
                <div className="social-links flex items-center gap-3 ">
                  {" "}
                  <a
                    className="text-sm text-gray-500 transition hover:text-primary "
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/donywahyur"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary  h-8 w-8 iconify iconify--fa6-brands"
                      width="0.97em"
                      height="1em"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2"
                      ></path>
                    </svg>
                  </a>{" "}
                  <a
                    className="text-sm text-gray-500 transition hover:text-primary "
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/dony-w-ramadhan/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary  h-8 w-8 iconify iconify--fa6-brands"
                      width="0.88em"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"
                      ></path>
                    </svg>
                  </a>{" "}
                  <a
                    className="text-sm text-gray-500 transition hover:text-primary "
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/donywr_/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary  h-8 w-8 iconify "
                      width="0.88em"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"
                      ></path>
                    </svg>
                  </a>{" "}
                </div>
              </div>
            </Reveal>
            <Reveal index={5}>
              <div className="flex-none items-center justify-center mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:mt-1 md:mt-1 lg:mt-1">
                  <div className="my-2 grid items-start gap-8">
                    <div className="group relative">
                      <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-[#0aff9d] opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>{" "}
                      <a
                        href="https://"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0aff9d]"
                      >
                        <span className="relative flex items-center divide-x  divide-gray-600 rounded-lg  px-7 py-4 leading-none bg-[#0aff9d]">
                          <span className="flex items-center space-x-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="h-6 w-6 text-black iconify iconify--mdi"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2h7v5h5v11H6zm2 8v2h8v-2zm0 4v2h5v-2z"
                              ></path>
                            </svg>{" "}
                            <span className="text-gray-900 font-bold transition duration-200 tracking-wider">
                              Read CV!&nbsp;→
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </main>
  );
}
