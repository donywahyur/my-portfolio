import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Preloader from "./components/Preloader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skill"));
const Projects = lazy(() => import("./pages/Project"));

export default function App() {
  useEffect(() => {
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = "https://matomo.dynodhan.xyz/js/container_CpTGTI43.js";
    s.parentNode.insertBefore(g, s);
  }, []);

  return (
    <div className="flex flex-col relative mx-auto min-h-screen max-w-3xl bg-background px-2 font-sans antialiased xl:max-w-3xl xl:px-0 transition-opacity duration-300">
      <Header />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
      <hr className="border-gray-200 dark:border-gray-700 mt-4"></hr>
      <Footer />
    </div>
  );
}
