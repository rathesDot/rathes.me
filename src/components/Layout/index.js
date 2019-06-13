import React from "react"
import PropTypes from "prop-types"

import Navigation from "../Navigation"

import "./styles.css"

class Layout extends React.PureComponent {
  render() {
    const { children, ...props } = this.props

    return (
      <main {...props}>
        <Navigation />
        {children}
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
