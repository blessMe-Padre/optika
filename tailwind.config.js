/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#101010',
      'white': '#ffffff',
      'gray': '#808080',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'fontNokia': ['NokiaKokia', 'regular'],
      }
    }
  },
  plugins: [],
}

