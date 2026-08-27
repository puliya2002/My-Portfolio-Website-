import React from "react";
import { motion } from "framer-motion";

const techStack = [
  {
    label: "React",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  { label: "Next.js", color: "text-white", bg: "bg-white/5 border-white/10" },
  {
    label: "TypeScript",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    label: "Tailwind CSS",
    color: "text-sky-400",
    bg: "bg-sky-400/10 border-sky-400/20",
  },
  {
    label: "Flutter",
    color: "text-blue-300",
    bg: "bg-blue-300/10 border-blue-300/20",
  },
  {
    label: "Firebase",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  {
    label: "MongoDB",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
  },
  {
    label: "WordPress",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10 border-indigo-400/20",
  },
  {
    label: "Figma",
    color: "text-pink-400",
    bg: "bg-pink-400/10 border-pink-400/20",
  },
  {
    label: "AWS",
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/20",
  },
  {
    label: "Git",
    color: "text-red-400",
    bg: "bg-red-400/10 border-red-400/20",
  },
  {
    label: "Framer Motion",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
  },
  {
    label: "Node.js",
    color: "text-green-500",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    label: "Java",
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    label: "SQL",
    color: "text-teal-400",
    bg: "bg-teal-400/10 border-teal-400/20",
  },
  {
    label: "Supabase",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    label: "Stripe",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10 border-indigo-400/20",
  },
  {
    label: "Docker",
    color: "text-sky-500",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const text =
  "5+ years building and shipping production-grade web applications across 500+ freelance projects, from clean, performant React and Next.js front-ends to scalable APIs and cloud-backed services. A Software Engineering graduate (BSc Hons), I care about clean code, solid system design, and pixel-tight UX, pairing engineering rigor with a strong eye for design to turn ideas into reliable, maintainable software.";

function AboutMe() {
  return (
    <div className="d-container">
      {/* Section label */}
      <motion.div
        className="flex flex-col items-start mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
          About Me
        </p>
        <h2 className="text-start mb-3">Who I Am</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start text-start">
        {/* Bio text */}
        <motion.div
          className="lg:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <p className="text-xl md:text-2xl text-gray-300/80 font-normal leading-relaxed">
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.3em]"
                variants={wordVariant}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase mb-4">
            Tech Stack
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {techStack.map(({ label, color, bg }) => (
              <motion.span
                key={label}
                variants={tagVariants}
                className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-sm font-medium cursor-default
                  hover:scale-105 transition-transform duration-200 ${color} ${bg}`}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
