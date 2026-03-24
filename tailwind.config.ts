import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":     "var(--bg-primary)",
        "bg-secondary":   "var(--bg-secondary)",
        "bg-card":        "var(--bg-card)",
        "bg-elevated":    "var(--bg-elevated)",
        "accent-mint":    "var(--accent-mint)",
        "accent-green":   "var(--accent-green)",
        "accent-glow":    "var(--accent-glow)",
        "text-primary":   "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted":     "var(--text-muted)",
        border:           "var(--border)",
        "border-bright":  "var(--border-bright)",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
