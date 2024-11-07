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
      white: '#ffffff',
      defaultBlack: '#262626',
      gold: '#E4C47E',
      lightGray: '#f1f1f1',

      // ---------------------------------
      'default-black': '#000000',
      'dark-blue': '#152033',
      'blue': '#192436',
      'orange': 'orange',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'bodyFont': ['archangelsk', 'regular'],
      }
    }
  },
  plugins: [],
}