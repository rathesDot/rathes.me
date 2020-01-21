import React from "react"

import { Box } from "../Box"

const Note = ({ element, children, ...props }) => (
  <Box
    element={element || "p"}
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

export default Note
