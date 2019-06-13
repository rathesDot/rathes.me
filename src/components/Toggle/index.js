import React, { PureComponent } from "react"
import PropTypes from "prop-types"

class Toggle extends PureComponent {
  render() {
    const { onClick, ...props } = this.props

    return (
      <button onClick={onClick} {...props}>
        <svg
          width="30"
          height="25"
          viewBox="0 0 30 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path d="M0 0H30V5H0V0Z" fill="white" />
          <path d="M0 10H30V15H0V10Z" fill="white" />
          <path d="M30 20H0V25H30V20Z" fill="white" />
        </svg>
      </button>
    )
  }
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Toggle
