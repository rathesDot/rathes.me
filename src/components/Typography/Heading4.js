import React from "react"
import styled from "styled-components"

const Heading4 = ({ children, element, color, tint = "default", ...props }) => {
  const Element = styled(element || "h4")`
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: 400;
    line-height: 2.5;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.letterSpacing.widest};
    color: ${props =>
      color
        ? props.theme.colors[color][tint]
        : props.theme.colors.white.default};
  `

  return <Element {...props}>{children}</Element>
}

export default Heading4
