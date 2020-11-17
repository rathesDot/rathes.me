import React from "react"
import styled from "styled-components"

import { Meta } from "../components"
import { OverviewInfo } from "../patterns"
import { PageLayout } from "../layouts"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Introduction = styled.h1`
  color: ${(props) => props.theme.colors.white.default};
  font-family: ${(props) => props.theme.fontFamily.default};
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  font-weight: 600;
  line-height: 1.333333;
  overflow-wrap: break-word;
  max-width: 640px;

  @media (max-width: 375px) {
    font-size: ${(props) => props.theme.fontSize["3xl"]};
  }
`

const IndexPage = () => (
  <PageLayout>
    <Meta title="Home" />
    <Container>
      <Introduction>
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in London
      </Introduction>
      <OverviewInfo />
    </Container>
  </PageLayout>
)

export default IndexPage
