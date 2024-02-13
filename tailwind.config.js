/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '35': '35px',
        '36': '36px'
      },
      fontFamily: {
        'primary' : ['Open Sans', 'sans-serif']
      },
      colors: {
        mainpink: '#e21b70',
        darkpink: '#c21760',
        hoverpink: '#fdf2f7',
        mainblack: '#333',
        graybar: '#dcdcdc',
        fbblue: '#1877f2',
        ggbar: '#dadce0',
        maingray: '#767676',
        graybg: '#cacaca'
      },
      screens: {
        // Responsive Screen Size Adjustment
        "6xs": "320px",
        "5xs": "360px",
        "4xs": "375px",
        "3xs": "390px",
        "2xs": "414px",
        "xs": "480px",
        "sm": "640px",
        'smd': "700px",
        "md": "768px",
        "lg-custom": "835px",
        "xlg": "999px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1360px",
        "3xl": "1440px",
        "4xl": "1560px",
        "5xl": "1600px",
        "6xl": "1680px",
        "7xl": "1920px",
        "8xl": "2560px",
        "9xl": "3440px",
      },
      boxShadow: {
        'elevationMD': '0px 0px 48px 0px rgba(0,0,0,0.24)',
        'elevationlow': ' 0px 0px 24px 0px rgba(0,0,0,0.16)',
        'btnshadow': '0 0.1rem 0.5rem rgba(0,0,0,.15)'
      }
    },
  },
  plugins: [],
}

