import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Navigation from "../Navigation"
import Footer from "../Footer"

import "./styles.css"

const Layout = ({ children, ...props }) => (
  <main
    {...props}
    className={cx(
      "font-sans",
      "bg-black",
      "text-silver",
      "text-base",
      "p-4",
      "md:p-8",
      "flex",
      "flex-col",
      "justify-between",
      "min-h-screen",
      "lg:pl-142px"
    )}
  >
    <Navigation />
    {children}
    <Footer />
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contentClassName: PropTypes.string,
}

Layout.defaultProps = {
  contentClassName: "",
}

export default Layout
