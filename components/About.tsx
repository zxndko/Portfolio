import { aboutParagraphs, aboutPoints } from "@/lib/data";
import ResizeDemo from "@/components/ResizeDemo";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="band scroll-mt-10">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="about-title" className="h2" data-reveal>
            I like the details that make an interface feel right.
          </h2>
          <div className="muted mt-10 max-w-xl space-y-5 text-lg leading-relaxed" data-reveal>
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-10 grid max-w-xl gap-x-8 gap-y-3 sm:grid-cols-2" data-reveal>
            {aboutPoints.map((p) => (
              <li key={p} className="flex gap-3 border-t border-deep/15 pt-3 text-[0.95rem] leading-snug">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:pt-6" data-reveal>
          <ResizeDemo />
        </div>
      </div>
    </section>
  );
}
