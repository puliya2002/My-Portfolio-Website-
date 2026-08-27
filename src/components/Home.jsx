import React, { Suspense, lazy } from "react";
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";

const AboutMe = lazy(() => import("./AboutMe.jsx"));
const Projects = lazy(() => import("./Projects.jsx"));
const Experience = lazy(() => import("./Experience.jsx"));

function Home({ onNavClick }) {
  return (
    <>
      <NavBar onNavClick={onNavClick} />
      <section id="hero" className="overflow-hidden">
        <Hero />
      </section>
      <Suspense fallback={null}>
        <section id="about" className="overflow-hidden">
          <AboutMe />
        </section>
        <section id="projects" className="overflow-hidden">
          <Projects />
        </section>
        <section id="experience" className="overflow-hidden">
          <Experience />
        </section>
      </Suspense>
    </>
  );
}

export default Home;
