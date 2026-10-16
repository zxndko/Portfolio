"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Mobile menu: Escape closes, page scroll locked while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-deep/10 bg-white/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight" aria-label="Chompoonuch Tubtimsri, back to top">
          chompoonuch<span className="text-signal">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "location" : undefined}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  active === l.href ? "text-paper" : "muted hover:text-paper"
                }`}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-signal transition-transform duration-300 ${
                    active === l.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={`mailto:${profile.email}`} className="btn btn-solid hidden !min-h-10 !px-5 !py-2 text-sm sm:inline-flex">
            Email me
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white/95 backdrop-blur-xl md:hidden">
          <ul className="wrap flex flex-col py-6">
            {navLinks.map((l, i) => (
              <li key={l.href} className="border-b border-deep/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rise block py-5 font-display text-4xl font-semibold tracking-tight"
                  style={{ ["--d" as string]: `${i * 0.05}s` }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)} className="btn btn-solid w-full">
                Email me
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
