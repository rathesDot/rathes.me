import React from "react"
import { PageProps } from "gatsby"
import { reset } from "stitches-reset"

import { styled, css } from "../../stitches.config"

import { Title } from "../library/components/typography/Title"
import { Paragraph } from "../library/components/typography/Paragraph"

const Container = styled("main", {
  backgroundColor: "$black",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$default",
  minHeight: "100vh",
  padding: "40px $4",
  textColor: "$gray600",

  tablet: {
    padding: "60px 0 32px 60px",
  },

  desktop: {
    padding: "110px 0 32px 110px",
  },
})

const Ui: React.FC<PageProps> = () => {
  css.global(reset)

  return (
    <Container>
      <Title>The UI library</Title>
      <Paragraph>
        This pages serves as the documentation of the design system that is used
        as the foundation of this website. The system consists of components,
        information about their usage as well as general human interface
        guidelines to keep this website as consistent as possible while
        maintaining the best user experience possible.
      </Paragraph>
    </Container>
  )
}

export default Ui
