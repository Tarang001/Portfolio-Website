import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/data/content";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { FadeIn } from "@/components/FadeIn";

// ── Static params for Next.js static generation ───────────
export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// ── Per-page SEO metadata ──────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.problem} — ${project.outcome}`,
  };
}

// ── Page component ─────────────────────────────────────────
export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  // 404 if slug not found
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="max-w-content mx-auto px-6 pt-28 pb-16">

        {/* ── Back link ─────────────────────────────────── */}
        <FadeIn>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-accent transition-colors mb-12 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            All projects
          </Link>
        </FadeIn>

        {/* ── Header ────────────────────────────────────── */}
        <FadeIn delay={0.05}>
          <span className="label-mono">Case Study</span>
          <h1 className="heading-display mt-3 mb-4">{project.name}</h1>
        </FadeIn>

        {/* ── Stack chips ───────────────────────────────── */}
        <FadeIn delay={0.1}>
          <ul className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-500 border border-stone-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* ── Summary row ───────────────────────────────── */}
        <FadeIn delay={0.12}>
          <div className="grid sm:grid-cols-3 gap-4 mb-12 p-5 bg-white border border-stone-200 rounded-lg">
            <SummaryCell label="Problem" text={project.problem} />
            <SummaryCell label="Solution" text={project.solution} />
            <SummaryCell label="Outcome" text={project.outcome} />
          </div>
        </FadeIn>

        <div className="divider mb-12" />

        {/* ── Long-form content ─────────────────────────── */}
        <div className="space-y-14 max-w-prose">

          <ContentSection title="Overview" content={project.overview} delay={0.14} />
          <ContentSection title="Architecture" content={project.architecture} delay={0.16} />
          <ContentSection title="Trade-offs" content={project.tradeoffs} delay={0.18} />
          <ContentSection title="What I'd Improve Next" content={project.nextSteps} delay={0.2} />

        </div>

        {/* ── Action buttons ────────────────────────────── */}
        <FadeIn delay={0.22}>
          <div className="flex flex-wrap gap-4 mt-14 pt-8 border-t border-stone-100">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-accent-light transition-colors"
            >
              View on GitHub ↗
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-stone-300 text-stone-600 text-sm font-medium px-5 py-2.5 rounded-md hover:border-stone-500 hover:text-stone-900 transition-colors"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </FadeIn>

      </main>
      <Footer />
    </>
  );
}

// ── Sub-components ─────────────────────────────────────────

function SummaryCell({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <span className="font-mono text-[10px] tracking-widest uppercase text-accent block mb-1.5">
        {label}
      </span>
      <p className="text-sm text-stone-600 leading-relaxed">{text}</p>
    </div>
  );
}

function ContentSection({
  title,
  content,
  delay,
}: {
  title: string;
  content: string;
  delay: number;
}) {
  // Split on double newline to render as paragraphs
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <FadeIn delay={delay}>
      <section aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <h2
          id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="font-serif text-xl text-stone-900 mb-4"
        >
          {title}
        </h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-stone-600 leading-[1.85] text-base">
              {p}
            </p>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}