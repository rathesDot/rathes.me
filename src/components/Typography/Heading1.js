import React from "react"
import styled from "styled-components"

const Heading1 = ({ children, element, color, tint = "default", ...props }) => {
  const Element = styled(element || "h1")`
    font-size: ${props => props.theme.fontSize["2xl"]};
    font-weight: 600;
    line-height: 1.35;
    color: ${props =>
      color
        ? props.theme.colors[color][tint]
        : props.theme.colors.white.default};
  `

  return <Element {...props}>{children}</Element>
}

export default Heading1
