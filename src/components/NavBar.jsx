import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Drawers from "./Drawers";

function NavBar(props) {
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 20);
    setScrollingUp(currentScrollY <= lastScrollY || currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <React.Fragment>
      {/* Backdrop overlay */}
      <div
        className={`fixed bg-black/60 backdrop-blur-md h-screen w-screen z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <Drawers
        open={open}
        onClose={closeDrawer}
        onNavClick={props.onNavClick}
      />

      <nav
        className={`z-30 fixed w-full transition-all duration-300 ${
          scrollingUp ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-black/70 backdrop-blur-lg border-b border-white/[0.06] shadow-lg shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container max-w-screen-xl flex items-center justify-between mx-auto px-5 ">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <p className="text-[17px] font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
              Pulindu Vidmal
            </p>
          </a>

          {/* Menu icon */}
          <motion.button
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
