import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSON } from "@/data/content";

// ── Fonts ──────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

// ── SEO Metadata ───────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: `${PERSON.name} — Software Engineer`,
    template: `%s · ${PERSON.name}`,
  },
  description: PERSON.tagline,
  authors: [{ name: PERSON.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${PERSON.name} Portfolio`,
    title: `${PERSON.name} — Software Engineer`,
    description: PERSON.tagline,
  },
  twitter: {
    card: "summary",
    title: `${PERSON.name} — Software Engineer`,
    description: PERSON.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="bg-stone-50 text-stone-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}