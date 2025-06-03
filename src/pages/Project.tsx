import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import projects from "../data/projects";
import { Reveal } from "../components/Reveal";

export default function Projects() {
    const [loading, setLoading] = useState(true);
    const [newProjects, setNewProjects] = useState(projects);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const openModal = (src: string) => {
        setImageSrc(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const sortProjects = (order: "newest" | "oldest") => {
        const sortedProjects = [...projects];
        if (order === "newest") {
            sortedProjects.sort(
                (a, b) => projects.indexOf(b) - projects.indexOf(a)
            );
        } else {
            sortedProjects.sort(
                (a, b) => projects.indexOf(a) - projects.indexOf(b)
            );
        }
        setNewProjects(sortedProjects);
    };

    useEffect(() => {
        sortProjects("newest");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 10);
    }, []);

    if (loading) return <Preloader />;
    return (
        <main className="flex-1 flex flex-col ">
            <section className="prose max-w-none pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2">
                <Reveal index={1}>
                    <div className="flex justify-between ">
                        <h2 className="text-2xl font-bold leading-9">
                            Projects throught out my career
                        </h2>
                        <p className="text-right leading-9">
                            <select
                                onChange={(e) =>
                                    sortProjects(e.target.value as any)
                                }
                                className="border border-gray-300 dark:border-gray-700 rounded-md p-2"
                            >
                                <option value={"newest"} defaultChecked>
                                    Newest
                                </option>
                                <option value={"oldest"}>Oldest</option>
                            </select>
                        </p>
                    </div>
                </Reveal>
                <div className="gap-4">
                    {newProjects.map((project, index) => (
                        <div key={index} className="mb-2">
                            <Reveal index={1 + 0.5 * index} key={index}>
                                <div className="flex sm:flex-row flex-col rounded-lg bg-card text-card-foreground p-3 text-left w-full mb-4">
                                    <div className="flex-none">
                                        <div
                                            className="relative flex shrink-0 overflow-hidden rounded-md bg-muted-background m-auto sm:w-60 sm:h-40 w-full h-auto border border-gray-300 dark:border-gray-700 mb-2"
                                            data-avatar-root=""
                                        >
                                            <img
                                                onClick={() => {
                                                    openModal(project.image);
                                                }}
                                                src={project.image}
                                                alt={project.name}
                                                className="aspect-square h-full w-full object-contain bg-white"
                                            />{" "}
                                        </div>
                                    </div>
                                    <div className="group ml-4 flex-grow flex-col items-center">
                                        <div className="flex flex-col">
                                            <div className="flex items-center justify-between gap-x-2 text-base">
                                                <h3 className="inline-flex items-center justify-center text-md font-semibold leading-none tracking-wide">
                                                    {project.name}.{" "}
                                                </h3>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                        <div className="mt-2 text-sm font-thin">
                                            <p>{project.description}</p>
                                        </div>
                                        <div className="mt-2">
                                            {project.techs.map(
                                                (tech, techIndex) => (
                                                    <Reveal
                                                        index={
                                                            2 +
                                                            0.5 *
                                                                index *
                                                                techIndex
                                                        }
                                                    >
                                                        <span
                                                            key={techIndex}
                                                            className="mr-2 text-[10px] bg-slate-500 border border-slate-600 px-2 py-1 rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    </Reveal>
                                                )
                                            )}
                                        </div>
                                        {project.link && (
                                            <div className="mt-2">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <button className="border border-gray-300 dark:border-gray-700 rounded-md text-[12px] px-2 hover:bg-gray-200 hover:text-gray-700">
                                                        See
                                                    </button>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                    <Reveal index={newProjects.length + 2}>
                        <div className="text-center">
                            <a
                                href="https://github.com/donywahyur"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="border border-gray-300 dark:border-gray-700 rounded-md p-2">
                                    See More
                                </button>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
            {isModalOpen && (
                <div
                    className="fixed bg-black inset-0 z-[300] bg-opacity-80 flex justify-center items-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white relative max-w-4xl w-full  flex justify-center items-center"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                        <img
                            src={imageSrc}
                            alt="Preview"
                            className="w-auto max-w-full h-auto max-h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
