import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Single accent color: a warm amber that feels grounded, not flashy
      colors: {
        accent: {
          DEFAULT: "#C17D3C",
          light: "#D4965A",
          dim: "#C17D3C1A",
        },
      },
      fontFamily: {
        // Editorial serif for headings — serious, literary
        serif: ["'Playfair Display'", "Georgia", "serif"],
        // Clean mono-adjacent sans for body — technical but readable
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        // Monospace for code snippets
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "780px",
        wide: "1100px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;