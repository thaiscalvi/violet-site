// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{mdx}" 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F2F2F2",
          text: "#6E6E6E",
          hover: "#2E2E2E",
        },
      },
    },
  },
  plugins: [],
};

export default config;