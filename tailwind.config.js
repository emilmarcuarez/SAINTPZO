/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Agrega tu fuente personalizada
      },
    },
    
  },
  plugins: [],
}
