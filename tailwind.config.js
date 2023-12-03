module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    colors: {
      base: { color: '#F7F7F7' },
      darkblue: { color: '#280FCC' },
      lightblue: { color: '#1FC9FF' },
      cream: { color: '#FFF5EA' },
      primary: {
        DEFAULT: '#FFF5EA',
        dark: '#280FCC',
      },
      secondary: '#1FC9FF',
      tenary: {
        DEFAULT: '#280FCC',
        dark: '#FFF5EA',
      },
    },
    extend: {
      backgroundImage: {
        hero: 'radial-gradient(100.84% 196.92% at 104.03% 105.01%, #C8FEAC 0%, #009BCC 27.36%, #280FCC 68.58%, #13075F 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
