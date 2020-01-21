import React from "react"
import styled from "styled-components"

const Heading3 = ({ children, element, color, tint = "default", ...props }) => {
  const Element = styled(element || "h3")`
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: 600;
    line-height: 1.45;
    color: ${props =>
      color
        ? props.theme.colors[color][tint]
        : props.theme.colors.white.default};
  `

  return <Element {...props}>{children}</Element>
}

export default Heading3
