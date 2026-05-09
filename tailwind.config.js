/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        Krankenhaus: '#A68D53',
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        germania: ['"Germania One"', 'serif'],
      },
    },
  },
  plugins: [],
}
