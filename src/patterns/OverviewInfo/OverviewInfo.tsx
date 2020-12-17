import React from "react"
import styledComponent from "styled-components"

import { styled } from "../../../stitches.config"

import { Link, Text } from "../../components"

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "$4",
  maxWidth: 375,
})

const Separator = styledComponent.span`
  width: 24px;
  display: block;
  margin: 16px 0;
  height: 2px;
  background-color: ${(props) => props.theme.colors.black.lighter};
`

const Title = styled(Text, {
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
  <Container>
    <div>
      <Separator />
      <Title size="small" color="gray600">
        Working at
      </Title>
      <Info color="white" href="https://www.hussle.com">
        Hussle
      </Info>
    </div>
    <div>
      <Separator />
      <Title size="small" color="gray600">
        Living in
      </Title>
      <Info color="white" href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9">
        London
      </Info>
    </div>
    <div>
      <Separator />
      <Title size="small" color="gray600">
        Follow me
      </Title>
      <Info color="white" href="https://twitter.com/rswebdesigner">
        @rswebdesigner
      </Info>
    </div>
  </Container>
)
