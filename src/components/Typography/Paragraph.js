import React from "react"
import styled from "styled-components"
import TextBody from "./TextBody"

const Paragraph = ({ children, color, tint = "default", ...props }) => {
  const Element = styled(TextBody)`
    font-weight: 400;
    line-height: 2;
    color: ${props =>
      color
        ? props.theme.colors[color][tint]
        : props.theme.colors.silver.default};
    margin-top: ${props => props.theme.spacing[3]};
    margin-bottom: ${props => props.theme.spacing[6]};
  `

  return (
    <Element element="p" {...props}>
      {children}
    </Element>
  )
}

export default Paragraph
