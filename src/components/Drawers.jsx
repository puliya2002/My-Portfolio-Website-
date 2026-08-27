import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../constants/nav";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

const panelTransition = { type: "tween", duration: 0.22, ease: [0.22, 1, 0.36, 1] };

function Drawers({ open, onClose, onNavClick }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          key="nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed right-0 top-0 h-screen w-[min(320px,100vw)] bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/[0.07] p-6 z-50 flex flex-col"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={panelTransition}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="text-white font-semibold text-sm">Pulindu Vidmal</span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.09] transition-colors duration-200"
              aria-label="Close menu"
            >
              <FiX className="h-4 w-4 text-gray-300" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {NavLinks.map((link) => (
              <button
                key={link.title}
                type="button"
                className="text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white
                           hover:bg-white/[0.07] transition-colors duration-150 text-lg font-medium
                           border border-transparent hover:border-white/[0.06]"
                onClick={() => {
                  navigate(link.url2);
                  onNavClick(link.url);
                  onClose();
                }}
              >
                {link.title}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-gray-600 text-center">
              © {new Date().getFullYear()} Pulindu Vidmal
            </p>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}

export default Drawers;
