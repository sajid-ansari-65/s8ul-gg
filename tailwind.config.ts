import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        s8ul: {
          black: "#0A0A0A",
          dark: "#111111",
          surface: "#141414",
          border: "#1a1a1a",
          gold: "#FFD700",
          "gold-dim": "#B8960A",
          red: "#E63946",
          "red-dim": "#9E2832",
          cyan: "#00f0ff",
        },
      },
      fontFamily: {
        head: ["'Orbitron'", "monospace"],
        body: ["'Rajdhani'", "sans-serif"],
        alt: ["'Exo 2'", "sans-serif"],
      },
      fontSize: {
        "display-xl": "clamp(2.8rem, 9vw, 6rem)",
        "display-lg": "clamp(1.5rem, 4vw, 2.5rem)",
        "display-md": "clamp(1.2rem, 3vw, 1.8rem)",
      },
      keyframes: {
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 215, 0, 0.3)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(255, 215, 0, 0.2)" },
        },
        "pulse-red": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(230, 57, 70, 0.3)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(230, 57, 70, 0.2)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gold-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
      },
      animation: {
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "pulse-red": "pulse-red 2s ease-in-out infinite",
        "scan-line": "scan-line 3s linear infinite",
        flicker: "flicker 0.15s infinite",
        marquee: "marquee 22s linear infinite",
        "gold-shimmer": "gold-shimmer 4s linear infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-dot": "pulse-dot 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
