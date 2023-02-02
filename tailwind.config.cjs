/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', "san-serif"],
        'fugaz': ['Fugaz One', "cursive"]
      }
    },
  },
  plugins: [],
};
