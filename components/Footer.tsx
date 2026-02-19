import { PERSON } from "@/data/content";

/**
 * Minimal footer — links and copyright.
 * Server component (no interactivity needed).
 */
export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: PERSON.github },
    { label: "LinkedIn", href: PERSON.linkedin },
    { label: "Email", href: `mailto:${PERSON.email}` },
  ];

  return (
    <footer className="border-t border-stone-200 py-10 mt-24">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Links */}
        <nav aria-label="Social links">
          <ul className="flex gap-6" role="list">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm text-stone-400 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="font-mono text-xs text-stone-400">
          © {year} {PERSON.name}
        </p>
      </div>
    </footer>
  );
}