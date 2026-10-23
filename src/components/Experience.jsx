import React from "react";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Full-Stack Developer & UI/UX Designer | Top Rated Freelancer",
    dates: "2023 – Present",
    location: "Remote",
    current: true,
    description:
      "Build and deliver full-stack web applications, SaaS platforms, marketplaces, dashboards, and e-commerce solutions for international clients. Recent work includes booking systems, multivendor marketplaces, and admin tools, with payments, authentication, and SQL-backed data models designed to scale.",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
    ],
  },
  {
    title: "WordPress Developer & UI/UX Designer | Fiverr",
    dates: "2021 – 2023",
    location: "Remote",
    description:
      "Designed and developed responsive WordPress websites, landing pages, business websites, and WooCommerce stores, transforming UI/UX designs into user-friendly, high-performing experiences. Custom themes, booking flows, and Stripe and PayPal checkout were part of the delivery for clients in the USA and UK.",
    skills: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Figma",
      "SEO",
    ],
  },
  {
    title: "Graphic Designer & UI/UX Designer | Fiverr",
    dates: "2018 – 2021",
    description:
      "Designed logos, brand identities, and marketing visuals for freelance clients, then carried those brands into simple websites and landing pages.",
    skills: ["WordPress", "Communication", "Figma", "UI/UX", "Branding"],
  },
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
        <ol className="space-y-8 border-l border-white/10 ml-2">
          {roles.map((role) => (
            <li key={role.title} className="relative pl-6">
              <span className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-400" />
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {role.title}
                </h3>
                {role.current && (
                  <span className="shrink-0 rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                    Present
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-blue-300">{role.dates}</p>
              {role.location && (
                <p className="text-sm text-gray-400">{role.location}</p>
              )}
              {role.description && (
                <p className="mt-3 text-gray-300 leading-relaxed">
                  {role.description}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {role.skills.map((skill) => (
                  <span key={skill} className="skill-tag skill-tag--compact">
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </motion.div>
    </div>
  );
}

export default Experience;
