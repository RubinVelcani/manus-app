module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
      'lightBlue': '#169CEF',
      'mediumBlue': '#1D91E3',
      'deepBlue': '#0C83D8',
      'gray': '#A7A7A9'
    },
    fontSize: {
      'xxs': '0.625rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
