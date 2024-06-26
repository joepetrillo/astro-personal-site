import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ["GeistMono", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        "wavy-pattern": "url('/patterns/wavy-pattern.svg')",
        "zigzag-pattern": "url('/patterns/zigzag-pattern.svg')",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [typography],
};
