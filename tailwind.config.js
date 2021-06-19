const colors = require('tailwindcss/colors')

module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      'red-orange': {
        DEFAULT: '#FD2E24',
        '50': '#FFFFFF',
        '100': '#FFEFEE',
        '200': '#FEBFBC',
        '300': '#FE8E89',
        '400': '#FD5E57',
        '500': '#FD2E24',
        '600': '#EC0D02',
        '700': '#B90A02',
        '800': '#870701',
        '900': '#540501'
      },
      'klein-blue': {
        DEFAULT: '#001AA2',
        '50': '#899CFF',
        '100': '#6F86FF',
        '200': '#3C5BFF',
        '300': '#0930FF',
        '400': '#0022D5',
        '500': '#001AA2',
        '600': '#00126F',
        '700': '#000A3C',
        '800': '#000109',
        '900': '#000000'
      },
      yellow: { 
      DEFAULT: '#F4DE4D',
      '50': '#FFFFFF',
      '100': '#FFFFFF',
      '200': '#FDF9DD',
      '300': '#FAF0AD',
      '400': '#F7E77D',
      '500': '#F4DE4D',
      '600': '#F1D51D',
      '700': '#CEB50D',
      '800': '#9E8B0A',
      '900': '#6E6107'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
