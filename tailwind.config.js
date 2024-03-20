/** @type {import('tailwindcss').Config} */
export default {
  // the content array tells Tailwind where to look for your classes and styles
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

