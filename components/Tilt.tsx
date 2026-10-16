"use client";

import { useRef, type ReactNode } from "react";

/** Tilts its child toward the pointer. Does nothing for touch or reduced motion. */
export default function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const enabled = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !enabled()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${(x * 9).toFixed(2)}deg) rotateX(${(-y * 9).toFixed(2)}deg)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={className}
      style={{ transition: "transform 0.25s ease-out", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
