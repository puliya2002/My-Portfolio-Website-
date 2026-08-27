import React, { useState, useLayoutEffect, useRef, useEffect, lazy, Suspense } from "react";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { MouseLight } from "./components/MouseMove.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

const ProjectPage = lazy(() => import("./components/ProjectPage.jsx"));
const ContactPage = lazy(() => import("./components/ContctPage.jsx"));

const SCROLL_STORAGE_KEY = "portfolio:homeScrollY";
const MIN_LOADER_MS = 400;
const MAX_LOADER_MS = 900;
const CONTACT_LOADER_MS = 550;
const LOADER_EXIT_MS = 450;

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
  const prevPathRef = useRef(pathname);
  const [routeLoading, setRouteLoading] = useState(false);
  const [routeExiting, setRouteExiting] = useState(false);
  const routeTimers = useRef([]);

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

  useEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = pathname;

    if (pathname !== "/contact" || prev === "/contact") return undefined;

    routeTimers.current.forEach((id) => window.clearTimeout(id));
    routeTimers.current = [];

    setRouteExiting(false);
    setRouteLoading(true);

    const exitId = window.setTimeout(() => {
      setRouteExiting(true);
      const hideId = window.setTimeout(() => {
        setRouteLoading(false);
        setRouteExiting(false);
      }, LOADER_EXIT_MS);
      routeTimers.current.push(hideId);
    }, CONTACT_LOADER_MS);

    routeTimers.current.push(exitId);

    return () => {
      routeTimers.current.forEach((id) => window.clearTimeout(id));
      routeTimers.current = [];
    };
  }, [pathname]);

  const showRouteLoader = routeLoading;
  const showContent = !routeLoading || routeExiting;

  return (
    <>
      {showRouteLoader ? <LoadingScreen exiting={routeExiting} /> : null}

      {showContent ? (
        <>
          <MouseLight />

          <div className="relative z-[1]">
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
                    <Suspense fallback={null}>
                      <ProjectPage />
                    </Suspense>
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={null}>
                    <ContactPage />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </>
      ) : null}
    </>
  );
}

const App = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const boot = document.getElementById("boot-loader");
    if (boot) {
      boot.classList.add("is-hidden");
      window.setTimeout(() => boot.remove(), 400);
    }

    const started = performance.now();
    let cancelled = false;
    let finished = false;
    let exitTimer;
    let hideTimer;

    const finish = () => {
      if (cancelled || finished) return;
      finished = true;
      const elapsed = performance.now() - started;
      const wait = Math.max(0, MIN_LOADER_MS - elapsed);
      exitTimer = window.setTimeout(() => {
        if (cancelled) return;
        setLoaderExiting(true);
        setReady(true);
        hideTimer = window.setTimeout(() => {
          if (!cancelled) setShowLoader(false);
        }, LOADER_EXIT_MS);
      }, wait);
    };

    // Don't wait for full window.load (all images) — reveal once fonts + paint are ready
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const nextPaint = new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });

    Promise.all([fontsReady, nextPaint]).then(finish);

    const fallback = window.setTimeout(finish, MAX_LOADER_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const handleNavClick = (section) => {
    if (!section) return;
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      {showLoader ? <LoadingScreen exiting={loaderExiting} /> : null}
      {ready ? <AppContent onNavClick={handleNavClick} /> : null}
    </BrowserRouter>
  );
};

export default App;
