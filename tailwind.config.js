/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1024px" },
        lg: { min: "768px", max: "1023px" },
        md: { min: "426px", max: "767px" },
        sm: { min: "321px", max: "425px" },
        xs: { max: "320px" },
      },
      colors: {
        background: "#020617",
        emphisis: "#71ff7b",
        dark: "#141C2F",
        white: "#E6E6E6",
        formBorder: "#374151",
      },
    },
  },
  plugins: [],
};
