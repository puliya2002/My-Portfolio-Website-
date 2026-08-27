import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dpImage from "../assets/me.webp";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { Star } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const springAnimation = {
  initial: { scale: 0.92, y: 18, opacity: 0 },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { type: "spring", mass: 1, stiffness: 280, damping: 28 },
  },
};

const fadeLeft = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const FIVERR_RATING = 4.9;
const FIVERR_REVIEWS = 429;
const FIVERR_STAR_FRACTION = FIVERR_RATING % 1;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.15 } },
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pulindu-vidmal-57a7851a4/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://web.facebook.com/pulindu.vidmal.10",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/p_u_l_i_y_a_official/",
    icon: SlSocialInstagram,
    label: "Instagram",
  },
  {
    href: "https://wa.me/qr/GGBM57BKKRIKL1",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  { href: "https://github.com/puliya2002", icon: FaGithub, label: "GitHub" },
];

/** Short glowing segment that travels around a card border */
function BorderBeam({ delay = 0, duration = 14, size }) {
  return (
    <span
      className="border-beam"
      style={{
        // Negative delay starts each beam mid-loop so cards look staggered
        "--beam-delay": `-${delay}s`,
        "--beam-duration": `${duration}s`,
        ...(size != null ? { "--beam-size": `${size}px` } : null),
      }}
      aria-hidden
    />
  );
}

const Hero = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pulindu_vidmal_software_engineer_resume.pdf";
    link.download = "pulindu_vidmal_software_engineer_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center relative">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="d-container z-10 w-full">
        {/* Heading */}
        <motion.h1
          className="mb-2 mt-[80px] lg:mt-[50px] text-gradient text-6xl sm:max-md:text-5xl md:text-6xl"
          initial="initial"
          animate="animate"
          variants={fadeLeft}
          viewport={{ once: true }}
        >
          Hi, I'm Pulindu
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <p className="text-base md:text-xl sm:max-md:text-lg mb-10 text-gray-400 tracking-wide leading-relaxed">
            BSc (Hons) in Software Engineering
            <span className="text-gray-600 mx-2">|</span>
            Freelance UI/UX Designer &amp; Web Developer
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.07 }}
        >
          {/* Profile photo */}
          <motion.div
            className="hero-card hero-card--static row-span-2 min-h-[240px] h-auto overflow-hidden relative z-30"
            variants={springAnimation}
          >
            <BorderBeam delay={0.9} size={150} />
            <LazyLoadImage
              className="relative z-10 object-cover w-full h-full p-4 rounded-[28px] sm:max-md:rounded-2xl md:rounded-[28px]"
              src={dpImage}
              alt="Pulindu Vidmal"
              visibleByDefault
              effect="blur"
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />
          </motion.div>

          {/* Stat - projects */}
          <motion.div
            className="h-40 md:h-auto hero-card hero-card--static p-5 relative overflow-hidden"
            variants={springAnimation}
          >
            <BorderBeam delay={0} />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 to-transparent pointer-events-none rounded-2xl sm:max-md:rounded-xl md:rounded-2xl" />
            <p className="relative z-10 text-gradient-blue text-6xl sm:max-md:text-5xl md:text-6xl font-bold leading-none">
              500+
            </p>
            <p className="relative z-10 text-lg sm:max-md:text-base md:text-lg pt-2 text-gray-300 font-normal tracking-wide ">
              Freelancing Projects
            </p>
          </motion.div>

          {/* Stat - experience */}
          <motion.div
            className="h-40 md:h-auto hero-card hero-card--static p-5 relative overflow-hidden"
            variants={springAnimation}
          >
            <BorderBeam delay={3} />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 to-transparent pointer-events-none rounded-2xl sm:max-md:rounded-xl md:rounded-2xl" />
            <p className="relative z-10 text-gradient-blue text-6xl sm:max-md:text-5xl md:text-6xl font-bold leading-none">
              5
              <span className="text-3xl sm:max-md:text-2xl md:text-3xl font-semibold">
                {" "}
                yrs+
              </span>
            </p>
            <p className="relative z-10 text-lg sm:max-md:text-base md:text-lg pt-2 text-gray-300 font-normal tracking-wide ">
              Experience
            </p>
          </motion.div>

          {/* Stat - Fiverr rating (stars emphasize 4.9 via last partial star) */}
          <motion.div
            className="h-40 md:h-auto hero-card hero-card--static p-5 flex flex-col justify-center text-start gap-2 relative overflow-hidden"
            variants={springAnimation}
            aria-label={`${FIVERR_RATING} out of 5 stars on Fiverr, ${FIVERR_REVIEWS} reviews`}
          >
            <BorderBeam delay={6} />
            {/* Stars + 4.9 on one row; reviews on next line */}
            <div className="relative z-10 flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center gap-0.5 shrink-0" aria-hidden>
                  {[0, 1, 2, 3].map((i) => (
                    <Star
                      key={i}
                      className="h-8 w-8 sm:h-9 sm:w-9 sm:max-md:h-7 sm:max-md:w-7 md:h-9 md:w-9 shrink-0 fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                  ))}
                  <div className="relative h-8 w-8 sm:h-9 sm:w-9 sm:max-md:h-7 sm:max-md:w-7 md:h-9 md:w-9 shrink-0">
                    <Star
                      className="pointer-events-none absolute inset-0 h-full w-full fill-none stroke-zinc-500/45 text-zinc-500"
                      strokeWidth={1.2}
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        maskImage: `linear-gradient(90deg, #000 0%, #000 ${FIVERR_STAR_FRACTION * 100}%, transparent ${FIVERR_STAR_FRACTION * 100}%)`,
                        WebkitMaskImage: `linear-gradient(90deg, #000 0%, #000 ${FIVERR_STAR_FRACTION * 100}%, transparent ${FIVERR_STAR_FRACTION * 100}%)`,
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    >
                      <Star
                        className="h-full w-full fill-amber-400 text-amber-400"
                        strokeWidth={0}
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>

                <span className="text-gradient-blue text-4xl sm:text-[2.25rem] sm:max-md:text-3xl md:text-[2.25rem] font-bold tabular-nums leading-none">
                  {FIVERR_RATING}
                </span>
              </div>

              <p className="text-sm sm:max-md:text-xs md:text-sm text-gray-500 font-medium text-center w-full">
                ({FIVERR_REVIEWS.toLocaleString()} reviews)
              </p>
            </div>

            <p className="relative z-10 text-lg sm:max-md:text-base md:text-lg pt-2 text-gray-300 font-normal tracking-wide ">
              Rated on Fiverr
            </p>
          </motion.div>

          {/* CTA - Contact */}
          <motion.div
            className="h-40 md:h-auto hero-card click cursor-pointer p-5 group"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.94 }}
            variants={springAnimation}
            onClick={() => navigate("/contact")}
          >
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="text-2xl sm:max-md:text-xl md:text-2xl font-semibold">
                  Get in Touch
                </p>
                <p className="text-sm sm:max-md:text-xs md:text-sm text-gray-400 mt-1 text-left">
                  Let's work together
                </p>
              </div>
              <div className="ml-3 p-2 border border-blue-500/40 rounded-full bg-blue-500/20 group-hover:bg-blue-500/35 group-hover:border-blue-400/60 transition-colors">
                <motion.span
                  className="block"
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiArrowUpRight className="h-5 w-5 sm:max-md:h-4 sm:max-md:w-4 md:h-5 md:w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Social icons */}
          <motion.div className="relative z-10" variants={springAnimation}>
            <div className="grid grid-cols-5 gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <motion.div
                    className="hero-card aspect-square cursor-pointer p-2 flex items-center justify-center"
                    whileHover={{ scale: 0.9, y: -2 }}
                    whileTap={{ scale: 0.85 }}
                  >
                    <Icon className="h-6 w-6 sm:max-md:h-5 sm:max-md:w-5 md:h-6 md:w-6 text-gray-300" />
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA - Download CV */}
          <motion.div
            className="hero-card sm:col-span-2 cursor-pointer relative z-10 group"
            variants={springAnimation}
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleDownload}
          >
            <div className="flex justify-between items-center p-5 w-full h-20 sm:h-12">
              <div>
                <p className="text-xl sm:max-md:text-base md:text-xl font-semibold">
                  Download CV
                </p>
              </div>
              <div className="ml-3 p-2 border border-gray-600/50 rounded-full bg-gray-500/10 hover:bg-gray-500/20 transition-colors">
                <FiArrowDownRight className="h-5 w-5 sm:max-md:h-4 sm:max-md:w-4 md:h-5 md:w-5 text-gray-300 transform-gpu transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-active:translate-x-1 group-active:translate-y-1" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
