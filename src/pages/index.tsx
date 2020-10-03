import React from "react"

import { styled } from "../../stitches.config"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import OverviewInfo from "../components/OverviewInfo"

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
  <Layout>
    <SEO title="Home" />
    <Container>
      <LargeTitle>
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in Belgium
      </LargeTitle>
      <OverviewInfo />
    </Container>
  </Layout>
)

export default IndexPage
