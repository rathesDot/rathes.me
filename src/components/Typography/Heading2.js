import React from "react"
import styled from "styled-components"

const Element = styled.h2`
  font-size: ${props => props.theme.fontSize["lg"]};
  font-weight: 600;
  line-height: 1.66666666666;
  color: ${props =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`

const Heading2 = ({ children, element, color, tint = "default", ...props }) => (
  <Element as={element || "h2"} color={color} tint={tint} {...props}>
    {children}
  </Element>
)

export default Heading2
