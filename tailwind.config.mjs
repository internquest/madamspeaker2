
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monaRegular: ['var(--font-monaregular)'],
        monaMedium: ['var(--font-monamedium)'],
        monaBold: ['var(--font-monabold)'],
        monaExpanded: ['var(--font-monaExpanded)'],
        monaExpandedbold: ['var(--font-monaExpandedbold)'],
        monaExpandedextrasbold: ['var(--font-monaExpandedextrabold)'],
        monaExpandedblack: ['var(--font-monaExpandedblack)'],
        monaCondensed: ['var(--font-monaCondensed)'],
        monaCondensedmed: ['var(--font-monaCondensedmed)'],
        monaCondensedmeditalic: ['var(--font-monaCondensedmeditalic)'],
        monaCondensedsemibold: ['var(--font-monaCondensedsemibold)'],
        monaCondensedbold: ['var(--font-monaCondensedbold)'],
      },
      screens:{
      'bmin1024maxh800': {'raw': '(min-width: 1024px) and (max-height: 800px)'},
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        typedjsBlink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'cursor-blink': 'typedjsBlink 0.7s infinite'
      }
    },
  },
  plugins: [],
};
