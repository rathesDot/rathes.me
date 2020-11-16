import React from "react"

import { Box } from "../Box/Box"

export const Note = ({ children, ...props }) => (
  <Box
    element={"p"}
    backgroundColor="black"
    backgroundTint="light"
    marginTop={8}
    marginBottom={8}
    padding={4}
    textColor="silver"
    textTint="darker"
    fontSize="sm"
    {...props}
  >
    {children}
  </Box>
)
