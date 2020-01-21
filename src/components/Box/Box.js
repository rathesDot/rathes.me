import React from "react"
import styled from "styled-components"

const Box = ({
  alignItems,
  backgroundColor,
  backgroundTint = "default",
  children,
  display,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  flexDirection,
  justifyContent,
  lineHeight,
  marginTop,
  marginBottom,
  maxWidth,
  minHeight,
  padding,
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
    ${fontWeight ? `font-weight: ${fontWeight};` : undefined}
    ${lineHeight ? `line-Height: ${lineHeight};` : undefined}
    ${props =>
      textColor
        ? `color: ${props.theme.colors[textColor][textTint]};`
        : undefined}
    ${props =>
      backgroundColor
        ? `background-color: ${props.theme.colors[backgroundColor][backgroundTint]};`
        : undefined}
    display: ${display ? `${display};` : "block"};
    margin-bottom: ${props => props.theme.spacing[marginBottom]};
    margin-top: ${props => props.theme.spacing[marginTop]};
    ${maxWidth ? `max-width: ${maxWidth}` : undefined};
    ${minHeight ? `min-height: ${minHeight}` : undefined};
    padding: ${props => props.theme.spacing[padding]};
    ${flexDirection ? `flex-direction: ${flexDirection}` : undefined};
    ${justifyContent ? `justify-content: ${justifyContent}` : undefined};
    ${alignItems ? `align-items: ${alignItems}` : undefined};
  `

  return <Element {...props}>{children}</Element>
}

export default Box
