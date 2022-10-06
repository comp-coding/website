/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.{js,vue,ts}",
    "./components/*.{js,vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
