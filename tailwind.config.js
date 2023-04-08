/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./css/**/*.{js,ts,jsx,tsx}",
    "./images/**/*.{js,ts,jsx,tsx}",
    "./partials/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          900: "#101D2D",
          100: "#f1fef9",
        },
        blue: {
          500: "#5696FF",
          600: "#2174EA",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      "inter": ["var(--font-inter)"],
      "playfair-display": ["var(--font-playfair-display)"],
    },

    fontSize: {
      xs: ["0.75rem", {lineHeight: "1.5"}],
      sm: ["0.875rem", {lineHeight: "1.5715"}],
      base: ["1rem", {lineHeight: "1.5", letterSpacing: "-0.01em"}],
      lg: ["1.125rem", {lineHeight: "1.5", letterSpacing: "-0.01em"}],
      xl: ["1.25rem", {lineHeight: "1.5", letterSpacing: "-0.01em"}],
      "2xl": ["1.5rem", {lineHeight: "1.415", letterSpacing: "-0.01em"}],
      "3xl": ["2rem", {lineHeight: "1.3125", letterSpacing: "-0.01em"}],
      "4xl": ["2.25rem", {lineHeight: "1.25", letterSpacing: "-0.01em"}],
      "5xl": ["3rem", {lineHeight: "1.2", letterSpacing: "-0.01em"}],
      "6xl": ["4rem", {lineHeight: "1.1562", letterSpacing: "-0.01em"}],
    },
    letterSpacing: {
      tighter: "-0.02em",
      tight: "-0.01em",
      normal: "0",
      wide: "0.01em",
      wider: "0.02em",
      widest: "0.4em",
    },
  },
  plugins: [],
};
