import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import OverviewInfo from "../components/OverviewInfo"

const Introduction = styled.h1`
  color: ${props => props.theme.colors.white.default};
  font-family: ${props => props.theme.fontFamily.default};
  font-size: ${props => props.theme.fontSize["4xl"]};
  font-weight: 600;
  line-height: 1.333333;
  overflow-wrap: break-word;
  max-width: 640px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="flex flex-col justify-center flex-grow">
      <Introduction>
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in Belgium
      </Introduction>
      <OverviewInfo />
    </section>
  </Layout>
)

export default IndexPage
