/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0C2C94',
        'brand-secondary': '#C0C0C0',
        'brand-dark': '#000000',
        'brand-light': '#ffffff',
        'brand-gray': '#6D6D6D',
        'facebook-brand': '#4267B2',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
      },
    },
  },
};
