import styled from "styled-components"

export type Heading4Props = {
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

export const Heading4 = styled.h4<Heading4Props>`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 400;
  line-height: 2.5;
  text-transform: uppercase;
  letter-spacing: ${(props) => props.theme.letterSpacing.widest};
  props.color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`
