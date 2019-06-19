const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      black: "#111",
      silver: {
        default: "#CFD3DC",
        darker: "CCC",
      },
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
