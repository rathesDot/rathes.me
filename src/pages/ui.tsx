import React from "react"
import { PageProps } from "gatsby"
import { reset } from "stitches-reset"

import { styled, css } from "../../stitches.config"

import { Title } from "../library/components/typography/Title"
import { Paragraph } from "../library/components/typography/Paragraph"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "../library/components/typography/Heading"

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

const Example = styled("div", {
  backgroundColor: "$gray900",
  margin: "$2 0",
  maxWidth: "640px",
  padding: "$4",
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
      <Heading1>Typography</Heading1>
      <Paragraph>
        The primary typeface of rathes.me is the Google font "Lato" — a free but
        still strong typeface that can be used a different sizes.
      </Paragraph>
      <Heading2>Font Sizes</Heading2>
      <Paragraph>
        Using "1rem" (16px) as the base, there are 10 different font sizes
        ranging from 0.75rem as the smallest to 4rem as the largest.
      </Paragraph>
      <Paragraph>
        The basic <code className="language-text">&lt;Paragraph /&gt;</code>{" "}
        component that is used as the body text is using the default font size.
      </Paragraph>
      <Example>
        <Paragraph>
          This is a small paragraph. This paragraph can have multiple lines and
          more than a just a few words and phrases. This will then lead to more
          than just a single line and then it demonstrates how a paragraph
          actually looks like in this UI.
        </Paragraph>
      </Example>
      <Heading2>Headings</Heading2>
      <Paragraph>
        This website makes use of 4 different Heading levels from{" "}
        <code className="language-text">Heading1</code> being the largest to{" "}
        <code className="language-text">Heading4</code> being the smallest
        Heading.
      </Paragraph>
      <Example>
        <Heading1>This is a Heading 1</Heading1>
      </Example>
      <Example>
        <Heading2>This is a Heading 2</Heading2>
      </Example>
      <Example>
        <Heading3>This is a Heading 3</Heading3>
      </Example>
      <Example>
        <Heading4>This is a Heading 4</Heading4>
      </Example>
      <Paragraph>
        While the first three heading levels are mostly used as headings of
        content blocks and paragraphs, the Heading 4 is meant to be used as a
        title for components such as lists, cards or image galleries.
      </Paragraph>
    </Container>
  )
}

export default Ui
