import styled from "styled-components"

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

export const Link = styled.a<LinkProps>`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint || "default"]
      : undefined};
  text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
`
