import React from "react"

import { Heading4, TextBody } from "../Typography"
import { Box } from "../Box"

const Item = ({ children }) => (
  <Box>
    <TextBody element="p" color="white">
      {children}
    </TextBody>
  </Box>
)

const List = ({ title, children, ...props }) => (
  <Box {...props}>
    <Heading4>{title}</Heading4>
    {children}
  </Box>
)

List.Item = Item

export default List
