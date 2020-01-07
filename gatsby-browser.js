import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
require("prism-themes/themes/prism-atom-dark.css")

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
