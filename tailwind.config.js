/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#64748b',
        dark: '#115e59',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
