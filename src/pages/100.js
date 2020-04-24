import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SayHi from "../components/SayHi"

import { Box } from "../components/Box"
import { Paragraph } from "../components/Typography"
import Card from "../components/Card/Card"

import data from "../content/100.json"

const The100 = () => (
  <Layout>
    <SEO title="About me" />
    <Box maxWidth="640px" marginTop={32}>
      <Paragraph>
        A few years back in a time that I would call the hardest time in life so
        far, when I actually didn't know what I wanted to do with life, I got
        the idea from my therapist to write down everything I ever wanted to do
        and that I want to do.
      </Paragraph>
      <Paragraph>
        This resulted in a list of 100 things that I wanted to achieve before
        death. Since then, once a year, I will have a look at this list and
        check if I had done things that I wanted to do, what I'm working on
        right now and what things are on my list. I would also update the things
        that I wanted to last year but not that much interested in it anymore.
      </Paragraph>
      <Paragraph>
        Over the past years, there have only been a few things that changed.
        This year, I did only update 5 items out of 68, so I feel there are a
        lot of things that I really want to do but I haven't executed yet.
      </Paragraph>
      <Paragraph>
        A lot of things are about seeing the world and exploring and meeting the
        different cultures and people. I want to learn a lot more things,
        especially languages and instruments and I want to learn more and more
        about the Tamil language and culture to learn more about myself and my
        identity.
      </Paragraph>
    </Box>
    <Box element="section" marginTop={32} marginBottom={32} display="flex">
      <Box flex="180px 0 0" marginRight={4}>
        {data
          .find((e) => e.status === "Dreaming of")
          .items.map((item, index) => (
            <Card key={`dreaming-of-${index}`} marginBottom={2}>
              {item}
            </Card>
          ))}
      </Box>
      <Box flex="180px 0 0" marginRight={4}>
        {data
          .find((e) => e.status === "Working On")
          .items.map((item, index) => (
            <Card key={`dreaming-of-${index}`} marginBottom={2}>
              {item}
            </Card>
          ))}
      </Box>
      <Box flex="180px 0 0">
        {data
          .find((e) => e.status === "Achieved")
          .items.map((item, index) => (
            <Card key={`dreaming-of-${index}`} marginBottom={2}>
              {item}
            </Card>
          ))}
      </Box>
    </Box>
    <Box element="section" marginTop={32} marginBottom={32}>
      <SayHi />
    </Box>
  </Layout>
)

export default The100
