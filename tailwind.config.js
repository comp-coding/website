/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.{js,vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
