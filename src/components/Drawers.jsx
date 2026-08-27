import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { NavLinks } from "../constants/nav";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.3, ease: "easeOut" },
  }),
};

function Drawers({ open, onClose, onNavClick }) {
  const navigate = useNavigate();

  return (
    <Drawer
      className="fixed right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/[0.07] p-6 z-50 flex flex-col"
      open={open}
      onClose={onClose}
      placement="right"
      size={320}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold text-sm">
            Pulindu Vidmal
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.09] transition-colors duration-200"
          aria-label="Close menu"
        >
          <FiX className="h-4 w-4 text-gray-300" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1">
        {NavLinks.map((link, i) => (
          <motion.button
            key={link.title}
            custom={i}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            variants={linkVariants}
            className="text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white
                       hover:bg-white/[0.07] transition-all duration-200 text-lg font-medium
                       border border-transparent hover:border-white/[0.06]"
            onClick={() => {
              navigate(link.url2);
              onNavClick(link.url);
              onClose();
            }}
          >
            {link.title}
          </motion.button>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8 border-t border-white/[0.06]">
        <p className="text-xs text-gray-600 text-center">
          © {new Date().getFullYear()} Pulindu Vidmal
        </p>
      </div>
    </Drawer>
  );
}

export default Drawers;
