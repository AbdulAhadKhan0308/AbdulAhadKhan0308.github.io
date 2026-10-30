const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: colors.emerald,
      },
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
