module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['checked'],
      backgroundColor: ['active', 'checked'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [],
}
