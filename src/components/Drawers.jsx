import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { NavLinks } from "../constants/index";

function Drawers({ open, onClose, onNavClick }) {
  return (
    <Drawer
      className="fixed right-0 bg-gray-900/90 border-gray-700/50 border-l-2 p-5 z-50"
      open={open}
      onClose={onClose}
      placement="right"
      size={400}
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray"></Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
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
          <ul key={link.title}>
            <motion.li
              whileHover={{ scale: 1.1, x: 20 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer text-2xl py-5 font-normal odd:border-b-[1px] odd:border-gray-700 even:border-none"
              onClick={() => onNavClick(link.url)}
            >
              {link.title}
            </motion.li>
          </ul>
        ))}
      </div>
    </Drawer>
  );
}

export default Drawers;
