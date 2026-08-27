"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.45, ease: "easeInOut" },
      }}
      aria-busy="true"
      aria-label="Loading"
    >
      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 58, 138, 0.22), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative flex flex-col items-center gap-5"
        initial={{ scale: 0.55, opacity: 0, y: 28 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", mass: 1, stiffness: 220, damping: 18 }}
      >
        <motion.p
          className="text-sm tracking-[0.28em] uppercase text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 22,
            delay: 0.15,
          }}
        >
          Loading
        </motion.p>

        {/* Spring progress bar */}
        <div className="h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full origin-left rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
