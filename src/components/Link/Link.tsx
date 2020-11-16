import React from "react"
import styled from "styled-components"

const StyledLink = styled.a<LinkProps>`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
  text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
`

export type LinkProps = {
  color?: "white" | "black" | "silver"
  tint?:
    | "default"
    | "light"
    | "lighter"
    | "lightest"
    | "dark"
    | "darker"
    | "darkest"
  isCurrent?: boolean
  underlined?: boolean
}

export const Link: React.FC<LinkProps> = ({
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
