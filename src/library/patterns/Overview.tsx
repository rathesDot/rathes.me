import React from "react"

import { styled } from "../../../stitches.config"

import { TextSmall } from "../components/typography/Text"
import { Link } from "../components/typography/Link"

export type OverviewProps = {
  items: Array<{ title: string; value: string; path?: string }>
}

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 375,
})

const Title = styled(TextSmall, {
  display: "block",
  letterSpacing: "$wide",
  lineHeight: 1.66666666,
})

const Info = styled(Link, {
  display: "block",
  fontWeight: "$bold",
  lineHeight: "1.1875",
  marginTop: 5,
})

const Separator = styled("span", {
  backgroundColor: "$gray800",
  display: "block",
  height: 2,
  marginBottom: "$4",
  width: 24,
})

const Overview: React.FC<OverviewProps> = ({ items }) => (
  <Container>
    {items.map((item, index) => (
      <div key={`overview-item-${index}`}>
        <Separator />
        <Title>{item.title}</Title>
        <Info underlined={false} href={item.path}>
          {item.value}
        </Info>
      </div>
    ))}
  </Container>
)

export { Overview }
