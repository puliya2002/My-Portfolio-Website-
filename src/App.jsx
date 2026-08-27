import React, { useState, useLayoutEffect, useRef } from "react";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { MouseLight } from "./components/MouseMove.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import ContactPage from "./components/ContctPage.jsx";

const SCROLL_STORAGE_KEY = "portfolio:homeScrollY";

function readSavedScrollY() {
  const raw = sessionStorage.getItem(SCROLL_STORAGE_KEY);
  if (raw == null) return window.scrollY;
  const y = Number(raw);
  return Number.isFinite(y) ? y : window.scrollY;
}

function lockPageScroll(scrollY) {
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockPageScroll(scrollY) {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
}

function AppContent({ onNavClick }) {
  const { pathname } = useLocation();
  const isProject = pathname.startsWith("/project/");
  const isContact = pathname === "/contact";
  const showHome = !isContact;
  const savedScrollY = useRef(0);

  useLayoutEffect(() => {
    if (!isProject) return undefined;

    const scrollY = readSavedScrollY();
    savedScrollY.current = scrollY;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    lockPageScroll(scrollY);

    return () => {
      unlockPageScroll(savedScrollY.current);
      sessionStorage.removeItem(SCROLL_STORAGE_KEY);
    };
  }, [isProject]);

  return (
    <>
      <MouseLight />

      {showHome && (
        <div
          className={isProject ? "pointer-events-none select-none" : undefined}
          aria-hidden={isProject}
        >
          <Home onNavClick={onNavClick} />
          {!isProject && (
            <Footer onNavClick={onNavClick} className="overflow-hidden" />
          )}
        </div>
      )}

      <Routes>
        <Route path="/" element={null} />
        <Route
          path="/project/:slug"
          element={
            <div className="fixed inset-0 z-50 overflow-y-auto overscroll-y-contain bg-black">
              <ProjectPage />
            </div>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

const App = () => {
  const [currentSection, setCurrentSection] = useState("");

  const handleNavClick = (section) => {
    setCurrentSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <AppContent onNavClick={handleNavClick} />
    </BrowserRouter>
  );
};

export default App;
