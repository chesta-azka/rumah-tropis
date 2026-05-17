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
        // Dominant Colors
        "deep-black": "#050505",
        "soft-black": "#0B0B0B",
        charcoal: "#111111",

        // Secondary Colors
        white: "#FFFFFF",
        "warm-off-white": "#FEF9ED",

        // Neutral Gray Text
        "neutral-gray": "#A7A7A7",

        // Supporting Brand Accent Colors
        "copper-bronze": "#B88A6E",
        "sandy-travertine": "#F5E6D3",
        "aged-teak": "#4D3C2F",
        "rainforest-moss": "#5B6A56",
        "filtered-sunbeam": "#FEF9ED",
      },
      fontFamily: {
        // Ganti dengan font yang Anda pilih atau sudah ada di project
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
