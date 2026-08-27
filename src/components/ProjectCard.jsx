import React, { useLayoutEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const GAP_PX = 6; // matches gap-1.5

const CARD_SKILL_CLASS = "skill-tag skill-tag--compact shrink-0";

const plusLabelWidthCache = new Map();

function measurePlusLabelWidth(count) {
  if (count <= 0) return 0;
  const cacheKey = `${count}|v3`;
  if (plusLabelWidthCache.has(cacheKey))
    return plusLabelWidthCache.get(cacheKey);
  const span = document.createElement("span");
  span.className = `${CARD_SKILL_CLASS} text-gray-400 border-white/[0.14]`;
  span.textContent = `+${count}`;
  span.setAttribute(
    "style",
    "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap",
  );
  document.body.appendChild(span);
  const w = span.getBoundingClientRect().width;
  document.body.removeChild(span);
  plusLabelWidthCache.set(cacheKey, w);
  return w;
}

function computeVisibleSkillCount(widths, containerWidth) {
  if (!widths.length || containerWidth <= 0) return widths.length;

  for (let k = widths.length; k >= 1; k--) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += widths[i] + (i > 0 ? GAP_PX : 0);
    }
    const remaining = widths.length - k;
    if (remaining === 0) {
      if (sum <= containerWidth) return k;
    } else {
      const plusW = measurePlusLabelWidth(remaining);
      if (sum + GAP_PX + plusW <= containerWidth) return k;
    }
  }

  return 1;
}

function ProjectCard({ slug, name, image, skills }) {
  const navigate = useNavigate();
  const rowRef = useRef(null);
  const measureRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(() => skills.length);

  useLayoutEffect(() => {
    const row = rowRef.current;
    const measure = measureRef.current;
    if (!row || !measure || skills.length === 0) {
      setVisibleCount(skills.length);
      return;
    }

    const update = () => {
      const pills = measure.querySelectorAll("[data-skill-measure]");
      if (!pills.length) return;
      const widths = [...pills].map((el) => el.getBoundingClientRect().width);
      const cw = row.clientWidth;
      setVisibleCount(computeVisibleSkillCount(widths, cw));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(row);
    return () => ro.disconnect();
  }, [skills]);

  const hiddenCount = Math.max(0, skills.length - visibleCount);
  const showPlus = hiddenCount > 0;

  return (
    <motion.div
      className="project-card group cursor-pointer relative overflow-hidden min-w-0"
      onClick={() => {
        sessionStorage.setItem("portfolio:homeScrollY", String(window.scrollY));
        navigate(`/project/${slug}`);
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Card header */}
      <div className="flex justify-between items-start w-full mb-3">
        <p className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
          {name}
        </p>
        <div
          className="flex-shrink-0 ml-3 p-2 border border-gray-600/50 rounded-full bg-white/5
                        group-hover:bg-blue-500/20 group-hover:border-blue-500/40
                        transition-all duration-200"
        >
          <FiArrowUpRight
            className="h-4 w-4 text-gray-400 group-hover:text-blue-300
                                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                    transition-transform duration-200"
          />
        </div>
      </div>

      {/* Skill tags - single row + "+N" when more on detail page */}
      <div className="relative mb-4 w-full min-w-0" title={skills.join(" · ")}>
        <div
          ref={measureRef}
          className="pointer-events-none absolute left-0 top-0 flex w-max flex-nowrap gap-1.5 opacity-0"
          aria-hidden
        >
          {skills.map((skill, index) => (
            <span key={index} data-skill-measure className={CARD_SKILL_CLASS}>
              {skill}
            </span>
          ))}
        </div>
        <div
          ref={rowRef}
          className="flex min-h-[26px] flex-nowrap items-center gap-1.5 overflow-hidden"
        >
          {skills.slice(0, visibleCount).map((skill, index) => (
            <span key={index} className={CARD_SKILL_CLASS}>
              {skill}
            </span>
          ))}
          {showPlus && (
            <span
              className={`${CARD_SKILL_CLASS} text-gray-400 border-white/[0.14]`}
              aria-label={`${hiddenCount} more skills, view project for full list`}
            >
              +{hiddenCount}
            </span>
          )}
        </div>
      </div>

      {/* Project image - intersection lazy load + blur placeholder */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <LazyLoadImage
          src={image}
          alt={name}
          effect="blur"
          threshold={180}
          decoding="async"
          wrapperClassName="block w-full !overflow-hidden rounded-xl"
          className="block w-full h-auto object-contain object-center
                     group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl
                        flex items-end justify-end p-3"
        >
          <span className="text-xs text-gray-300 font-medium tracking-wide">
            View Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
