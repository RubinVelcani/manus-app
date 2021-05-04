module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'lightBlue': '#169CEF',
      'mediumBlue': '#1D91E3',
      'deepBlue': '#0C83D8',
      'menuBlue': '#3FACF9',
      'gray': '#A7A7A9',
      'lightGray': '#F7F7F8',
      'mediumGray': '#C4C4C4',
      'formGray': '#8D8D92',
      'darkGray': '#464545',
      'profileGray': '#F6F3F3',
      'underscoreBlue': '#A2DCFD'
    },
    backgroundImage: {
      'mobile-footer': "url('/src/icons/footerBackground.svg')",
      'desktop-footer': "url('/src/icons/desktopFooterBackground.svg')",
    },
    fontFamily: {
      'mainFont': 'Oxygen, sans-serif'
    },
    extend: {
      fontSize: {
        'xxs': '0.625rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
