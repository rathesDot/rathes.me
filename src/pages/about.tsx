import React from "react"
import RouterLink from "next/link"
import { NextPage } from "next"

import { PageLayout } from "../layouts"
import { styled } from "../../stitches.config"

import {
  Heading,
  List,
  ListItem,
  Paragraph,
  Meta,
  Separator,
  Text,
} from "../components"

import { SayHi } from "../patterns"

const Container = styled("section", {
  maxWidth: 640,
})

const Section = styled("section", {
  marginTop: "$32",
})

const SayHiContainer = styled("section", {
  marginBottom: "$32",
  marginTop: "$32",
})

const ReadingList = styled("div", {
  marginBottom: "$12",
  marginTop: "$12",
})

const AboutMe: React.FC<NextPage> = () => (
  <PageLayout>
    <Meta title="About me" />
    <Container>
      <Heading level="heading1">/raðiːs/</Heading>
      <Paragraph>
        I'm Rathes Sachchithananthan, a web developer with interests not only in
        engineering but also in product development & design, user & customer
        experience, and most importantly in languages and cultures.
      </Paragraph>
      <Paragraph>
        I started working as a web designer and web developer at a very young
        age. I earned my first money as a web designer creating custom MySpace
        layouts when I was just 14. In 2008, at the age of 16, I founded my own
        company for web design and development. Since then, I have worked with
        several clients doing quite a wide range of tasks.
      </Paragraph>
      <Paragraph>
        For more than 10 years, I have been working as a web developer doing
        problem-solving as a back-end engineer using languages such as PHP,
        Python or Node.js but also as a front-end developer working with
        HTML/CSS and JavaScript.
      </Paragraph>
      <Paragraph>
        However, my real passion lies beyond software and development. I'm more
        into solving problems for people, make their lives easier and connecting
        them with each other. Alongside that, I'm passionate about learning new
        languages and cultures.
      </Paragraph>
      <Paragraph>
        Nowadays, I work as a front-end engineer at Hussle in London building
        web applications using React.
      </Paragraph>
      <Paragraph>
        Apart from that, I spent most of my time working on smaller side
        projects at Aheenam. Right now, I'm working on providing a platform for
        people to learn my mother language Tamil.
      </Paragraph>

      <Section>
        <Heading level="heading2">What I read</Heading>
        <Paragraph>
          Books play an important part in my life. Just sitting on my couch or
          bed and reading a novel can be really inspiring.
        </Paragraph>
        <Paragraph>
          I do fancy crime novels with interesting detective characters from
          good old Sherlock Holmes to Harry Hole. But I read basically any kind
          of book that can broaden one's horizons.
        </Paragraph>
        <Paragraph>
          Actually, I dream of having my own library one day where I can invite
          everybody to pick up a nice book and read.
        </Paragraph>
        <ReadingList>
          <List title="Currently reading">
            <ListItem
              subtitle="by Thomas Erikson"
              link="https://amzn.to/3hug8bi"
            >
              Surrounded by Idiots: The Four Types of Human Behavior
            </ListItem>
          </List>
          <Separator />
          <List title="Reading List 2022">
            <ListItem
              subtitle="by George R. R. Martin"
              link="https://amzn.to/2Rngm82"
            >
              A Game of Thrones: A Song of Ice and Fire
            </ListItem>
            <ListItem subtitle="by Amish" link="https://amzn.to/3j86ASh">
              Immortals of Meluha
            </ListItem>
          </List>
        </ReadingList>
        <Paragraph>
          I have got an entire{" "}
          <RouterLink href="/reading-list">
            <a>
              <Text color="slate12" underlined>
                Reading List
              </Text>
            </a>
          </RouterLink>{" "}
          with all the books I've read since 2017. Feel free to have a look, you
          might be able to find the next book for yourself.
        </Paragraph>
      </Section>

      <Section>
        <Heading level="heading2">What I write</Heading>
        <Paragraph>
          From time to time I also write. It can be work related topics that I
          share in the{" "}
          <RouterLink href="/writings">
            <a>
              <Text color="slate12" underlined>
                writing section
              </Text>
            </a>
          </RouterLink>{" "}
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
          “A guide to basic Tamil Grammar”. I'm writing that book as an entry
          point for my learning platform.
        </Paragraph>
      </Section>
      <SayHiContainer>
        <SayHi />
      </SayHiContainer>
    </Container>
  </PageLayout>
)

export default AboutMe
