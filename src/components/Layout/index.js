import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Navigation from "../Navigation"
import Footer from "../Footer"

import "./styles.css"

const Layout = ({ children, contentClassName, ...props }) => (
  <main
    {...props}
    className={cx(
      "p-4",
      "md:p-8",
      "flex",
      "flex-col",
      "justify-between",
      "min-h-screen",
      "lg:pl-110px"
    )}
  >
    <Navigation />
    <section className={cx(contentClassName, "flex-grow")}>{children}</section>
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
