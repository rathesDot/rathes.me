import React from "react"
import styled from "styled-components"

const Element = styled.h3`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 600;
  line-height: 1.45;
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`

export const Heading3 = ({
  children,
  element,
  color,
  tint = "default",
  ...props
}) => (
  <Element as={element || "h3"} color={color} tint={tint} {...props}>
    {children}
  </Element>
)

export default Heading3
