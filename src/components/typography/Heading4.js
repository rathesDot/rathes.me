import React from "react"
import styled from "styled-components"

const Element = styled.h4`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 400;
  line-height: 2.5;
  text-transform: uppercase;
  letter-spacing: ${(props) => props.theme.letterSpacing.widest};
  props.color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`

export const Heading4 = ({
  children,
  element = "h4",
  color,
  tint = "default",
  ...props
}) => (
  <Element as={element || "h4"} color={color} tint={tint} {...props}>
    {children}
  </Element>
)

export default Heading4
