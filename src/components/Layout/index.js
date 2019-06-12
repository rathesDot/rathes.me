import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props

    return <main>{children}</main>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
