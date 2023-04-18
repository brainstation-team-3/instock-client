const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'instock-black': '#13182C',
        'instock-slate': '#5C667E',
        'instock-graphite': '#232940',
        'instock-green': '#158463',
        'instock-green-o': 'rgba(21, 132, 99, 0.07)',
        'instock-indigo': '#2E66E5',
        'instock-cloud': '#BDC5D5',
        'instock-light-grey': '#F7F8F9',
        'instock-red': '#C94515',
        'instock-red-o': 'rgba(201, 69, 21, 0.07)',
        'instock-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Titillium Web', 'Rubik', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'mh1': ['28px', '36px'],
        'mh2': ['20px', '28px'],
        'mh3': ['13px', '20px'],
        'mh4': ['11px', '16px'],
        'mp1': ['15px', '26px'],
        'mp2': ['13px', '20px'],
        'mp3': ['11px', '16px'],
        'h1': ['32px', '40px'],
        'h2': ['24px', '32px'],
        'h3': ['14px', '22px'],
        'h4': ['12px', '18px'],
        'p1': ['16px', '28px'],
        'p2': ['14px', '22px'],
        'p3': ['12px', '18px']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
