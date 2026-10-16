import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="band scroll-mt-10 !pt-0">
      <div className="wrap">
        <h2 id="experience-title" className="h2 mb-14" data-reveal>
          Experience.
        </h2>

        <article data-reveal className="grid gap-8 border-t border-deep/15 pt-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="font-display text-xl font-semibold tracking-tight">{experience.period}</p>
            <p className="muted mt-1">{experience.company}</p>
          </div>
          <div className="lg:col-span-8">
            <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{experience.position}</h3>
            <ul className="muted mt-6 max-w-2xl space-y-3 text-lg leading-relaxed">
              {experience.highlights.map((h) => (
                <li key={h} className="flex gap-4">
                  <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-signal" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
