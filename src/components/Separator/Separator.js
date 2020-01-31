import styled from "styled-components"

const Separator = styled.hr`
  border-width: 2px;
  border-color: ${props => props.theme.colors.black.lighter};
  color: ${props => props.theme.colors.black.lighter};
  width: 24px;
  margin: ${props => props.theme.spacing[8]} 0;
`

export default Separator
