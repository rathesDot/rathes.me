import React from "react"
import { ThemeProvider } from "styled-components"
require("prism-themes/themes/prism-atom-dark.css")

const theme = {
  colors: {
    black: {
      lightest: "#454545",
      lighter: "#252525",
      default: "#111",
    },
    silver: {
      default: "#CFD3DC",
      darker: "#CCC",
      darkest: "#AAA",
    },
    white: "#FFF",
  },
  fontFamily: {
    default: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].concat(" "),
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  letterSpacing: {
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
  },
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
