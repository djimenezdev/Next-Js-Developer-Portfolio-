const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xss: '374px',
      xs: '425px',
      ...defaultTheme.screens,
    },
    extend: {
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        4000: '4000ms',
      },
      // use extend to add larger breakpoints
      screens: {
        lgTwo: '1059px',
      },
      boxShadow: {
        'shadow-white': '0px 1px 3px -1px  #FFFFFF',
      },
      backgroundImage: {
        'instagram-gradient':
          'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      },
    },
  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },

  plugins: [],
};
