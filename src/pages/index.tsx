import React from "react"

import { styled } from "../../stitches.config"

import { BaseLayout } from "../library/layouts/BaseLayout"
import SEO from "../components/SEO"
import { Overview } from "../library/patterns/Overview"

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

const LargeTitle = styled("h1", {
  color: "$white",
  fontFamily: "$default",
  fontSize: "$3xl",
  fontWeight: "$bold",
  lineHeight: "$1.35",
  overflowWrap: "break-word",
  maxWidth: 640,

  mobile: {
    fontSize: "$4xl",
  },
})

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <Container>
      <LargeTitle>
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in Belgium
      </LargeTitle>
      <Overview
        items={[
          {
            title: "Working at",
            value: "Hussle",
            path: "https://www.hussle.com",
          },
          {
            title: "Living in",
            value: "London, UK",
            path: "https://goo.gl/maps/gHAMGW4z3WZ2REe96",
          },
          {
            title: "Follow me",
            value: "@rswebdesigner",
            path: "https://twitter.com/rswebdesigner",
          },
        ]}
      />
    </Container>
  </BaseLayout>
)

export default IndexPage
