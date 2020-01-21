import React from "react"
import styled from "styled-components"

const Element = styled.span`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
`

const TextSmall = ({
  children,
  element,
  color,
  tint = "default",
  ...props
}) => (
  <Element as={element || "span"} color={color} tint={tint} {...props}>
    {children}
  </Element>
)

export default TextSmall
