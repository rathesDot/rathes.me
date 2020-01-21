import React from "react"
import styled from "styled-components"

const Box = ({
  children,
  element,
  fontFamily,
  fontSize,
  marginTop,
  marginBottom,
  maxWidth,
  textColor,
  textTint = "default",
  ...props
}) => {
  const Element = styled(element || "div")`
    ${props =>
      fontFamily
        ? `font-family: ${props.theme.fontFamily[fontFamily]};`
        : undefined};
    ${props =>
      fontSize ? `font-size: ${props.theme.fontSize[fontSize]};` : undefined}
    ${props =>
      textColor
        ? `color: ${props.theme.colors[textColor][textTint]};`
        : undefined}
    margin-bottom: ${props => props.theme.spacing[marginBottom]};
    margin-top: ${props => props.theme.spacing[marginTop]};
    ${maxWidth ? `max-width: ${maxWidth}` : undefined};
  `

  return <Element {...props}>{children}</Element>
}

export default Box
