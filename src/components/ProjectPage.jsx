import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../constants";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NavBar from "./NavBar";

const formatSlugLabel = (slug) =>
  slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

/** Projects that should use a static screenshot instead of an embedded site */
const IFRAME_PREVIEW_EXCLUDED_SLUGS = new Set(["money-track"]);

function validateHttpUrl(string) {
  try {
    const u = new URL(string);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = ProjectList.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-400 mb-4">Project not found</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-xl border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            ← Go back
          </button>
        </div>
      </div>
    );
  }

  const showWeb =
    Boolean(project.weburl?.trim()) && validateHttpUrl(project.weburl.trim());
  const showGit =
    Boolean(project.giturl?.trim()) && validateHttpUrl(project.giturl.trim());
  const useIframePreview =
    showWeb && !IFRAME_PREVIEW_EXCLUDED_SLUGS.has(project.slug);
  const screenshotSrc = project.ss;

  return (
    <div className="min-h-screen relative">
      {/* Ambient bg */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <NavBar />

      <div className="container max-w-3xl mx-auto px-4 sm:px-5 pt-28 pb-20 relative z-10">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white
                     mb-8 group transition-colors duration-200"
        >
          <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card glass-card--static p-4 sm:p-6"
        >
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-2">
              {formatSlugLabel(project.slug)}
            </p>
            <h1
              className="max-w-full text-4xl font-bold leading-tight text-white text-balance break-words
                         xs:text-5xl xs:leading-snug sm:text-5xl sm:leading-tight mb-4"
            >
              {project.title}
            </h1>

            {/* Action links */}
            <div className="flex flex-wrap gap-2">
              {showGit && (
                <a
                  href={project.giturl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08]
                             bg-white/[0.04] text-sm text-gray-300 hover:text-white
                             hover:bg-white/[0.09] transition-all duration-200"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
              {showWeb && (
                <a
                  href={project.weburl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500/30
                             bg-blue-500/10 text-sm text-blue-300 hover:bg-blue-500/20
                             hover:border-blue-400/50 transition-all duration-200"
                >
                  <FaExternalLinkAlt className="h-3 w-3" />
                  Live Website
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Tech stack */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span key={index} className="skill-tag text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              Overview
            </p>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              {project.description}
            </p>
          </div>

          {/* Live site preview or screenshot */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              {useIframePreview ? "Live preview" : "Screenshot"}
            </p>
            <div className="rounded-xl overflow-hidden border border-white/[0.06] w-full bg-neutral-950">
              {useIframePreview ? (
                <div className="relative h-[min(75vh,720px)] min-h-[280px] w-full sm:min-h-[320px]">
                  <iframe
                    key={project.slug}
                    src={project.weburl}
                    title={`${project.title} live site preview`}
                    className="absolute inset-0 h-full w-full scale-[1.02] border-0 bg-white blur-[2px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    tabIndex={-1}
                  />
                  <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <a
                      href={project.weburl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live website`}
                      className="inline-flex items-center gap-2 rounded-2xl border border-blue-400/40
                                 bg-blue-500/20 px-6 py-3 text-sm font-semibold text-blue-100
                                 shadow-lg shadow-blue-950/30 backdrop-blur-md transition-all duration-200
                                 hover:-translate-y-0.5 hover:border-blue-300/70 hover:bg-blue-500/30
                                 "
                    >
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                      Live Website
                    </a>
                  </div>
                </div>
              ) : screenshotSrc ? (
                <LazyLoadImage
                  alt={project.title}
                  src={screenshotSrc}
                  effect="blur"
                  threshold={120}
                  decoding="async"
                  wrapperClassName="block w-full !overflow-hidden rounded-xl"
                  className="block w-full h-auto object-contain object-center"
                />
              ) : (
                <div className="py-14 px-4 text-center text-sm text-gray-500">
                  No preview image for this project.
                  {showWeb && (
                    <span className="block mt-2">
                      <a
                        href={project.weburl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400/90 hover:text-blue-300 underline underline-offset-2"
                      >
                        Open live site
                      </a>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
