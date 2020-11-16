import styled from "styled-components"

export const Heading4 = styled.h4`
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
