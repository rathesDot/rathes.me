import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
  text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
`

export const Link = ({
  children,
  color = undefined,
  tint = "default",
  isCurrent = false,
  underlined = false,
  ...props
}) => {
  return (
    <StyledLink color={color} tint={tint} underlined={underlined} {...props}>
      {children}
    </StyledLink>
  )
}
