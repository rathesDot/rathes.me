import React from "react"
import styled from "styled-components"

const Heading2 = ({ children, element, color, tint = "default", ...props }) => {
  const Element = styled(element || "h2")`
    font-size: ${props => props.theme.fontSize["lg"]};
    font-weight: 600;
    line-height: 1.66666666666;
    color: ${props =>
      color
        ? props.theme.colors[color][tint]
        : props.theme.colors.white.default};
  `

  return <Element {...props}>{children}</Element>
}

export default Heading2
