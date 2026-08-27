import React from "react";
import { motion } from "framer-motion";

const experiencePoints = [
  "Level 2 Seller on Fiverr with 100% response rate and on-time delivery for over 500 projects.",
  "Achieved a 96% five-star rating from 370+ reviews, collaborating with 300+ international clients.",
  "Delivered 15+ WordPress websites and 10+ e-commerce solutions with seamless payment integration.",
  "Spearheaded the development of user-friendly interfaces for 15+ WordPress websites, ensuring all designs adhered to responsive and SEO best practices that enhanced overall site traffic by increasing organic visits.",
];

function Experience() {
  return (
    <div className="d-container">
      <motion.div
        className="flex flex-col items-start mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
          Experience
        </p>
        <h2 className="text-start mb-3">Freelance Journey</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="glass-card glass-card--static text-start p-6 sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm text-blue-300 font-semibold tracking-wide mb-2">
          2018 - Present
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
          Freelance Web Developer &amp; Graphic Designer | Fiverr
        </h3>

        <ul className="space-y-3">
          {experiencePoints.map((point) => (
            <li
              key={point}
              className="text-gray-300 leading-relaxed flex items-start gap-3"
            >
              <span className="text-blue-400 mt-[2px]">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Experience;
