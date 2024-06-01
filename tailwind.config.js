/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        merriweather: ['Merriweather'],
        montserrat: ['Montserrat'],
        roboto: ['Roboto'],
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
