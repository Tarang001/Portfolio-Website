"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/content";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Case-study-style project card.
 * Shows: Problem → Solution → Outcome, stack chips, engineering challenge,
 * and links to GitHub + optional live demo.
 * The entire card is also a link to the dedicated project page.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.08 }}
      className="group relative bg-white border border-stone-200 rounded-lg p-7 hover:border-accent/40 hover:shadow-[0_4px_24px_rgba(193,125,60,0.08)] transition-all duration-300"
    >
      {/* Project number — subtle background label */}
      <span
        aria-hidden="true"
        className="absolute top-6 right-6 font-mono text-xs text-stone-300 select-none"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Name */}
      <h3 className="font-serif text-xl text-stone-900 mb-4 leading-tight pr-8">
        {project.name}
      </h3>

      {/* Problem → Solution → Outcome */}
      <div className="space-y-2.5 mb-5">
        <Row label="Problem" text={project.problem} />
        <Row label="Solution" text={project.solution} />
        <Row label="Outcome" text={project.outcome} />
      </div>

      {/* Engineering challenge callout */}
      <div className="bg-accent/5 border border-accent/15 rounded px-4 py-2.5 mb-5">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent block mb-0.5">
          Key Challenge
        </span>
        <p className="text-sm text-stone-600 leading-snug">{project.challenge}</p>
      </div>

      {/* Tech stack chips */}
      <ul className="flex flex-wrap gap-1.5 mb-6" role="list" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 border border-stone-200"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-accent hover:text-accent-light underline underline-offset-2 decoration-accent/40 transition-colors"
        >
          Read case study →
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
          aria-label={`${project.name} GitHub repository`}
        >
          GitHub ↗
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
            aria-label={`${project.name} live demo`}
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ── Helper ────────────────────────────────────────────────

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-[10px] tracking-widest uppercase text-stone-400 pt-0.5 w-16 shrink-0">
        {label}
      </span>
      <p className="text-sm text-stone-600 leading-relaxed">{text}</p>
    </div>
  );
}