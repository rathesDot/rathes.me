import React from "react"
import { PageProps } from "gatsby"

import { styled } from "../../../stitches.config"

import { PageLayout } from "../../layouts"
import { Heading, Paragraph, Meta } from "../../components"

const Container = styled("section", {
  maxWidth: 640,
})

const HelpText = styled("span", {
  color: "$gray600",
  display: "block",
  fontSize: "$base",
  lineHeight: "$1.8",
})

const ManagingTime: React.FC<PageProps> = () => (
  <PageLayout>
    <Meta title="You can't manage time - A talk about what people call time management"></Meta>
    <Container>
      <Heading level="heading1">
        You can't manage time
        <HelpText>A talk about what people call time management</HelpText>
      </Heading>
      <Paragraph>
        How many different things did you already try out to be more productive
        and get more things done? How many tools do you own to accomplish more?
        And did it help?
      </Paragraph>
      <Paragraph>
        This talk focusses on what time management is about, why you can't
        manage time. You will learn about the emotional aspect of time
        management and the essential habits that will help you to get more
        things done.
      </Paragraph>
      <Paragraph>
        After this talk, you will have an idea of what you can work on if you
        want to get more things done. And you will understand what time
        management means.
      </Paragraph>
    </Container>
  </PageLayout>
)

export default ManagingTime
