/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        buttoncolor: "#e9bc69",
      },
      fontFamily: {
        body: [ "EB Garamond", "serif" ]
      },
    },
  },
  plugins: [],
};
