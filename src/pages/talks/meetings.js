import React from "react"

import { PageLayout } from "../../layouts/PageLayout/PageLayout"
import SEO from "../../components/SEO"
import { Box } from "../../components/Box"
import { Heading1, Paragraph, TextBody } from "../../components/Typography"

const Meetings = () => (
  <PageLayout>
    <SEO title="You probably don't need that meeting - Developing a meeting culture that employees will love"></SEO>
    <Box maxWidth="640px">
      <Heading1>
        You probably don't need that meeting
        <Box element={TextBody} lineHeight={1.8} color="silver" display="block">
          Developing a meeting culture that employees will love
        </Box>
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
