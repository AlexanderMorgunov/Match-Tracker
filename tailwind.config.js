const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tactic: ["TacticSans", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        "background-dark": "var(--background-dark)",
        foreground: "var(--foreground)",
        danger: "var(--danger)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
