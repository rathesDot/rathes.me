import React from "react"
import { PageProps } from "gatsby"
import { reset } from "stitches-reset"

import { styled, css } from "../../stitches.config"

import { Title } from "../library/components/typography/Title"

const Container = styled("main", {
  backgroundColor: "$black",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$default",
  justifyContent: "space-between",
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
    </Container>
  )
}

export default Ui
