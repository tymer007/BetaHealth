/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#051E1E',
        customTeal: '#18CDCD',
        customOrange: '#D73D00',
      },

    },
  },
  plugins: [],
}