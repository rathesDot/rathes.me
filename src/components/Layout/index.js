import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Navigation from "../Navigation"

import "./styles.css"
import Footer from "../Footer"

class Layout extends React.PureComponent {
  render() {
    const { children, className, ...props } = this.props

    return (
      <main
        {...props}
        className={cx(className, "flex flex-col justify-between min-h-screen")}
      >
        <Navigation />
        <section className="flex-grow">{children}</section>
        <Footer />
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
