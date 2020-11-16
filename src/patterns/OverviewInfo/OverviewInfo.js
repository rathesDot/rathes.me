import React from "react"
import styledComponent from "styled-components"

import { styled } from "../../../stitches.config"

import { Box, Link, TextBody, TextSmall } from "../../components"

const Separator = styledComponent.span`
  width: 24px;
  display: block;
  margin: 16px 0;
  height: 2px;
  background-color: ${(props) => props.theme.colors.black.lighter};
`

const Title = styled(TextSmall, {
  display: "block",
  letterSpacing: "$wide",
  lineHeight: 1.66666666,
})

const Info = styledComponent(Link)`
  font-weight: 600;
  line-height: 1.1875;
  display: block;
  margin-top: 5px;
`

export const OverviewInfo = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    marginTop={4}
    maxWidth="375px"
  >
    <Box>
      <Separator />
      <Title color="silver">Working at</Title>
      <Info color="white" href="https://www.hussle.com" element={TextBody}>
        Hussle
      </Info>
    </Box>
    <Box>
      <Separator />
      <Title color="silver">Living in</Title>
      <Info
        color="white"
        element={TextBody}
        href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9"
      >
        London
      </Info>
    </Box>
    <Box>
      <Separator />
      <Title color="silver">Follow me</Title>
      <Info
        color="white"
        element={TextBody}
        href="https://twitter.com/rswebdesigner"
      >
        @rswebdesigner
      </Info>
    </Box>
  </Box>
)
