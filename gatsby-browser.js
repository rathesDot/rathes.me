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
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
