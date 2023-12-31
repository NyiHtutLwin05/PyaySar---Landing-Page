/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SGbold: ["Space Grotesk Bold"],
        SGsemibold: ["Space Grotesk Semibold"],
        SGregular: ["Space Grotesk Regular"],
        SGmedium: ["Space Grotesk Medium"],
        SGlight: ["Space Grotesk Light"],
      },
      fontSize: {
        xs: "9px",
        sm: "13px",
        base: "16px",
        lg: "19px",
        xl: "22px",
        "2xl": "23px",
        "3xl": "25px",
        "4xl": "28px",
        "5xl": "40px",
        "6xl": "48px",
      },
      lineHeight: {
        3: "14px",
        4: "17px",
        5: "20px",
        6: "24px",
        7: "29px",
        8: "29.35px",
        9: "35px",
        10: "38px",
        11: "42px",
        12: "50px",
        13: "51px",
        14: "60px",
        15: "72px",
      },
      colors: {
        primary: "#1D4ED8",
        black: "#040404",
        white: "#FBFBFB",
        blue: "#2D36FB",
        gray: "#757572",
        neutral: {
          600: "#6F6C90",
          800: "#170F49",
        },
      },
      borderRadius: {
        rounded: "4px",
        sm: "6px",
        md: "8px",
        lg: "9px",
        xl: "10px",
        "2xl": "15px",
        "3xl": "16px",
        full: "9999px",
      },
      letterSpacing: {
        wide: "0.12em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};
