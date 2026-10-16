"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

const GLYPHS = "abcdefghijklmnopqrstuvwxyz*+/<>#";
const REST = { wght: 520, wdth: 100 };
const HOT = { wght: 800, wdth: 78 };

/**
 * The hero name.
 *  1. On load the letters resolve from random glyphs, left to right (once).
 *  2. With a mouse, letters get bolder and narrower near the pointer.
 * Touch and reduced-motion users get the plain text.
 */
export default function HeroName({ lines }: { lines: string[] }) {
  const root = useRef<HTMLHeadingElement>(null);

  // 1. resolve-in
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const letters = Array.from(root.current?.querySelectorAll<HTMLElement>("[data-ch]") ?? []);
    const finals = letters.map((l) => l.dataset.ch ?? "");
    const start = performance.now();
    letters.forEach((l) => (l.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]));

    let raf = 0;
    const tick = (now: number) => {
      const t = now - start;
      let done = true;
      letters.forEach((l, i) => {
        const settleAt = 350 + i * 70;
        if (t >= settleAt) {
          if (l.textContent !== finals[i]) l.textContent = finals[i];
        } else {
          done = false;
          if (Math.floor(t / 60) !== Math.floor((t - 16) / 60)) {
            l.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
      });
      if (!done) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      letters.forEach((l, i) => (l.textContent = finals[i]));
    };
  }, []);

  // 2. pointer-reactive weight and width
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !root.current) return;

    const letters = Array.from(root.current.querySelectorAll<HTMLElement>("[data-ch]"));
    const state = letters.map(() => 0);
    let px = -9999;
    let py = -9999;
    let raf = 0;

    const frame = () => {
      let moving = false;
      letters.forEach((l, i) => {
        const r = l.getBoundingClientRect();
        const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
        const target = Math.max(0, 1 - d / 240);
        state[i] += (target - state[i]) * 0.14;
        if (Math.abs(target - state[i]) > 0.003) moving = true;
        const w = REST.wght + (HOT.wght - REST.wght) * state[i];
        const wd = REST.wdth + (HOT.wdth - REST.wdth) * state[i];
        l.style.fontVariationSettings = `"wght" ${w.toFixed(0)}, "wdth" ${wd.toFixed(1)}`;
      });
      raf = moving ? requestAnimationFrame(frame) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      kick();
    };
    const onLeave = () => {
      px = -9999;
      py = -9999;
      kick();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h1
      ref={root}
      aria-label={lines.join(" ")}
      className="font-display text-[clamp(2.7rem,12.4vw,9.75rem)] leading-[0.92] tracking-[-0.035em]"
      style={{ fontVariationSettings: `"wght" ${REST.wght}, "wdth" ${REST.wdth}` }}
    >
      {lines.map((line, li) => (
        <span key={li} className="block whitespace-nowrap" aria-hidden="true">
          {line.split("").map((ch, i) => (
            <span
              key={i}
              data-ch={ch}
              className="inline-block"
              style={{ fontVariationSettings: `"wght" ${REST.wght}, "wdth" ${REST.wdth}` }}
            >
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
