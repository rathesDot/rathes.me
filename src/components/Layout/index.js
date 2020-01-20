import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import Navigation from "../Navigation"
import Footer from "../Footer"

import theme from "../../../theme"

import "./styles.css"

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.black.default};
  color: ${props => props.theme.colors.silver.default};
  font-family: ${props => props.theme.fontFamily.default};
  min-height: 100vh;
  padding: ${props => props.theme.spacing["4"]};

  @media (min-width: 768px) {
    padding: 60px 0 32px 60px;
  }

  @media (min-width: 1200px) {
    padding: 110px 0 32px 110px;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MainContainer>
      <Navigation />
      {children}
      <Footer />
    </MainContainer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
