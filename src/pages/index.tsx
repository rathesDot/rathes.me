import React from "react"
import { PageProps } from "gatsby"

import { Meta } from "../components"
import { OverviewInfo } from "../patterns"
import { PageLayout } from "../layouts"
import { styled } from "../../stitches.config"

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

const Introduction = styled("h1", {
  color: "$white",
  fontFamily: "$default",
  fontSize: "$3xl",
  fontWeight: 600,
  lineHeight: "$1.35",
  overflowWrap: "break-word",
  maxWidth: 640,

  variants: {
    size: {
      default: {
        fontSize: "$3xl",
      },
      large: {
        fontSize: "$4xl",
      },
    },
  },
})

const IndexPage: React.FC<PageProps> = () => (
  <PageLayout>
    <Meta title="Home" />
    <Container>
      <Introduction size={{ initial: "default", xs: "large" }}>
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in London
      </Introduction>
      <OverviewInfo />
    </Container>
  </PageLayout>
)

export default IndexPage
