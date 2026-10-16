import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import Tilt from "@/components/Tilt";

/** Wireframe of the kinds of pages I built for PawPlan. An illustration, not a screenshot. */
function PawplanWireframe() {
  return (
    <figure>
      <Tilt>
        <div
          className="scan relative overflow-hidden rounded-2xl border border-deep/15 bg-white/70 p-4 shadow-[0_30px_80px_-30px_rgba(21,18,59,0.22)] sm:p-6"
          aria-hidden="true"
        >
          <div className="mb-4 flex items-center gap-1.5">
            <i className="h-2 w-2 rounded-full bg-deep/25" />
            <i className="h-2 w-2 rounded-full bg-deep/25" />
            <i className="h-2 w-2 rounded-full bg-deep/25" />
            <div className="ml-3 h-5 flex-1 rounded-full bg-deep/[0.06]" />
          </div>
          <div className="flex items-center justify-between border-b border-deep/10 pb-3">
            <div className="h-4 w-16 rounded bg-signal/80" />
            <div className="flex gap-3">
              <div className="h-2 w-10 rounded bg-deep/30" />
              <div className="h-2 w-10 rounded bg-deep/30" />
              <div className="hidden h-2 w-10 rounded bg-deep/30 sm:block" />
              <div className="h-2 w-10 rounded bg-deep/30" />
            </div>
          </div>
          <div className="grid gap-4 py-6 sm:grid-cols-[1.2fr_1fr]">
            <div className="space-y-3">
              <div className="h-5 w-4/5 rounded bg-deep/70" />
              <div className="h-5 w-3/5 rounded bg-deep/70" />
              <div className="h-2 w-full rounded bg-deep/20" />
              <div className="h-2 w-5/6 rounded bg-deep/20" />
              <div className="mt-4 h-9 w-32 rounded-full bg-signal" />
            </div>
            <div className="rounded-xl border border-deep/15 bg-deep/[0.05] p-3">
              <div className="mb-2 h-2 w-1/2 rounded bg-deep/40" />
              <div className="mb-2 h-7 rounded bg-deep/10" />
              <div className="mb-2 h-7 rounded bg-deep/10" />
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`h-6 rounded ${i === 5 ? "bg-ion/80" : "bg-deep/10"}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-deep/10 p-2">
                <div className="mb-2 aspect-[4/3] rounded bg-gradient-to-br from-indigo-300/40 to-signal/20" />
                <div className="h-2 w-3/4 rounded bg-deep/30" />
              </div>
            ))}
          </div>
        </div>
      </Tilt>
      <figcaption className="muted mt-7 text-sm">Wireframe illustration of the pages I built. Not a screenshot.</figcaption>
    </figure>
  );
}

/** Text case study panel for the internship project (no screenshots shared). */
function FocusList({ items }: { items: string[] }) {
  return (
    <figure>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="group flex items-center justify-between gap-4 border-b border-deep/15 py-4 font-display text-xl font-medium tracking-tight transition-[padding,color] duration-300 hover:pl-3 hover:text-ionText sm:text-2xl"
          >
            {item}
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-signal opacity-0 transition-opacity group-hover:opacity-100" />
          </li>
        ))}
      </ul>
      <figcaption className="muted mt-7 text-sm">A text case study. No screenshots or metrics are shared.</figcaption>
    </figure>
  );
}

function Chapter({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const id = `project-${project.id}`;

  return (
    <article aria-labelledby={id} className="grid gap-10 border-t border-deep/15 pt-10 lg:grid-cols-12 lg:gap-14 lg:pt-14">
      {/* Title column stays in view while you read the details */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <div className="lg:sticky lg:top-28" data-reveal>
          <p className="muted text-sm sm:text-base">{project.type}</p>
          <h3 id={id} className="mt-3 font-display text-[clamp(3.2rem,9vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.04em]" style={{ fontStretch: "82%" }}>
            {project.title}
          </h3>
          <p className="mt-3 font-display text-xl font-medium tracking-tight sm:text-2xl">{project.subtitle}</p>

          <p className="mt-6 border-l-2 border-signal pl-4 text-sm leading-relaxed sm:text-base">
            <strong className="font-semibold">{project.note.label}.</strong> {project.note.text}
          </p>

          {project.links.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.ariaLabel}
                  className={`btn ${i === 0 ? "btn-solid" : "btn-line"}`}
                >
                  {l.label}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className={`space-y-10 lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <div data-reveal>{project.id === "pawplan" ? <PawplanWireframe /> : <FocusList items={project.focus} />}</div>

        <div data-reveal className="grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="font-display text-lg font-semibold tracking-tight">What it is</h4>
            <p className="muted mt-3 leading-relaxed">{project.description}</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold tracking-tight">What I did</h4>
            <ul className="muted mt-3 space-y-2.5 leading-relaxed">
              {project.contributions.map((c) => (
                <li key={c} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-signal" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul data-reveal className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="band scroll-mt-10">
      <div className="wrap">
        <h2 id="work-title" className="h2 mb-16 max-w-3xl md:mb-24" data-reveal>
          Two projects, and the parts I built.
        </h2>
        <div className="space-y-20 md:space-y-25">
          {projects.map((p, i) => (
            <Chapter key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
