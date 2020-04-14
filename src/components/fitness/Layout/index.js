import React from "react"
import styled from "styled-components"

import { Reset } from "./reset"

const Layout = styled(({ children, ...otherProps }) => (
  <main {...otherProps}>
    <Reset />
    {children}
  </main>
))`
  background-color: #1a202c;
  color: #fff;
  display: flex;
  font-family: Inter, Lato, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  height: 100vh;
  overflow-y: auto;
`

export { Layout }
