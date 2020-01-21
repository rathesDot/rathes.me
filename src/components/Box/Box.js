import React from "react"
import styled from "styled-components"

const Box = ({
  children,
  element,
  fontFamily,
  marginTop,
  marginBottom,
  maxWidth,
  ...props
}) => {
  const Element = styled(element || "div")`
    ${props =>
      fontFamily
        ? `font-family: ${props.theme.fontFamily[fontFamily]};`
        : undefined}
    margin-bottom: ${props => props.theme.spacing[marginBottom]};
    margin-top: ${props => props.theme.spacing[marginTop]};
    ${maxWidth ? `max-width: ${maxWidth}` : undefined};
  `

  return <Element {...props}>{children}</Element>
}

export default Box
