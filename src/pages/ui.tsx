import React from "react"
import { PageProps } from "gatsby"
import { reset } from "stitches-reset"

import { styled, css } from "../../stitches.config"

import { Title } from "../library/components/typography/Title"
import { Paragraph } from "../library/components/typography/Paragraph"
import { TextSmall, TextBody } from "../library/components/typography/Text"
import { Link } from "../library/components/typography/Link"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "../library/components/typography/Heading"
import { Logo } from "../library/components/Logo"

import { MenuItem, Navigation } from "../library/patterns/Navigation"
import { Footer } from "../library/patterns/Footer"
import { Overview } from "../library/patterns/Overview"

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
  css.global(reset)()

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
      <Paragraph>
        Besides the paragraphs, if you need some sort of text, you can always
        fallback to the Text components. As mentioned above, there is a{" "}
        <code className="language-text">&lt;TextBody /&gt;</code> component with
        the base font-size but also a{" "}
        <code className="language-text">&lt;TextSmall /&gt;</code> to be used
        for smaller size.
      </Paragraph>
      <Paragraph>
        These components are supposed to be used to compose other components so
        try to not use them directly in your pages.
      </Paragraph>
      <Example>
        <TextBody>This is body text size</TextBody>
      </Example>
      <Example>
        <TextSmall>This is small text size</TextSmall>
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
      <Heading2>Link</Heading2>
      <Paragraph>
        The Link component is the default way to navigate the user from one page
        to another.
      </Paragraph>
      <Example>
        <Link href="https://aheenam.com">Link to Aheenam</Link>
      </Example>
      <Example>
        <Link underlined={false} href="https://aheenam.com">
          Link to Aheenam without underline
        </Link>
      </Example>
      <Heading1>Pattern</Heading1>
      <Paragraph>
        The UI only needs really few more complex pattern composed of the
        existing primitive components.
      </Paragraph>
      <Heading2>The Navigation</Heading2>
      <Paragraph>
        The Navigation is what the use will use as the main anchor to navigate
        through each of the websites pages. Whenever they run deep into the
        website, they can always rely on the Navigation to bring them back to a
        point of the website that are familar with.
      </Paragraph>
      <Paragraph>
        The Navigation consist of two different elements: A{" "}
        <TextBody color="white">MenuItem</TextBody> or the{" "}
        <TextBody color="white">Logo</TextBody>. Both of those elements always
        link to an internal page of the website by using Gatsby's{" "}
        <TextBody color="white">Link</TextBody> component.
      </Paragraph>
      <Example>
        <MenuItem>This is a menu item</MenuItem>
      </Example>
      <Example>
        <MenuItem>
          <Logo />
        </MenuItem>
      </Example>
      <Paragraph>
        The <TextBody color="white">Navigation</TextBody> component accepts an
        array of menu items with their title and path. Based on those items, it
        builds the entire navigation.
      </Paragraph>
      <Paragraph>
        Keep in mind that this navigation is does not collapse on smaller
        viewports, so you have to control and limit the amount of menu items in
        such a navigation.
      </Paragraph>
      <Example>
        <Navigation
          items={[
            { title: "About", path: "/about" },
            { title: "Resume", path: "/resume" },
            { title: "Work", path: "/work" },
            { title: "Writings", path: "/writings" },
            { title: "UI", path: "/ui" },
          ]}
        />
      </Example>
      <Heading2>The Footer</Heading2>
      <Paragraph>
        The Footer is kept simple. It contains the copy right note and a single
        link to the legal stuff for this website.
      </Paragraph>
      <Example>
        <Footer />
      </Example>
      <Heading2>Overview</Heading2>
      <Paragraph>
        To give a quick overview about the topic, use the Overview pattern.
      </Paragraph>
      <Example>
        <Overview
          items={[
            {
              title: "Working at",
              value: "Hussle",
              path: "https://www.hussle.com",
            },
            {
              title: "Living in",
              value: "London",
              path: "https://goo.gl/maps/gHAMGW4z3WZ2REe96",
            },
            {
              title: "Follow me",
              value: "@rswebdesigner",
              path: "https://twitter.com/rswebdesigner",
            },
          ]}
        />
      </Example>
      <Example>
        <Overview
          items={[
            {
              title: "Difficulty",
              value: "Simple",
            },
            {
              title: "Working Time",
              value: "45 min",
            },
            {
              title: "Waiting Time",
              value: "90 min",
            },
            {
              title: "Cost",
              value: "$",
            },
          ]}
        />
      </Example>
      <Paragraph>
        The entire container has a max width of 375px so make sure that you only
        add up to four items in a Overview component.
      </Paragraph>
    </Container>
  )
}

export default Ui
