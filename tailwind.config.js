/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
    sans: ["IBM Plex Mono", "monospace"],
    serif: ["Gridular", "sans-serif"],
    lato: ["Lato", "sans-serif"],
  },
    extend: {
      screens: {
        xxl: "1440px",
      },
      width: {
        maxSize: "1440px",},
      maxWidth: {
        maxSize: "1440px",
      },
      colors: {
        primary: "#FF993C",
        secondary: "#542800",
        black: "#100A04",
      },
      fontFamily: {
        gridular: ["Gridular", "sans-serif"],
        "plex-mono": ["IBM Plex Mono", "monospace"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
