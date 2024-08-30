/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-now': ['"Helvetica_Now_Display"', 'sans-serif']
      }
    }
  },
  plugins: [],
}

