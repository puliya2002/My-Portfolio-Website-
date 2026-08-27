"use client";

import { useEffect, useState, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, summary, details, [onclick], .cursor-pointer, [data-cursor-active="true"]';

export function MouseLight() {
  const [isEnabled, setIsEnabled] = useState(false);
  const dotRef = useRef(null);
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const smoothPositionRef = useRef({ x: 0, y: 0 });
  const targetIntensityRef = useRef(1);
  const currentIntensityRef = useRef(1);
  const animationFrameId = useRef(null);
  const hasMousePositionRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateEnabledState = () => {
      setIsEnabled(hoverQuery.matches && !reducedMotionQuery.matches);
    };

    updateEnabledState();

    const addMediaQueryListener = (query) => {
      if (typeof query.addEventListener === "function") {
        query.addEventListener("change", updateEnabledState);
        return;
      }

      query.addListener(updateEnabledState);
    };

    const removeMediaQueryListener = (query) => {
      if (typeof query.removeEventListener === "function") {
        query.removeEventListener("change", updateEnabledState);
        return;
      }

      query.removeListener(updateEnabledState);
    };

    addMediaQueryListener(hoverQuery);
    addMediaQueryListener(reducedMotionQuery);

    return () => {
      removeMediaQueryListener(hoverQuery);
      removeMediaQueryListener(reducedMotionQuery);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      hasMousePositionRef.current = false;
      isVisibleRef.current = false;
      targetIntensityRef.current = 1;
      currentIntensityRef.current = 1;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      return;
    }

    const isInteractiveTarget = (target) =>
      target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));

    const applyStyles = () => {
      const dot = dotRef.current;
      if (!dot) return;

      const { x: mx, y: my } = smoothPositionRef.current;
      const intensity = currentIntensityRef.current;
      const visible = isVisibleRef.current;

      dot.style.opacity = visible ? String(intensity) : "0";
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const animate = () => {
      const target = targetPositionRef.current;
      const smooth = smoothPositionRef.current;

      smoothPositionRef.current = {
        x: smooth.x + (target.x - smooth.x) * 0.18,
        y: smooth.y + (target.y - smooth.y) * 0.18,
      };

      currentIntensityRef.current =
        currentIntensityRef.current +
        (targetIntensityRef.current - currentIntensityRef.current) * 0.16;

      applyStyles();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (animationFrameId.current != null) return;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      targetPositionRef.current = { x: event.clientX, y: event.clientY };
      targetIntensityRef.current = isInteractiveTarget(event.target) ? 1 : 0.38;

      if (!hasMousePositionRef.current) {
        hasMousePositionRef.current = true;
        smoothPositionRef.current = { ...targetPositionRef.current };
        isVisibleRef.current = true;
        startLoop();
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [isEnabled]);

  return (
    <>
      {/* Fixed ambient glow — top-left corner */}
      <div
        className="pointer-events-none fixed -top-20 -left-40 -z-10 h-[860px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 58, 138, 0.18), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed top-0 left-0 -z-10 h-[760px] w-[760px] -translate-x-1/4 -translate-y-1/4 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(3, 105, 161, 0.08), transparent 75%)",
        }}
        aria-hidden
      />

      {isEnabled ? (
        <div
          ref={dotRef}
          className="pointer-events-none fixed z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200"
          style={{
            opacity: 0,
            left: 0,
            top: 0,
            background: "rgba(4, 128, 238, 0.9)",
            boxShadow: "0 0 24px rgba(4, 128, 238, 0.6)",
          }}
        />
      ) : null}
    </>
  );
}
