import { skillGroups } from "@/lib/data";

const all = skillGroups.flatMap((g) => g.skills);

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="band scroll-mt-5">
      {/* Decorative ribbon: repeats the skills listed below, hidden from screen readers */}
      <div className="marquee-wrap overflow-hidden border-y border-deep/15 py-5" aria-hidden="true">
        <div className="marquee font-display text-3xl font-medium tracking-tight sm:text-5xl" style={{ fontStretch: "85%" }}>
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {all.map((s) => (
                <span key={`${n}-${s}`} className="flex items-center">
                  <span className="px-5 text-paper/90 sm:px-8">{s}</span>
                  <span className="text-signal">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap mt-20 md:mt-28">
        <h2 id="skills-title" className="h2 mb-14 max-w-2xl" data-reveal>
          What I work with.
        </h2>
        <div>
          {skillGroups.map((g) => (
            <div key={g.title} data-reveal className="grid gap-4 border-t border-deep/15 py-8 md:grid-cols-12 md:gap-8">
              <h3 className="font-display text-xl font-semibold tracking-tight md:col-span-4 md:text-2xl">{g.title}</h3>
              <ul className="flex flex-wrap gap-2 md:col-span-8" aria-label={`${g.title} skills`}>
                {g.skills.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border-t border-deep/15" />
        </div>
      </div>
    </section>
  );
}
