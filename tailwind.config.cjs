/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0000FF",
      red: "#FF1F00",
      orange: "#FFD7B1",
      beige: "#FFF5EC",
      black: "#2D2D2D",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
