import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.005, // Extremely rapid stagger
        delayChildren: 0.005, // Minimal initial delay
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 2 }, // Minimal vertical movement
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1, // Very quick animation
        ease: "anticipate", // Aggressive, dynamic easing
      },
    },
  };

  const text =
    "A creative, logical and ambitious Software Engineer undergraduate specializing in Web Development and Graphic Design known for thinking outside the box and generating innovative ideas, thrive in collaborative environments, ensuring timely and excellent project delivery.";

  return (
    <div className="d-container">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sentence}
        className="text-start pb-2"
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-3xl text-gray-300/70 mb-4 text-start font-regular"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sentence}
      >
        {text.split(" ").map((word, index) => (
          <span key={index} className="inline-block mr-1">
            {word.split("").map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.p>
    </div>
  );
}

export default AboutMe;
