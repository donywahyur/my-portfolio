import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Typing Effect Component
const TypingEffect = ({ title }: { title: string }) => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(false);
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [title]);

  return (
    <span className={`typing-effect ${isTyping ? "typing" : ""}`}>
      &nbsp;~/{title}
    </span>
  );
};

export default function Header() {
  const location = useLocation();
  const [headerTitle, setHeaderTitle] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setHeaderTitle(location.pathname.split("/")[1] || "");
  }, [location]);

  return (
    <>
      <header className="pointer-events-none sticky top-0 z-50 mx-auto flex w-full h-8 origin-top mb-24">
        <div className="fixed inset-x-0 top-0 h-32 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="w-max h-[58px] p-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md relative z-50 pointer-events-auto mt-4 mx-auto flex min-h-full min-w-full transform-gpu justify-between gap-0.5 px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] sm:gap-1 md:gap-2 items-center">
          <NavLink to="/">
            <button className="transition-transform transform hover:scale-110 flex h-6 items-center justify-between rounded-xl p-5 font-mono text-xl font-semibold space-x-2">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="md:block h-6 w-6 iconify iconify--fa-solid"
                  width="1.13em"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  {headerTitle === "" ? (
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"
                    ></path>
                  ) : (
                    <path
                      fill="currentColor"
                      d="M88.7 223.8L0 375.8V96c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8m27.6 16.1c5.8-9.9 16.3-15.9 27.7-15.9h400c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2.1-32.1l112-192z"
                    ></path>
                  )}
                </svg>
              </div>{" "}
              <div className="font-mono inline-flex items-center">
                <TypingEffect key={location.pathname} title={headerTitle} />{" "}
                <span className="ml-2 w-[0.4ch] h-[1.1em] animate-blink bg-white "></span>
              </div>
            </button>
          </NavLink>
          <div className="flex items-center text-base leading-5 p-5">
            <div className="hidden sm:flex">
              <NavLink
                to="/about"
                className="horizontal-underline rounded-md py-1 px-3 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                About{" "}
              </NavLink>
              <NavLink
                to="/skills"
                className="horizontal-underline rounded-md py-1 px-3 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                Skills{" "}
              </NavLink>
              <NavLink
                to="/projects"
                className="horizontal-underline rounded-md py-1 px-3 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                Projects{" "}
              </NavLink>
            </div>{" "}
            <div className="sm:hidden">
              <button
                type="button"
                className="ml-1 mr-1 h-8 w-8 rounded py-1"
                aria-label="Toggle Menu"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-gray-900 dark:text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>{" "}
            </div>
          </div>
        </div>
      </header>
      <div className={`flex justify-end sm:hidden`}>
        <div
          className={`fixed top-24 z-50 bg-opacity-50 w-96 origin-top  ${
            !isMenuOpen ? "opacity-0" : ""
          } transform transition-all duration-200 `}
        >
          <div
            className={`w-max p-2 rounded-md border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md relative z-50 pointer-events-auto mx-auto flex min-h-full min-w-full justify-between gap-0.5 px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] sm:gap-1 md:gap-2 items-center  
            `}
          >
            <div className="w-full flex flex-col items-center">
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className="w-full py-1 px-3 font-medium text-gray-100 flex items-center h-12 bg-blue hover:dark:bg-[#0aff9d] hover:dark:text-gray-900 rounded-md"
              >
                About{" "}
              </NavLink>
              <NavLink
                to="/skills"
                onClick={toggleMenu}
                className="w-full py-1 px-3 font-medium text-gray-100 flex items-center h-12 bg-blue hover:dark:bg-[#0aff9d] hover:dark:text-gray-900 rounded-md"
              >
                Skill{" "}
              </NavLink>
              <NavLink
                to="/projects"
                onClick={toggleMenu}
                className="w-full py-1 px-3 font-medium text-gray-100 flex items-center h-12 bg-blue hover:dark:bg-[#0aff9d] hover:dark:text-gray-900 rounded-md"
              >
                Project{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
