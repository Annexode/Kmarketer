/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        primaryColor: ["#FFA62B"],
        darkBackgroundColor: ["#252B42"],
        secondTextColor: ["#737373"],
      },
      backgroundImage: {
        mainCover: "url('/assets/Main_cover.svg')",
        contactPageCover: "url('/assets/background.png')",
      },
    },
  },
  plugins: [],
};
