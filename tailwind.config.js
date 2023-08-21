/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'quaapay-indigo': 'hsla(245, 75%, 55%, 1)',
      },
      colors: {
        'quaapay-indigo': 'hsla(245, 75%, 55%, 1)',
      },
    },
  },
  plugins: [],
}