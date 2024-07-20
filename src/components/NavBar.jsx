import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLinks } from "../constants/index";
import { motion } from "framer-motion";

function NavBar(props) {
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

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
      <Drawer
        className="fixed right-0 bg-gray-900/90 border-gray-700/50 border-l-2 p-5 z-50"
        open={open}
        onClose={closeDrawer}
        placement="right"
        size={400}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray"></Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
          {NavLinks.map((link) => (
            
              <ul>
                <motion.li
                  whileHover={{ scale: 1.1, x: 30 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer text-2xl py-5 font-normal odd:border-b-[1px] odd:border-gray-700 even:border-none"
                  onClick={() => props.onNavClick(link.url)}
                >
                  {link.title}
                </motion.li>
              </ul>
            
          ))}
        </div>
      </Drawer>
      <nav
  className={` bg-gray-800/30  z-30 fixed w-full transition-transform duration-300 backdrop-blur-sm border-gray-700/20 border-b-2 ${
    scrollingUp ? "translate-y-0" : "-translate-y-full" 
  }`}
>
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
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
