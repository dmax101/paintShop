/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bigelow-Rules": ["Bigelow Rules", "cursive"]
      }
    },
  },
  plugins: [require("daisyui")],
}

