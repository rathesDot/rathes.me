import React from "react"
import styled from "styled-components"

const Element = styled.h1`
  font-size: ${props => props.theme.fontSize["2xl"]};
  font-weight: 600;
  line-height: 1.35;
  color: ${props =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`

const Heading1 = ({ children, element, color, tint = "default", ...props }) => (
  <Element as={element || "h1"} color={color} tint={tint} {...props}>
    {children}
  </Element>
)

export default Heading1
