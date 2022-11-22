/** @type {import('tailwindcss').Config} */

const { colors, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      ...colors,
      primary: '#5BC9BF',
      primaryLight: '#5bc9bfcc',
      danger: '#EC6A63',
      transparent: 'transparent',
      secondary: '#132238',
      secondaryLight: '#10305D',
      secondaryExtraLight: '#2960AB',
      black: '#000000',
      white: '#ffffff',
      gray: '#F3F4F5',
      lightGray: '#F3F7FA',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)', ...fontFamily.sans],
      },
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
