import React, { useEffect, useState } from "react";
import {
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

const contactMethods = [
  {
    label: "Email",
    value: "vidmalpulindu@gmail.com",
    href: "mailto:vidmalpulindu@gmail.com",
    description: "Best for project inquiries",
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pulindu-vidmal",
    href: "https://www.linkedin.com/in/pulindu-vidmal-57a7851a4/",
    icon: FaLinkedinIn,
    description: "Professional network",
    copyable: false,
  },
  {
    label: "GitHub",
    value: "github.com/puliya2002",
    href: "https://github.com/puliya2002",
    icon: FaGithub,
    description: "View my code",
    copyable: false,
  },
  {
    label: "WhatsApp",
    value: "+94 71 989 2557",
    href: "https://wa.me/94719892557",
    icon: FaWhatsapp,
    description: "Quick responses",
    copyable: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function ContactPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Ambient bg */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[140px]" />
      </div>

      <NavBar />

      <div className="container max-w-2xl mx-auto px-4 sm:px-5 pt-32 pb-20 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Let's Work Together
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? Reach out through
            any of the channels below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="flex flex-col gap-3">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="glass-card p-5 flex items-center justify-between gap-4 group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  {method.label}
                </p>
                <p className="text-white font-medium truncate">
                  {method.value}
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  {method.description}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {method.copyable && (
                  <button
                    onClick={() => handleCopy(method.value, i)}
                    className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.04]
                               hover:bg-white/[0.09] transition-all duration-200"
                    aria-label="Copy to clipboard"
                  >
                    {copiedIndex === i ? (
                      <FaCheck className="h-3.5 w-3.5 text-green-400" />
                    ) : (
                      <FaCopy className="h-3.5 w-3.5 text-gray-400" />
                    )}
                  </button>
                )}
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.04]
                             hover:bg-blue-500/20 hover:border-blue-500/30
                             transition-all duration-200"
                  aria-label={`Open ${method.label}`}
                >
                  <FaExternalLinkAlt className="h-3.5 w-3.5 text-gray-400 group-hover:text-blue-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Availability badge */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          border border-green-500/20 bg-green-500/5 text-green-400 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
            Available for freelance projects
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
