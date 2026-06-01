import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "3xs": "350px",
      "2xs": "400px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sketch: ["Outfit", ...defaultTheme.fontFamily.mono],
        sans: ["Outfit", "Inter", ...defaultTheme.fontFamily.sans],
        greatVibes: ["Great Vibes", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        combac: {
          primary: "#7C3AED",
          "primary-content": "#FFFFFF",
          secondary: "#A78BFA",
          "secondary-content": "#FFFFFF",
          accent: "#10B981",
          "accent-content": "#FFFFFF",
          neutral: "#E2E8F0",
          "neutral-content": "#0F172A",
          "base-100": "#FFFFFF",
          "base-200": "#F8FAFC",
          "base-300": "#F1F5F9",
          "base-content": "#0F172A",
          info: "#7C3AED",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
      "dark",
      "combac",
    ],
  },
};
