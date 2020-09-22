import React from "react"
import { PageProps } from "gatsby"
import { reset } from "stitches-reset"

import { styled, css } from "../../stitches.config"

import { Title } from "../library/components/typography/Title"
import { Paragraph } from "../library/components/typography/Paragraph"
import { Heading1, Heading2 } from "../library/components/typography/Heading"

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

const Color = styled("span", {
  boxSizing: "border-box",
  borderRadius: "4px",
  display: "inline-flex",
  flexDirection: "column",
  justifyContent: "center",
  lineHeight: 1.5,
  margin: "0 $3 $3 0",
  padding: "$3",
  height: "71px",
  width: "132px",

  "> span": {
    display: "block",
    fontFamily: "$mono",
    fontSize: "$sm",
    opacity: 0.7,
  },

  variants: {
    color: {
      black: {
        backgroundColor: "$black",
        border: "solid 1px $gray800",
        color: "$white",
      },
      white: {
        backgroundColor: "$white",
        color: "$black",
      },
      gray400: {
        backgroundColor: "$gray400",
        color: "$white",
      },
      gray500: {
        backgroundColor: "$gray500",
        color: "$white",
      },
      gray600: {
        backgroundColor: "$gray600",
        color: "$white",
      },
      gray700: {
        backgroundColor: "$gray700",
        color: "$white",
      },
      gray800: {
        backgroundColor: "$gray800",
        color: "$white",
      },
      gray900: {
        backgroundColor: "$gray900",
        color: "$white",
      },
    },
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
      <Heading1>Color Scheme</Heading1>
      <Paragraph>
        This website is kept in a black and white style without any major brand
        color. This means, the colors used in this websites are all shades of
        grey.
      </Paragraph>
      <Paragraph>
        <Color color="white">
          White
          <span>#FFFFFF</span>
        </Color>
        <Color color="gray400">
          Gray 400
          <span>#AAAAAA</span>
        </Color>
        <Color color="gray500">
          Gray 500
          <span>#676767</span>
        </Color>
        <Color color="gray600">
          Gray 600
          <span>#878787</span>
        </Color>
        <Color color="gray700">
          Gray 700
          <span>#454545</span>
        </Color>
        <Color color="gray800">
          Gray 800
          <span>#2A2A2A</span>
        </Color>
        <Color color="gray900">
          Gray 900
          <span>#161616</span>
        </Color>
        <Color color="black">
          Black
          <span>#111111</span>
        </Color>
      </Paragraph>
      <Heading2>Dark Theme</Heading2>
      <Paragraph>
        The website is using a dark theme by default. Currently, there is no
        light theme available but there are plans to add them as soon as the
        component library reaches a stable version.
      </Paragraph>
    </Container>
  )
}

export default Ui
