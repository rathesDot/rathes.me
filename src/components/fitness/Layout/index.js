import React from "react"
import styled from "styled-components"

import { Reset } from "./reset"

const Layout = styled(({ children, ...otherProps }) => (
  <main {...otherProps}>
    <Reset />
    {children}
  </main>
))`
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  background-color: #1a202c;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: Inter, Lato, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  height: 100vh;
  overflow-y: auto;
  padding: 32px;
`

const Header = styled.header`
  margin-bottom: 48px;
`

const Main = styled.section`
  flex-grow: 1;
`

Layout.Header = Header
Layout.Main = Main

export { Layout }
