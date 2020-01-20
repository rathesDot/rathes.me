import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import TextSmall from "../Typography/TextSmall"

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
  <div className="flex justify-between text-silver-darker mt-4 lg:max-w-4xl">
    <TextSmall>&copy; 2019 — Rathes Sachchithananthan</TextSmall>
    <TextSmall element={Link} to="/legal">
      Legal Information
    </TextSmall>
  </div>
)

export default Footer
