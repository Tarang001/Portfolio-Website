"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PERSON } from "@/data/content";

/**
 * Minimal sticky nav — name on the left, anchor links on the right.
 * Hides on mobile to keep the hero uncluttered; shows from sm: up.
 */
export function Nav() {
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Thinking", href: "#thinking" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-sm border-b border-stone-200/60"
    >
      <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
        {/* Name / home link */}
        <Link
          href="/"
          className="font-serif text-stone-900 text-lg font-semibold hover:text-accent transition-colors duration-200"
        >
          {PERSON.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        {/* Navigation links — hidden on very small screens */}
        <ul className="hidden sm:flex items-center gap-6" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}