
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bark: "#1E1A17",
        cream: "#F5F5F5",
        gold: "#C5A880",
        tropical: "#2ECC71", // Warna aksen baru kita
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      textShadow: {
        glow: '0 0 8px rgba(197, 168, 128, 0.7)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
export default config;
