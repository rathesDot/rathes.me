import React from "react"
import styled from "styled-components"

const Element = styled.span`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
`

export const TextBody = ({
  children,
  element,
  color,
  tint = "default",
  ...props
}) => {
  return (
    <Element as={element || "span"} color={color} tint={tint} {...props}>
      {children}
    </Element>
  )
}

export default TextBody
