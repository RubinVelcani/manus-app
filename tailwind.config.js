module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#A7A7A9',
      'red': '#D71F27',
      'lightBlue': '#169CEF',
      'mediumBlue': '#1D91E3',
      'deepBlue': '#0C83D8',
      'menuBlue': '#3FACF9',
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
      'carousel-background': "url('/src/icons/carouselBackground.svg')",
    },
    fontFamily: {
      'mainFont': 'Oxygen, sans-serif'
    },
    minHeight: {
      'smiler': '30rem'
    },
    maxHeight: {
      'shape': '21.875rem',
      'how': '24rem'
    },
    extend: {
      fontSize: {
        'xxs': '0.625rem',
      },
      height: {
        'sideway-phone': '31.25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
