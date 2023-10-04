/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "regular": "Poppins-Regular",
      "medium": "Poppins-Medium",
      "bold": "Poppins-Bold",
      "extra-bold": "Poppins-ExtraBold",
    },
    extend: {
      colors: {
        primary: "#0B588D",
        second: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
};
