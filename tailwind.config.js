const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        defaultSans: fontFamily.sans,
        sans: ["var(--font-switzer)", ...fontFamily.sans],
      },
    },
  },
}
