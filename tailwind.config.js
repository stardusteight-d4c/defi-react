/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  fontFamily: {
    sans: 'Roboto Condensed, sans-serif',
  },
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#00d8ff',
        },
        purple: {
          300: '#6a00ff',
        },
      },
    },
  },
  plugins: [],
}
