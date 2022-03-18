import { NextPage } from "next"

import { styled } from "../../stitches.config"

import { PageLayout } from "../layouts"
import { Heading, Meta, List, ListItem, Separator } from "../components"

const Container = styled("div", {
  marginBottom: "$32",
  maxWidth: 640,
})

const Section = styled("section", {
  marginTop: "$16",
})

const ReadingList: NextPage = () => (
  <PageLayout>
    <Meta title="Reading List" />
    <Container>
      <Heading>Reading List</Heading>
      <Section>
        <List title="Currently reading">
          <ListItem subtitle="by Thomas Erikson" link="https://amzn.to/3hug8bi">
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
          <ListItem subtitle="by Kazuo Ishiguro" link="https://amzn.to/31pndoX">
            Klara and the Sun
          </ListItem>
          <ListItem subtitle="by Sahil Lavingia" link="https://amzn.to/3xTzrCm">
            The Minimalist Entrepreneur: How Great Founders Do More with Less
          </ListItem>
          <ListItem
            subtitle="by Anuk Arudpragasam"
            link="https://amzn.to/3DhX9Jh"
          >
            A Passage North
          </ListItem>
          <ListItem subtitle="by Michele Hansen" link="https://amzn.to/3ss7rCX">
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
          <ListItem subtitle="by Alice Hasters" link="https://amzn.to/3jzyjfW">
            Was weiße Menschen nicht über Rassismus hören wollen aber wissen
            sollten
          </ListItem>
        </List>
        <Separator />
        <List title="Reading List 2020">
          <ListItem subtitle="by Cody McFadyen" link="https://amzn.to/2tw7Zxp">
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
          <ListItem subtitle="by Charlotte Link" link="https://amzn.to/2U8dFbw">
            Die letzte Spur (The last track)
          </ListItem>
          <ListItem subtitle="by Eric Ries" link="https://amzn.to/2uresu3">
            The Lean Startup: How Today's Entrepreneurs Use Continuous
            Innovation to Create Radically Successful Businesses
          </ListItem>
          <ListItem subtitle="by Richard Osman" link="https://amzn.to/343YBzt">
            The Thursday Murder Club
          </ListItem>
          <ListItem subtitle="by Joel Levy" link="https://amzn.to/30cRK5C">
            Psychology for Busy People: Everything You Really Should Know
          </ListItem>
          <ListItem subtitle="by Paula Hawkins" link="https://amzn.to/2T4pQ8d">
            The Girl on the Train
          </ListItem>
        </List>
      </Section>
    </Container>
  </PageLayout>
)

export default ReadingList
