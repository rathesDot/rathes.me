import React from "react"
import styled from "styled-components"
import { Link as RouterLink } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SayHi from "../components/SayHi"

import { Heading1, Paragraph, Heading2 } from "../components/Typography"
import { Box } from "../components/Box"
import List from "../components/List/List"
import Link from "../components/Link"

const Separator = styled.hr`
  border-width: 2px;
  color: ${props => props.theme.colors.black.lighter};
  width: 24px;
  margin: ${props => props.theme.spacing[8]} 0;
`

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <Box maxWidth="640px" marginTop={32}>
      <Heading1>/raðiːs/</Heading1>
      <Paragraph>
        I’m Rathes Sachchithananthan, a web developer with not only interests in
        engineering but also product development & design, user & customer
        experience and most importantly in languages and cultures.
      </Paragraph>
      <Paragraph>
        I started working as a web designer and web developer at very young
        ages. At the age of 14, I earned my first money as a web designer
        creating custom MySpace layouts and in 2008, at the age of 16, I founded
        my first own company for web design and development. Since then I have
        worked with several clients doing quite a wide range of tasks.
      </Paragraph>
      <Paragraph>
        For more than 10 years I have been working as a web developer doing
        solving problems as a back-end engineer using languages such as PHP,
        Python or Node.js but also as a front-end developer working with
        HTML/CSS and JavaScript.
      </Paragraph>
      <Paragraph>
        However, my real passion is not for software and development. I’m more
        into solving problems for people, make their lives easier and connect
        them with each other. Together with that, I’m passionate about learning
        new languages and cultures.
      </Paragraph>
      <Paragraph>
        Nowadays, I work as a web developer at Teamleader in Ghent, Belgium
        building things using PHP in the back-end and React in the front-end
        with the best team in the world, team ONE.
      </Paragraph>
      <Paragraph>
        Apart from that, I spent most of my time working smaller side projects
        at Aheenam. Right now I’m working on providing a platform for people to
        learn my mother language Tamil.
      </Paragraph>

      <Box marginTop={32} element="section">
        <Heading2>What I read</Heading2>
        <Paragraph>
          Books play an important part in my life. Just sitting my couch or bed
          and reading a novel can be really inspiring.
        </Paragraph>
        <Paragraph>
          I do fancy crime novels with interesting detective characters from
          good old Sherlock Holmes to Harry Hole. But I read basically any kind
          of books that can broaden one’s horizons.
        </Paragraph>
        <Paragraph>
          Actually, I dream to have my own library one where I can invite
          everybody to pick up a nice book and read.
        </Paragraph>
        <Box marginTop={12}>
          <List title="Reading List 2020">
            <List.Item
              subtitle="by Cody McFadyen"
              link="https://amzn.to/2tw7Zxp"
            >
              Shadow Man (Smoky Barrett, Band 1)
            </List.Item>
          </List>
          <Separator />
          <List title="Currently reading">
            <List.Item
              subtitle="by Ransom Riggs"
              link="https://amzn.to/2MYAfj6"
            >
              Library of Souls: The Third Novel of Miss Peregrine's Peculiar
              Children
            </List.Item>
            <List.Item
              subtitle="by George R. R. Martin"
              link="https://amzn.to/2Rngm82"
            >
              A Game of Thrones: A Song of Ice and Fire
            </List.Item>
          </List>
        </Box>
      </Box>

      <Box marginTop={32} element="section">
        <Heading2>What I write</Heading2>
        <Paragraph>
          From time to time I also write. It can be work related topics that I
          share in the{" "}
          <Link element={RouterLink} to="/writings" underlined color="white">
            writing section
          </Link>{" "}
          of this website but I also write to empty my mind and eternalize
          ideas.
        </Paragraph>
        <Paragraph>
          I have several ideas for some crime novel and I even developed my
          detective character “Chris Garner”. I want to publish my first short
          stories soon.
        </Paragraph>
        <Paragraph>
          Before I can do that I have to finish my current book which is called
          “A guide to basic Tamil Grammar”. I’m writing that book as an entry
          point for my learning platform.
        </Paragraph>
      </Box>
      <Box element="section" marginTop={32} marginBottom={32}>
        <SayHi />
      </Box>
    </Box>
  </Layout>
)

export default AboutMe
