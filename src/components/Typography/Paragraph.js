import React from "react"
import styled from "styled-components"
import TextBody from "./TextBody"

const Element = styled(TextBody)`
  font-weight: 400;
  line-height: 2;
  color: ${props =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.silver.default};
  margin-top: ${props => props.theme.spacing[3]};
  margin-bottom: ${props => props.theme.spacing[6]};
`

const Paragraph = ({ children, color, tint = "default", ...props }) => (
  <Element as="p" color={color} tint={tint} {...props}>
    {children}
  </Element>
)

export default Paragraph
