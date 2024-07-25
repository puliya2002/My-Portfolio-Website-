import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Drawers from "./Drawers";



function NavBar(props) {
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= lastScrollY) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);




  return (
    <React.Fragment>
      <div
        className={`fixed bg-black/50 backdrop-blur-md h-screen w-screen z-40 ${
          open ? "flex" : "hidden"
        }`}
      ></div>
      <Drawers open={open} onClose={closeDrawer} onNavClick={props.onNavClick} />
      <nav
        className={`bg-gray-800/30 z-30 fixed w-full transition-transform duration-300 backdrop-blur-sm border-gray-700/20 border-b-2 ${
          scrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <p className="text-2xl font-medium">Pulindu Vidmal</p>
          </a>
          <motion.div
            className={`${open ? "opacity-0" : "flex"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BiMenuAltRight
              onClick={openDrawer}
              className="h-10 w-10 navbar-card rounded-md"
            />
          </motion.div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
