import React from "react";
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";

function Home({ onNavClick }) {
  return (
    <>
      <NavBar onNavClick={onNavClick} />
      <section id="hero" className="overflow-hidden">
        <Hero />
      </section>
      <section id="about" className="overflow-hidden">
        <AboutMe />
      </section>
      <section id="projects" className="overflow-hidden">
        <Projects />
      </section>
      <section id="experience" className="overflow-hidden">
        <Experience />
      </section>
    </>
  );
}

export default Home;
