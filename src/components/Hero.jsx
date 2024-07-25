import React, { useEffect } from "react";
import dpImage from "../assets/me.png";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";

const fadeLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const fadeRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const springAnimation = {
  initial: { scale: 0.5, y: 50, opacity: 0 },
  animate: { scale: 1, y: 0, opacity: 1 },
  transition: {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="d-container z-10">
        <motion.h1
          className="mb-3 mt-[80px]"
          initial="initial"
          animate="animate"
          variants={fadeLeft}
        >
          Hi, I'm Pulindu
        </motion.h1>
        <motion.p
          className="text-3xl mb-10 text-gray-300/70"
          initial="initial"
          animate="animate"
          variants={fadeRight}
        >
          Web Developer | UI/UX Designer | Graphic Designer
        </motion.p>
        <motion.div
          className="grid grid-col-1 sm:grid-cols-3 gap-3"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.05 }}
        >
          <motion.div className="hero-card row-span-2" variants={springAnimation}>
            <img
              className="object-cover sm:max-h-100 w-screen p-6 rounded-[35px]"
              src={dpImage}
              alt="hero"
            />
          </motion.div>
          <motion.div className="h-40 sm:h-auto hero-card" variants={springAnimation}>
            <div>
              <p className="text-6xl">500+</p>
              <p className="text-xl pt-2 opacity-65">Freelancing Projects Done</p>
            </div>
          </motion.div>
          <motion.div className="h-40 sm:h-auto hero-card" variants={springAnimation}>
            <div>
              <p className="text-6xl">
                4<span className="text-3xl"> years +</span>
              </p>
              <p className="text-xl pt-2 opacity-65">Experience</p>
            </div>
          </motion.div>
          <motion.div className="h-40 sm:h-auto hero-card" variants={springAnimation}>
            <div>
              <p className="text-5xl">★★★★★</p>
              <p className="text-xl pt-2 opacity-65">On Fiverr</p>
            </div>
          </motion.div>
          <motion.div
            className="h-40 sm:h-auto hero-card click cursor-pointer"
            whileHover={{ scale: "0.9" }}
            variants={springAnimation}
          >
            <div className="flex-row flex justify-between items-center">
              <p className="text-xl">Contact Now</p>
              <div className="ml-2 cursor-pointer size-auto p-1 border-[2px] border-gray-500 rounded-full hover:bg-gradient-to-tr from-gray-700/20 to-gray-500/50">
                <FiArrowRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
          <motion.div variants={springAnimation}>
            <div className="grid grid-cols-5 gap-3">
              <div className="hero-card aspect-square cursor-pointer">
                <FaLinkedinIn className="h-6 w-6 " />
              </div>
              <div className="hero-card cursor-pointer">
                <FaFacebookF className="h-6 w-6 " />
              </div>
              <div className="hero-card cursor-pointer">
                <SlSocialInstagram className="h-6 w-6" />
              </div>
              <div className="hero-card cursor-pointer">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <div className="hero-card cursor-pointer">
                <FaGithub className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="gap-3 hero-card sm:col-span-2 h-[85px] sm:h-auto cursor-pointer"
            variants={springAnimation}
            onClick={() => {}}
          >
            <div className="flex-row flex justify-between items-center">
              <p className="text-xl">Download CV</p>
              <div className="ml-2 cursor-pointer size-auto p-1 border-[2px] border-gray-600 rounded-full hover:bg-gradient-to-tr from-gray-700/20 to-gray-500/50">
                <FiArrowDownRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
