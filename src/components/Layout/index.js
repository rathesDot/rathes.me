import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Navigation from "../Navigation"

import "./styles.css"
import Footer from "../Footer"

const Layout = ({ children, className, contentClassName, ...props }) => (
  <main
    {...props}
    className={cx(
      className,
      "flex",
      "flex-col",
      "justify-between",
      "min-h-screen",
      "lg:ml-110px"
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
