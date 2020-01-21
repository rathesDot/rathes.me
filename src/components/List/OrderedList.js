import React from "react"
import styled from "styled-components"

import { Box } from "../Box"

const OrderedListWrapper = styled(Box)`
  list-style-type: decimal;

  > li:not(:last-child) {
    margin: 0 0 ${props => props.theme.spacing[4]} 0;
  }

  p {
    margin: 0;
    font-size: ${props => props.theme.fontSize["sm"]};
    line-height: 1.45;
    color: ${props => props.theme.colors.silver.darker};
  }
`

const OrderedList = ({ children, ...props }) => (
  <OrderedListWrapper
    element="ol"
    backgroundColor="black"
    backgroundTint="light"
    marginTop={8}
    marginBottom={8}
    padding={6}
    paddingLeft={8}
    textColor="silver"
    textTint="darker"
    fontSize="sm"
    {...props}
  >
    {children}
  </OrderedListWrapper>
)

export default OrderedList
