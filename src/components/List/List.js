import React from "react"

import { Heading4 } from "../Typography"
import { Box } from "../Box"

const Item = () => null

const List = ({ title, children }) => (
  <Box>
    <Heading4>{title}</Heading4>
    {children}
  </Box>
)

List.Item = Item

export default List
