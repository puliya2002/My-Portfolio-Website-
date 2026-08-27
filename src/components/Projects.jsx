import React from "react";
import { ProjectList } from "../constants/index";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Projects() {
  return (
    <div className="d-container">
      {/* Section header */}
      <motion.div
        className="flex flex-col items-start mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
          Selected Work
        </p>
        <h2 className="text-start mb-3">Projects</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProjectList.map((item, index) => (
          <motion.div
            key={item.slug}
            data-project-slug={item.slug}
            className="min-w-0 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
          >
            <ProjectCard
              slug={item.slug}
              name={item.title}
              image={item.image}
              skills={item.skills}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
