/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        inputBorder: "#939393"
      },
      textColor: {
        inputTextColor: "#636363"
      },
      colors: {
        inputTextColor: "#636363"
      }
    },
  },
  plugins: [],
}