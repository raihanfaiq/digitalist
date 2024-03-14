const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction : {
        'in-out-bounce' : 'cubic-bezier(.4,-0.33,.52,1.38)'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 },
        },
        dexa: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(3%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      fontFamily: {
        jost : ["var(--font-jost)"],
        sen : ["var(--font-sen)"]
      },
      colors: {
        'darkBlue-grad' : '#170972',
        'normalBlue-grad' : '#1B3ECC',
        'lightBlue-grad' : '#3CB9C3',
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        upAndDown : 'dexa 4s ease-in-out infinite'
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        }
      );
    }),
  ],
};
