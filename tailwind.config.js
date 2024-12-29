module.exports = {
  purge: ['./src/**/*.{html,js}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        darkRed: '#8B0000', // Custom dark red color
        // Add more custom colors if needed
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'], // Cursive font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};