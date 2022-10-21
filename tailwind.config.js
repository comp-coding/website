/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.{js,vue,ts}",
    "./components/*.{js,vue,ts}",
    "./pages/*.{js,vue,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require("daisyui", "flowbite/plugin")],
}
