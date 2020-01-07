import React from "react"
import { ThemeProvider } from "styled-components"
require("prism-themes/themes/prism-atom-dark.css")

const theme = {}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
