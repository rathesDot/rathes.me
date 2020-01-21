import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import Navigation from "../Navigation"
import Footer from "../Footer"
import { Box } from "../Box"

import theme from "../../../theme"

import "./styles.css"

const MainContainer = styled(Box)`
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
    <MainContainer
      backgroundColor="black"
      display="flex"
      element="main"
      flexDirection="column"
      fontFamily="default"
      justifyContent="space-between"
      minHeight="100vh"
      textColor="silver"
    >
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
