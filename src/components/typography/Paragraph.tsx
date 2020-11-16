import styled from "styled-components"

export const Paragraph = styled.p<{ underlined: boolean }>`
  color: ${(props) => props.theme.colors.silver.default};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 400;
  line-height: 2;
  margin-top: ${(props) => props.theme.spacing[3]};
  margin-bottom: ${(props) => props.theme.spacing[6]};
  text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
`
