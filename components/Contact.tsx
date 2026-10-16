import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const hasLinkedin = profile.linkedin.trim().length > 0;
  const link = "group inline-flex items-center gap-2 border-b border-deep/30 pb-1 text-lg transition-colors hover:border-signal hover:text-signalText";

  return (
    <section id="contact" aria-labelledby="contact-title" className="band scroll-mt-10 !pb-16">
      <div className="wrap">
        <h2 id="contact-title" className="h2 max-w-3xl" data-reveal>
          Want to work together? Say hello.
        </h2>
        <p className="muted mt-6 max-w-lg text-lg leading-relaxed" data-reveal>
          I&apos;m looking for a junior frontend role. If your team cares about clear, usable interfaces, I&apos;d like to hear from you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          data-reveal
          className="group mt-12 block break-words font-display text-[clamp(1.5rem,5.2vw,4rem)] font-semibold leading-tight tracking-tight"
          style={{ fontStretch: "88%" }}
        >
          <span className="bg-gradient-to-r from-signal to-signal bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_3px]">
            {profile.email}
          </span>
          <ArrowUpRight className="ml-2 inline-block text-signal transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={36} aria-hidden="true" />
        </a>

        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-5" data-reveal>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link} aria-label="Chompoonuch on GitHub (opens in a new tab)">
              GitHub
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            {hasLinkedin ? (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link} aria-label="Chompoonuch on LinkedIn (opens in a new tab)">
                LinkedIn
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : (
              <span className="muted inline-flex items-center gap-2 border-b border-dashed border-deep/25 pb-1 text-lg">
                LinkedIn: link coming soon
              </span>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
