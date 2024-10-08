import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import { motion } from "framer-motion";
import Footer from "./components/Footer.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrjectPage from "./components/ProjectPage.jsx";
import ContctPage from "./components/ContctPage.jsx";

const App = () => {
  const [currentSection, setCurrentSection] = useState("");

  const handleNavClick = (section) => {
    setCurrentSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div>
      
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar onNavClick={handleNavClick} />
                <section id="hero" className="overflow-hidden">
                  <Hero />
                </section>
                <section id="about" className="overflow-hidden">
                  <AboutMe />
                </section>
                <section id="projects" className="overflow-hidden">
                  <Projects />
                </section>
                {/* <div className="overflow-hidden ">
                  <motion.div
                    className="absolute z-0 w-[65%] sm:w-[35%] h-[100%] sm:h-[50%] top-0 left-0 bg-gradient-to-bl from-blue-500/90 to-blue-900/40 rounded-full blur-[150px]"
                    animate={{ x: ["-20%", "200%", "-20%"] }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                </div> */}
                {/* <div className=" overflow-hidden">
                  <motion.div
                    className="absolute z-0 w-[65%] sm:w-[35%] h-[100%] sm:h-[50%] bottom-[-220%] sm:bottom-[-50%] left-0 bg-gradient-to-bl from-blue-500/50 to-blue-900/40 rounded-full blur-[200px] "
                    animate={{ x: ["200%", "-20%", "200%"] }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                </div> */}
              </>
            }
          />
          <Route path="/project/:id" element={<PrjectPage />} />
          <Route path="/contact" element={<ContctPage />} />
        </Routes>
        <Footer onNavClick={handleNavClick} className="overflow-hidden" />
      </div>
    </BrowserRouter>
  );
};

export default App;
