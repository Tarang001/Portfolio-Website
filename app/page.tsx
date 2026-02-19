import { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";
import { PERSON, PROJECTS, SKILLS, THINKING, TIMELINE } from "@/data/content";

export const metadata: Metadata = {
  title: `${PERSON.name} — Software Engineer`,
  description: PERSON.tagline,
};

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── Main content wrapper ─────────────────────────── */}
      <main className="max-w-content mx-auto px-6">
        {/* ════════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════════ */}
        <section
          id="hero"
          aria-label="Introduction"
          className="min-h-[88vh] flex flex-col justify-center pt-20 pb-16"
        >
          {/* Descriptor label */}
          <FadeIn delay={0.05}>
            <span className="label-mono">{PERSON.descriptor}</span>
          </FadeIn>

          {/* Name */}
          <FadeIn delay={0.15}>
            <h1 className="heading-display mt-4 mb-6">
              {PERSON.name}
            </h1>
          </FadeIn>

          {/* Positioning statement */}
          <FadeIn delay={0.25}>
            <p className="font-serif text-xl sm:text-2xl text-stone-500 max-w-[520px] leading-relaxed mb-10">
              {PERSON.positioning}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.35}>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-white font-sans text-sm font-medium px-5 py-2.5 rounded-md hover:bg-accent-light transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View Projects
              </a>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 border border-stone-300 px-5 py-2.5 rounded-md hover:border-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </FadeIn>

          {/* Quiet location note */}
          <FadeIn delay={0.45}>
            <p className="mt-12 font-mono text-xs text-stone-400">{PERSON.location}</p>
          </FadeIn>
        </section>

        {/* ════════════════════════════════════════════════
            2. PROJECTS
        ════════════════════════════════════════════════ */}
        <section id="projects" aria-labelledby="projects-heading" className="py-20">
          <FadeIn>
            <div className="mb-12">
              <span className="label-mono">Work</span>
              <h2 id="projects-heading" className="heading-section mt-3 mb-3">
                Selected Projects
              </h2>
              <div className="divider" />
              <p className="text-stone-500 text-sm mt-4 max-w-prose leading-relaxed">
                Each one started with a real problem. Below is what I built, why, and what I
                learned — not just a list of technologies.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-1">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            3. SKILLS
        ════════════════════════════════════════════════ */}
        <section id="skills" aria-labelledby="skills-heading" className="py-20 border-t border-stone-100">
          <FadeIn>
            <div className="mb-10">
              <span className="label-mono">Capabilities</span>
              <h2 id="skills-heading" className="heading-section mt-3 mb-3">
                Skills
              </h2>
              <div className="divider" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8">
            <SkillBucket
              label="Strong"
              description="Use these daily. Know the edges."
              skills={SKILLS.strong}
              delay={0.05}
            />
            <SkillBucket
              label="Working Knowledge"
              description="Can ship with these. Learning depth."
              skills={SKILLS.working}
              delay={0.15}
            />
            <SkillBucket
              label="Exploring"
              description="Building mental models. Not production yet."
              skills={SKILLS.exploring}
              delay={0.25}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            4. HOW I THINK
        ════════════════════════════════════════════════ */}
        <section id="thinking" aria-labelledby="thinking-heading" className="py-20 border-t border-stone-100">
          <FadeIn>
            <div className="mb-10">
              <span className="label-mono">Process</span>
              <h2 id="thinking-heading" className="heading-section mt-3 mb-3">
                How I Think
              </h2>
              <div className="divider" />
            </div>
          </FadeIn>

          <div className="max-w-prose space-y-5">
            {THINKING.paragraphs.map((para, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <p className="text-stone-600 leading-[1.8] text-base">{para}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            5. EXPERIENCE / EDUCATION
        ════════════════════════════════════════════════ */}
        <section id="experience" aria-labelledby="experience-heading" className="py-20 border-t border-stone-100">
          <FadeIn>
            <div className="mb-10">
              <span className="label-mono">Background</span>
              <h2 id="experience-heading" className="heading-section mt-3 mb-3">
                Experience &amp; Education
              </h2>
              <div className="divider" />
            </div>
          </FadeIn>

          {/* Timeline */}
          <ol className="relative space-y-0 ml-3" aria-label="Timeline">
            {TIMELINE.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <li className="relative pl-8 pb-10 last:pb-0">
                  {/* Vertical line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 bottom-0 w-px bg-stone-200 last:hidden"
                  />
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[-3.5px] top-1.5 w-2 h-2 rounded-full bg-accent"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1.5">
                    <span className="font-mono text-xs text-accent">{item.year}</span>
                    <h3 className="font-medium text-stone-900 text-sm">
                      {item.title}{" "}
                      <span className="text-stone-400 font-normal">· {item.org}</span>
                    </h3>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed max-w-prose">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ── Skill Bucket sub-component ────────────────────────────

function SkillBucket({
  label,
  description,
  skills,
  delay,
}: {
  label: string;
  description: string;
  skills: string[];
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div>
        <h3 className="font-serif text-base text-stone-900 mb-1">{label}</h3>
        <p className="text-xs text-stone-400 mb-4 leading-snug">{description}</p>
        <ul className="flex flex-wrap gap-2" role="list">
          {skills.map((skill) => (
            <li
              key={skill}
              className="font-mono text-xs px-2.5 py-1 rounded bg-stone-100 text-stone-600 border border-stone-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}