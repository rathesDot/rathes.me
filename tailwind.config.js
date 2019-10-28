const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      black: {
        lighter: "#1a1a1a",
        default: "#111",
      },
      silver: {
        default: "#CFD3DC",
        darker: "#CCC",
        darkest: "#AAA",
      },
      white: "#FFF",
    },
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      padding: {
        "142px": "142px",
      },
      maxWidth: {
        "345px": "345px",
        "480px": "480px",
        "570px": "570px",
      },
      screens: {
        xs: "375px",
      },
      width: {
        "700px": "700px",
      },
      inset: {
        4: "12px",
        "1/2": "50%",
      },
    },
  },
  variants: {},
  plugins: [],
}
