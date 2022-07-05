/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    screens: {
      mml:'375px',
      ml:'425px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      xxl:'1536px',
    },
  },
  plugins: [],
}
