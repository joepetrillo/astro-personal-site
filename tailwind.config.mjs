import defaultTheme from "tailwindcss/defaultTheme";

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
      },
      screens: {
        xs: "320px",
      },
    },
  },
};
