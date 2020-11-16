import React from "react"
import { styled } from "../../../stitches.config"

import { PageLayout } from "../../layouts"
import { Box, Heading1, Paragraph, Meta } from "../../components"

const HelpText = styled("span", {
  color: "$gray600",
  display: "block",
  fontSize: "$base",
  lineHeight: "$1.8",
})

const Meetings = () => (
  <PageLayout>
    <Meta title="You probably don't need that meeting - Developing a meeting culture that employees will love"></Meta>
    <Box maxWidth="640px">
      <Heading1>
        You probably don't need that meeting
        <HelpText>
          Developing a meeting culture that employees will love
        </HelpText>
      </Heading1>
      <Paragraph>
        Be honest with yourself. How many of your meetings do you think were
        useful? And how many of them were productive? In this talk, we will talk
        about developing a meeting culture that everybody in the company will
        love!
      </Paragraph>
      <Paragraph>
        You will learn how to avoid unnecessary meetings, how other types of
        communication can be more effective and efficient. You will also learn
        how to conduct those unavoidable meetings so that they are productive
        and don't feel like a waste of time.
      </Paragraph>
      <Paragraph>
        After this talk, you will be able to avoid useless meetings and make the
        necessary meetings more productive.
      </Paragraph>
    </Box>
  </PageLayout>
)

export default Meetings
