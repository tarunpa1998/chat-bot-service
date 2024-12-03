/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6faf8',
          100: '#ccf5f1',
          200: '#99ebe3',
          300: '#66e0d5',
          400: '#33d6c7',
          500: '#11b9a6',
          600: '#0e9485',
          700: '#0b6f64',
          800: '#084a43',
          900: '#052521',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}