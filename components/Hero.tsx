import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import HeroName from "@/components/HeroName";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-32 sm:pb-20"
    >
      <div className="orbit" aria-hidden="true">
        <i />
        <i />
        <i />
        <b />
      </div>

      <div className="wrap relative">
        <p className="rise mb-6 flex items-center gap-3 text-sm sm:text-base" style={{ ["--d" as string]: "0.1s" }}>
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ionText opacity-40 motion-reduce:hidden" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ionText" />
          </span>
          Junior frontend developer
        </p>

        <HeroName lines={[profile.firstName, profile.lastName]} />

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p
              className="rise max-w-xl font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl"
              style={{ ["--d" as string]: "1.1s" }}
            >
              {profile.headline}
            </p>
            <p className="rise muted mt-4 max-w-lg text-base leading-relaxed sm:text-lg" style={{ ["--d" as string]: "1.25s" }}>
              I work on frontend development, UI implementation and responsive interfaces, and I pay close
              attention to usability and visual consistency.
            </p>
          </div>

          <div className="rise flex flex-col gap-3 sm:flex-row md:justify-end" style={{ ["--d" as string]: "1.4s" }}>
            <a href="#work" className="btn btn-solid">
              Explore my work
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-line">
              Get in touch
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
