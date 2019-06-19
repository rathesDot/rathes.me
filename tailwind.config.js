const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      black: "#111",
      silver: "#CFD3DC",
      white: "#FFF",
    },
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  variants: {},
  plugins: [],
}
