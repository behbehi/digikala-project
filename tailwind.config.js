/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      'digiblue': '#22d3ee';
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
}

