/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.jsx',
    './src/pages/**/*.jsx',
    './src/components/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        tipcalc: {
          accent: '#26C2AE',
          dark: '#00474B',
          background: '#C5E4E7',
          slash: '#7F9D9F',
          inputtitle: '#5E7A7D',
          inputicon: '#9EBBBD',
          inputbg: '#F3F9FA',
          active: '#9FE8DF',
          disabled: '#0D686D',
          red: '#E17457',
        },
        eqr: {
          dark: '#191826',
          light: '#FCFAF9',
          red: '#FA7453',
        },
      },
      fontFamily: {
        header: ['Raleway'],
        tipcalc: ['"Space Mono"'],
        equalizer: ['"IBM Plex Sans"'],
        loopbig: ['"Josefin Sans"'],
        loopsmall: ['Alata'],
      },
      screens: {
        tablet: '600px',
        desktop: '1200px',
        headermiddle: '438px',
        headerbig: '768px',
        headerlarge: '826px',
        headerhuge: '1286px',
      },
      spacing: {
        tcbuttonmobile: '48.7%',
        tcbuttondesktop: '31%',
      },
      keyframes: {
        borderanimation: {
          '0%': { 'border-bottom-color': 'transparent' },
          '100%': { 'border-bottom-color': '#E0F2FE' },
        },
      },
      animation: {
        borderanimation: 'borderanimation 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
