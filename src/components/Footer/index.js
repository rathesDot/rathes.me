import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import TextSmall from "../Typography/TextSmall"
import { Box } from "../Box"

const Separator = styled.span`
  display: inline-block;
  margin: 0 8px;
  color: ${props => props.theme.colors.silver.default};
  font-size: ${props => props.theme.fontSize.xs};
  font-family: ${props => props.theme.fontFamily.default};

  &:before {
    content: "/";
  }
`

const Footer = () => (
  <Box>
    <TextSmall color="silver">&copy; 2019 — Rathes Sachchithananthan</TextSmall>
    <Separator />
    <TextSmall color="silver" element={Link} to="/legal">
      Legal Information
    </TextSmall>
  </Box>
)

export default Footer
