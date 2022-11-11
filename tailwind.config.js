const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-notoSans)", ...fontFamily.sans],
        sansDisplay: ["var(--font-notoDisplay)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
