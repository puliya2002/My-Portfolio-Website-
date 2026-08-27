import React, { useEffect, useRef, useState, useCallback } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Drawers from "./Drawers";

function NavBar(props) {
  const [open, setOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setScrolled(currentScrollY > 20);
        setScrollingUp(currentScrollY <= lastScrollY.current || currentScrollY === 0);
        lastScrollY.current = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden={!open}
      />

      <Drawers
        open={open}
        onClose={closeDrawer}
        onNavClick={props.onNavClick}
      />

      <nav
        className={`z-30 fixed w-full transition-transform duration-300 ${
          scrollingUp ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-black/70 backdrop-blur-lg border-b border-white/[0.06] shadow-lg shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-5">
          <a href="/" className="flex items-center gap-2 group">
            <p className="text-[17px] font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
              Pulindu Vidmal
            </p>
          </a>

          <motion.button
            type="button"
            aria-label="Open menu"
            className={`p-2 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-200 ${open ? "opacity-0 pointer-events-none" : "opacity-100"} mt-4 mb-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={openDrawer}
          >
            <BiMenuAltRight className="h-8 w-8 text-gray-200" />
          </motion.button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
