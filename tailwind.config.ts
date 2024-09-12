/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/stories/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'desktop': '1440px',
      'tablet': '768px',
    },
    fontSize: {
      'display-2xl': ['72px', { lineHeight: '90px', letterSpacing: '-2%' }],
      'display-xl': ['60px', { lineHeight: '72px', letterSpacing: '-2%' }],
      'display-lg': ['48px', { lineHeight: '60px', letterSpacing: '-2%' }],
      'display-md': ['36px', { lineHeight: '44px', letterSpacing: '-2%' }],
      'display-sm': ['30px', { lineHeight: '38px'}],
      'display-xs': ['24px', { lineHeight: '32px'}],
      'text-xl': ['20px', { lineHeight: '30px' }],
      'text-lg': ['18px', { lineHeight: '28px' }],
      'text-md': ['16px', { lineHeight: '24px' }],
      'text-sm': ['14px', { lineHeight: '20px' }],
      'text-xs': ['12px', { lineHeight: '18px' }],
    },
    fontFamily: {
      gotham: ['Gotham', 'sans-serif'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      normal: '300',
      bold: '700',
    },
    boxShadow: {
      'menu-shadow': '0px 3px 9px #00000029',
    },
    colors: {
      primary: {
        50: '#F2FEFF',
        75: '#D6F8FB',
        100: '#BAF3F7',
        200: '#85E9EF',
        300: '#58DEE6',
        400: '#36D1DA',
        500: '#1FC1CA',
        600: '#1AAEB7',
        700: '#109BAA',
        800: '#078699',
        900: '#007187',
        DEFAULT: '#1AAEB7',
      },
      secondary: '#004B44',
      tertiary: '#D94841',
      gray: {
        50: '#FFFFFF',
        75: '#FAFAFA',
        100: '#F5F5F5', // base bg
        200: '#EAEAEA',
        300: '#E1E1E1',
        400: '#CACACA',
        500: '#B3B3B3', // disabled text
        600: '#8E8E8E', // placeholder text
        700: '#6E6E6E', // text content
        800: '#4B4B4B', // text content
        900: '#2C2C2C', // text content
      },
      'unnamed-color-802f2d': '#802F2D',
      'unnamed-color-c6a1cf': '#C6A1CF',
      'unnamed-color-a05eb5': '#A05EB5',
      'unnamed-color-f0b323': '#F0B323',
      'unnamed-color-59cbe8': '#59CBE8',
      'unnamed-color-0085ca': '#0085CA',
      'unnamed-color-a72b2a': '#A72B2A',
      'unnamed-color-e1523d': '#E1523D',
      'unnamed-color-5a1e78': '#5A1E78',
      'unnamed-color-ed8b00': '#ED8B00',
      'unnamed-color-ffc72c': '#FFC72C',
      'unnamed-color-00a3e0': '#00A3E0',
      'unnamed-color-292929': '#292929',

      transparent: 'transparent',
    },
  },
  plugins: [],
};

export default config;