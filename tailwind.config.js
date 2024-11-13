/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3897f0', // Instagram blue
        secondary: '#262626', // Dark gray
        gray: '#3d3d3d', // Medium gray
        accent: '#f56040', // Instagram gradient orange
        text: '#fafafa', // Light gray background
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

