import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs tracking-widest uppercase text-accent mb-4">404</span>
      <h1 className="font-serif text-4xl text-stone-900 mb-3">Page not found</h1>
      <p className="text-stone-500 text-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
      >
        ← Back to home
      </Link>
    </main>
  );
}