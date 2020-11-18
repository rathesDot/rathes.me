import styled from "styled-components"

export type Heading1Props = {
  color?: "white" | "black" | "silver"
  tint?:
    | "default"
    | "light"
    | "lighter"
    | "lightest"
    | "dark"
    | "darker"
    | "darkest"
}

export const Heading1 = styled.h1<Heading1Props>`
  font-size: ${(props) => props.theme.fontSize["2xl"]};
  font-weight: 600;
  line-height: 1.35;
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`
