import React, { useEffect } from "react";
import dpImage from "../assets/me.webp";
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
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';




const fadeLeft = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const fadeUp = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, } },
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pulindu_vidmal_software_engineer_resume.pdf"; 
    link.download = "pulindu_vidmal_software_engineer_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  

  const navigate = useNavigate();

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
          variants={fadeUp}
        >
          Web Developer | UI/UX Designer | Graphic Designer
        </motion.p>
        <motion.div
          className="grid grid-col-1 sm:grid-cols-3 gap-3"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.05 }}
        >
          <motion.div
            className="hero-card row-span-2"
            variants={springAnimation}
          >
            <LazyLoadImage
              className="object-cover sm:max-h-100 w-screen p-6 rounded-[35px] "
              src={dpImage}
              alt="profile"
              loading="lazy"
              effect="blur"
              


              
            />
          </motion.div>
          <motion.div
            className="h-40 sm:h-auto hero-card"
            variants={springAnimation}
          >
            <div>
              <p className="text-6xl">500+</p>
              <p className="text-2xl pt-2 opacity-65">
                Freelancing Projects Done
              </p>
            </div>
          </motion.div>
          <motion.div
            className="h-40 sm:h-auto hero-card"
            variants={springAnimation}
          >
            <div>
              <p className="text-6xl">
                4<span className="text-3xl"> years +</span>
              </p>
              <p className="text-2xl pt-2 opacity-65">Experience</p>
            </div>
          </motion.div>
          <motion.div
            className="h-40 sm:h-auto hero-card"
            variants={springAnimation}
          >
            <div>
              <p className="text-5xl">★★★★★</p>
              <p className="text-2xl pt-2 opacity-65">On Fiverr</p>
            </div>
          </motion.div>
          <motion.div
            className="h-40 sm:h-auto hero-card click cursor-pointer"
            whileHover={{ scale: "0.9" }}
            variants={springAnimation}
            onClick={() => navigate("/contact")}
            
          >
            <div className="flex-row flex justify-between items-center">
              <p className="text-2xl">Contact Now</p>
              <div className="ml-2 cursor-pointer size-auto p-1 border-[2px] border-gray-500 rounded-full hover:bg-gradient-to-tr from-gray-700/20 to-gray-500/50">
                <FiArrowRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
          <motion.div variants={springAnimation}>
            <div className="grid grid-cols-5 gap-3">
              <a
                href="https://www.linkedin.com/in/pulindu-vidmal-57a7851a4/ "
                target="_blank"
              >
                <motion.div
                  className="hero-card aspect-square cursor-pointer"
                  whileHover={{ scale: "0.9" }}
                >
                  <FaLinkedinIn className="h-7 w-7 " />
                </motion.div>
              </a>
              <a
                href="https://web.facebook.com/pulindu.vidmal.10 "
                target="_blank"
              >
              <motion.div
                className="hero-card cursor-pointer aspect-square"
                whileHover={{ scale: "0.9" }}
              >
                <FaFacebookF className="h-7 w-7 " />
              </motion.div>
              </a>
              <a
                href="https://www.instagram.com/p_u_l_i_y_a_official/"
                target="_blank"
              >
              <motion.div
                className="hero-card cursor-pointer aspect-square"
                whileHover={{ scale: "0.9" }}
              >
                <SlSocialInstagram className="h-7 w-7" />
              </motion.div>
              </a>
              <a
                href="https://wa.me/qr/GGBM57BKKRIKL1 "
                target="_blank"
              >
              <motion.div
                className="hero-card cursor-pointer aspect-square"
                whileHover={{ scale: "0.9" }}
              >
                <FaWhatsapp className="h-7 w-7" />
              </motion.div>
              </a>
              <a
                href="https://github.com/puliya2002 "
                target="_blank"
              >
              <motion.div
                className="hero-card cursor-pointer aspect-square"
                whileHover={{ scale: "0.9" }}
              >
                <FaGithub className="h-7 w-7" />
              </motion.div>
              </a>
            </div>
          </motion.div>
          <motion.div
          className="gap-3 hero-card sm:col-span-2 h-[85px] sm:h-auto cursor-pointer"
            variants={springAnimation}
            onClick={handleDownload}
            whileHover={{ scale: "0.95" }}
          >
            <div className="flex-row flex justify-between items-center">
              <p className="text-2xl">Download CV</p>
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
