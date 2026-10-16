"use client";

import { useEffect } from "react";

/**
 * Page-wide effects, no visible markup of its own:
 *  - pointer position -> --mx / --my (blueprint grid spotlight)
 *  - scroll progress  -> --p (top progress bar)
 *  - scroll reveals   -> adds data-in to [data-reveal] elements once seen
 */
export default function PageEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let mx = window.innerWidth * 0.6;
    let my = window.innerHeight * 0.3;

    const paint = () => {
      raf = 0;
      root.style.setProperty("--mx", `${mx}px`);
      root.style.setProperty("--my", `${my}px`);
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--p", max > 0 ? String(Math.min(1, window.scrollY / max)) : "0");
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      schedule();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.setAttribute("data-in", "");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="atmos" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />
    </>
  );
}
