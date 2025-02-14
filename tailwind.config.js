/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      notLast: "not-last",
      width: {
        defaultwidth: "90%",
        widthmenu: "60%",
      },
      maxWidth: {
        mwidth1: "1600px",
        mwidth2: "1500px",
        mediumwidth: "1300px",
        width1000: "1000px",
        widthCard550: "550px",
        widthCard450: "450px",
        widthCard350: "350px",
        widthCard300: "300px",
        widthCard: "600px",
        widthCard1: "700px",
      },
      maxHeight: {
        h750: "750px",
        h400: "400px",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#C5C4C4",
        orange: "#ff4c2e",
        lightOrange: "#F8D078",
        lightGray: "#E8E7E7",
      },
      flexBasis: {
        30: "30%",
        33: "33%",
        16: "16%",
        48: "48%",
        "2/7": "52%",
        "3/7": "35%",
        10: "10%",
        28: "32%",
        70: "70%",
        8: "9.8%",
      },
    },
  },
  plugins: [],
};
