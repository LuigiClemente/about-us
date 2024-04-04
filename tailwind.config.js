/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "sky-blue": "#F5FAFF",
      },
      textColor: {
        gray: "#7D7D7D",
      },
      fontFamily: {
        "open-sans": "Open Sans",
        PlayFair: "Playfair Display",
      },
    },
  },
  plugins: [],
};
