import React from "react"
import { PageProps } from "gatsby"

import { styled } from "../../stitches.config"

import { List, ListItem, Meta } from "../components"
import { PageLayout } from "../layouts"

const Container = styled("section", {})

const Introduction = styled("h1", {
  color: "$white",
  fontFamily: "$default",
  fontSize: "$3xl",
  fontWeight: 600,
  lineHeight: "$400",
  overflowWrap: "break-word",
  maxWidth: 640,

  variants: {
    size: {
      default: {
        fontSize: "$3xl",
        margin: "$16 0",
      },
      large: {
        fontSize: "$4xl",
        margin: "$20 0",
      },
    },
  },
})

const Lists = styled("div", {
  marginTop: "$8",
  marginBottom: "$8",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: 640,
})

const ListContainer = styled(List, {
  margin: "$8 10px $8 0",
  minWidth: 150,
  maxWidth: 200,
})

const IndexPage: React.FC<PageProps> = () => (
  <PageLayout>
    <Meta title="Home" />
    <Container>
      <Introduction size={{ initial: "default", "@xs": "large" }}>
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in London
      </Introduction>
      <Lists>
        <ListContainer title="About Me">
          <ListItem
            subtitlePosition="above"
            subtitle="Working at"
            link="https://www.hussle.com"
          >
            Hussle
          </ListItem>
          <ListItem
            subtitlePosition="above"
            subtitle="Living In"
            link="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9"
          >
            London
          </ListItem>
          <ListItem
            subtitlePosition="above"
            subtitle="Working at"
            link="https://twitter.com/rswebdesigner"
          >
            @rswebdesigner
          </ListItem>
        </ListContainer>
        <ListContainer title="Current Projects">
          <ListItem
            subtitle="A simple and beautiful way to plan, schedule and track your workouts"
            link="https://getmaxout.app/"
          >
            Maxout
          </ListItem>
          <ListItem
            subtitle="Book and App to make learning the Tamil language easier"
            link="https://learn-tamil.com/"
          >
            Learn Tamil Online
          </ListItem>
        </ListContainer>
        <ListContainer title="My Writing">
          <ListItem link="https://getmaxout.app/blog/introducing-maxout/">
            Building Maxout
          </ListItem>
          <ListItem link="/blog/en/review-2020/">Looking back at 2020</ListItem>
          <ListItem link="https://getmaxout.app/blog/introducing-maxout/">
            Introducing Maxout
          </ListItem>
          <ListItem link="/blog/en/how-to-slack/">How-To Slack</ListItem>
        </ListContainer>
      </Lists>
    </Container>
  </PageLayout>
)

export default IndexPage
