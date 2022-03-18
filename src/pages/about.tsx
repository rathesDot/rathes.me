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
          <Separator />
          <List title="Reading List 2021">
            <ListItem
              subtitle="by Kazuo Ishiguro"
              link="https://amzn.to/31pndoX"
            >
              Klara and the Sun
            </ListItem>
            <ListItem
              subtitle="by Sahil Lavingia"
              link="https://amzn.to/3xTzrCm"
            >
              The Minimalist Entrepreneur: How Great Founders Do More with Less
            </ListItem>
            <ListItem
              subtitle="by Anuk Arudpragasam"
              link="https://amzn.to/3DhX9Jh"
            >
              A Passage North
            </ListItem>
            <ListItem
              subtitle="by Michele Hansen"
              link="https://amzn.to/3ss7rCX"
            >
              Deploy Empathy: A practical guide to interviewing customers
            </ListItem>
            <ListItem
              subtitle="by Agatha Christie"
              link="https://amzn.to/2VXdSSc"
            >
              The Mysterious Affair at Styles (Poirot)
            </ListItem>
            <ListItem
              subtitle="by Agatha Christie"
              link="https://amzn.to/3AFGmPq"
            >
              The Murder on the Links (Poirot)
            </ListItem>
            <ListItem
              subtitle="by Dr. Stuart Farrimond"
              link="https://amzn.to/3h8h58m"
            >
              The Science of Spice: Understand Flavour Connections and
              Revolutionize your Cooking
            </ListItem>
            <ListItem subtitle="by Will Storr" link="https://amzn.to/3ggjAXd">
              The Science of Storytelling: Why Stories Make Us Human, and How to
              Tell Them Better
            </ListItem>
            <ListItem subtitle="by Stephen King" link="https://amzn.to/3giQV3P">
              The Outsider
            </ListItem>
            <ListItem
              subtitle="by Rob Fitzpatrick"
              link="https://amzn.to/3n4Wbtr"
            >
              The Mom Test
            </ListItem>
            <ListItem subtitle="by Arvid Kahl" link="https://amzn.to/2POo9xh">
              Zero to Sold: How to Start, Run, and Sell a Bootstrapped Business
            </ListItem>
            <ListItem
              subtitle="by David Jackson"
              link="https://uk.bookshop.org/a/6216/9781785761089"
            >
              A Tapping at My Door
            </ListItem>
            <ListItem
              subtitle="by Zach Berwick"
              link="https://www.linkedin.com/in/zach-berwick-b29a6892"
            >
              Become the best version of yourself
            </ListItem>
            <ListItem
              subtitle="by Barack Obama"
              link="https://uk.bookshop.org/a/6216/9780241491515"
            >
              A Promised Land
            </ListItem>
            <ListItem
              subtitle="by Nir Eyal"
              link="https://uk.bookshop.org/a/6216/9780241184837"
            >
              Hooked: How to Build Habit-Forming Products
            </ListItem>
            <ListItem
              subtitle="by Alice Hasters"
              link="https://amzn.to/3jzyjfW"
            >
              Was weiße Menschen nicht über Rassismus hören wollen aber wissen
              sollten
            </ListItem>
          </List>
          <Separator />
          <List title="Reading List 2020">
            <ListItem
              subtitle="by Cody McFadyen"
              link="https://amzn.to/2tw7Zxp"
            >
              Shadow Man (Smoky Barrett, Band 1)
            </ListItem>
            <ListItem subtitle="by Ransom Riggs" link="https://amzn.to/2MYAfj6">
              Library of Souls: The Third Novel of Miss Peregrine's Peculiar
              Children
            </ListItem>
            <ListItem
              subtitle="by Sir Arthur Conan Doyle"
              link="https://amzn.to/37vaKhk"
            >
              Sherlock Holmes: A Study in Scarlet
            </ListItem>
            <ListItem
              subtitle="by Charlotte Link"
              link="https://amzn.to/2U8dFbw"
            >
              Die letzte Spur (The last track)
            </ListItem>
            <ListItem subtitle="by Eric Ries" link="https://amzn.to/2uresu3">
              The Lean Startup: How Today's Entrepreneurs Use Continuous
              Innovation to Create Radically Successful Businesses
            </ListItem>
            <ListItem
              subtitle="by Richard Osman"
              link="https://amzn.to/343YBzt"
            >
              The Thursday Murder Club
            </ListItem>
            <ListItem subtitle="by Joel Levy" link="https://amzn.to/30cRK5C">
              Psychology for Busy People: Everything You Really Should Know
            </ListItem>
            <ListItem
              subtitle="by Paula Hawkins"
              link="https://amzn.to/2T4pQ8d"
            >
              The Girl on the Train
            </ListItem>
          </List>
        </ReadingList>
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
