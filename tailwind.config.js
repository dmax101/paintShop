/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bigelow-Rules": ["Bigelow Rules", "cursive"],
        "Merriweather": ["Merriweather", "serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}

