import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

class Layout extends React.PureComponent {
  render() {
    const { children, ...props } = this.props

    return <main {...props}>{children}</main>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
