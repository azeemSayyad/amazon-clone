/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        maxi:"1500px",
        lg2:"1100px",
        lg1:"1052px",
        md2:"963px",
        md1:"850px",
        sm2:"690px",
        xsm1:"600px",
        end:"384px"
      },
      colors: {
        amazonclone: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
}