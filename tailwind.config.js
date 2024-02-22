/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primaryWhite:'#FACFCE',
        primaryBlue:'#23606E',
        bGreen:'#008F8C',
        aGreen:'#015958',
        darkGreen:'#023535',
        pRed :'#E02C18'
      },
      fontFamily : {
        ceveat : ["Caveat", "cursive"]
      }
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
}
