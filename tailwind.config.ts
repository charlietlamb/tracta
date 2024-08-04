import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const svgToDataUri = require('mini-svg-data-uri')

const colors = require('tailwindcss/colors')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        container: '1300px',
      },
      colors: {
        light: '#f5e9da',
        sec: '#475569',
        dark: '#2c3130',
        accent: '#C19A6B',
        border: '#576260',
        bg: '#daf5f0',
        main: '#7fbc8c',
        mainAccent: '#58a769',
      },
      borderRadius: {
        base: '4px',
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
        baseLight: '4px 4px 0px 0px rgba(245,233,218,1)',
        baseWhite: '4px 4px 0px 0px rgba(255,255,255,1)',
        baseBorder: '4px 4px 0px 0px rgba(87,98,96,1)',
        baseAccent: '4px 4px 0px 0px rgba(193, 154, 107, 1)',
        small: '2px 2px 0px 0px rgba(0,0,0,1)',
        smallLight: '2px 2px 0px 0px rgba(245,233,218,1)',
        smallWhite: '2px 2px 0px 0px rgba(255,255,255,1)',
        smallBorder: '2px 2px 0px 0px rgba(87,98,96,1)',
        smallAccent: '2px 2px 0px 0px rgba(193, 154, 107, 1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        boxShadowXSmall: '2px',
        boxShadowYSmall: '2px',
      },
      fontWeight: {
        base: '400',
        heading: '600',
      },
      fontFamily: {
        contract: ['var(--font-contract)'],
        larken: ['var(--font-larken)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        pulseSlow: 'pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      screens: {
        w900: { raw: '(max-width: 900px)' },
        w500: { raw: '(max-width: 500px)' },
      },
    },
  },
  plugins: [
    tailwindAnimate,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    },
  ],
}
export default config
