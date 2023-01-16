/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors:{
        primary: "#F5F5F5",
        secondary: "#979797",
        tertiary: "#818181",
        veryLightGray: "#E4E4E4",
        lightGray: "#F9F9F9",
        gray:"#E6E6E6",
        darkGray: "#737373",
        lightOrange: "#FFF5EE"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};