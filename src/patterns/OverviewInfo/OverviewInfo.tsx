import React from "react"

import { styled } from "../../../stitches.config"

import { Link, Text } from "../../components"

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "$4",
  maxWidth: 375,
})

const Separator = styled("span", {
  backgroundColor: "$gray800",
  display: "block",
  height: 2,
  margin: "$4 0",
  width: 24,
})

const Title = styled(Text, {
  display: "block",
  letterSpacing: "$wide",
  lineHeight: 1.66666666,
})

const Info = styled(Link, {
  display: "block",
  fontWeight: 600,
  lineHeight: "1.1875",
  marginTop: 5,
})

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
