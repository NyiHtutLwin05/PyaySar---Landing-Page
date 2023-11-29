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
    },
  },
  plugins: [],
};
