"use client";

import { useRef, useState } from "react";
import { Menu } from "lucide-react";

const MIN = 240;

/** A small layout that reflows as its container gets wider or narrower (CSS container queries). */
export default function ResizeDemo() {
  const frame = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(100);

  const setFromX = (clientX: number) => {
    const box = frame.current?.parentElement;
    if (!box) return;
    const r = box.getBoundingClientRect();
    const px = Math.min(r.width, Math.max(MIN, clientX - r.left));
    setPct(Math.round((px / r.width) * 100));
  };

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) setFromX(e.clientX);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPct((p) => Math.max(40, p - 5));
    if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 5));
  };

  return (
    <figure>
      <div className="relative">
        <div ref={frame} style={{ width: `${pct}%`, minWidth: MIN }} className="demo-host relative max-w-full">
          <div className="rounded-2xl border border-deep/15 bg-white/70 p-3 sm:p-4" aria-hidden="true">
            <div className="mb-3 flex items-center justify-between border-b border-deep/10 pb-3">
              <div className="h-3.5 w-14 rounded bg-signal/80" />
              <div className="demo-nav-links gap-2">
                <div className="h-2 w-8 rounded bg-deep/30" />
                <div className="h-2 w-8 rounded bg-deep/30" />
                <div className="h-2 w-8 rounded bg-deep/30" />
              </div>
              <Menu className="demo-burger text-deep/60" size={16} />
            </div>
            <div className="demo-grid">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="rounded-lg border border-deep/10 bg-deep/[0.04] p-2">
                  <div className={`mb-2 aspect-[4/3] rounded ${i % 3 === 0 ? "bg-ion/70" : "bg-indigo-300/40"}`} />
                  <div className="h-1.5 w-3/4 rounded bg-deep/30" />
                </div>
              ))}
            </div>
          </div>

          {/* drag handle */}
          <div
            role="slider"
            tabIndex={0}
            aria-label="Resize the layout preview"
            aria-valuemin={40}
            aria-valuemax={100}
            aria-valuenow={pct}
            aria-valuetext={`${pct}% wide`}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onKeyDown={onKey}
            className="absolute -right-3 top-1/2 flex h-14 w-6 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full bg-deep text-white shadow-lg"
          >
            <span aria-hidden="true" className="flex gap-0.5">
              <i className="h-5 w-0.5 rounded bg-white/80" />
              <i className="h-5 w-0.5 rounded bg-white/80" />
            </span>
          </div>
        </div>
      </div>
      <figcaption className="muted mt-4 text-sm">
        Drag the handle, or use the arrow keys. The grid and navigation adapt to the width they get.
      </figcaption>
    </figure>
  );
}
