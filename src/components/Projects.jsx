import React from "react";
import { ProjectList } from "../constants/index";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    
  };

  return (
    <div className="d-container">
      <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h2 className="pb-7">Projects</h2>
          </motion.div>
      
      <div className="grid grid-col-1 sm:grid-cols-2 gap-3">
        {ProjectList.map((item) => (
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1, delay: item.id * 0.1 }}
          >
            <ProjectCard
              id={item.id}
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
