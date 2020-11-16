import styled from "styled-components"

export const Separator = styled.hr`
  border-color: ${(props) => props.theme.colors.black.lighter};
  border-width: 2px;
  margin: ${(props) => props.theme.spacing[8]} 0;
  width: 24px;
`

export default Separator
