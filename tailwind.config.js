/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  fontFamily: {
    sans: 'Roboto, sans-serif',
  },
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#00feba',
        },
        purple: {
          300: '#6a00ff',
        },
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
