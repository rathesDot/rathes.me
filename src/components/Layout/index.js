import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Navigation from "../Navigation"
import Footer from "../Footer"

import theme from "../../../theme"

import "./styles.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <main className="font-sans bg-black text-silver text-base p-4 md:p-8 flex flex-col justify-between min-h-screen lg:pl-142px">
      <Navigation />
      {children}
      <Footer />
    </main>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
