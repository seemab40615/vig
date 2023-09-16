/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF993C',
        secondary: '#542800',
        background: '#000000',
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
