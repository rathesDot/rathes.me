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
        <Separator />
        <List title="Reading List 2019">
          <ListItem
            subtitle="by Paul Jarvis"
            link="https://www.amazon.de/Company-One-Staying-Small-Business/dp/0241380227/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30Q5H7258RS6N&keywords=company+of+one&qid=1569783760&s=gateway&sprefix=Company+,aps,156&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=64b51b5b329ae16ef1a79cf782d2e1c0&language=de_DE) [Company of One: Why Staying Small is the Next Big Thing for Business](https://www.amazon.de/Company-One-Staying-Small-Business/dp/0241380227/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30Q5H7258RS6N&keywords=company+of+one&qid=1569783760&s=gateway&sprefix=Company+,aps,156&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=64b51b5b329ae16ef1a79cf782d2e1c0&language=de_DE"
          >
            Company of One
          </ListItem>
          <ListItem
            subtitle="by Leigh Bardugo"
            link="https://www.amazon.de/Six-Crows-Crooked-Kingdom-Book/dp/1780622317/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=172EZFM0NO73E&keywords=crooked+kingdom&qid=1569783979&s=gateway&sprefix=Crooked+King,aps,146&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=1f9016fab24cfba12a2e409bac0f5d11&language=de_DE) [Crooked Kingdom](https://www.amazon.de/Six-Crows-Crooked-Kingdom-Book/dp/1780622317/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=172EZFM0NO73E&keywords=crooked+kingdom&qid=1569783979&s=gateway&sprefix=Crooked+King,aps,146&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=1f9016fab24cfba12a2e409bac0f5d11&language=de_DE"
          >
            Crooked Kingdom
          </ListItem>
          <ListItem
            subtitle="by Stephen King"
            link="https://www.amazon.de/Carrie-Stephen-King/dp/0450018628/ref=as_li_ss_tl?_encoding=UTF8&qid=1569784151&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=19d572bb5e3ca68dbfb3d580b89c3a5e&language=de_DE"
          >
            Carrie
          </ListItem>
          <ListItem
            subtitle="by Ian Rankin"
            link="https://www.amazon.de/Knots-Crosses-Rebus-Novel-Rankin/dp/0752883534/ref=as_li_ss_tl?\_\_mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WDIWI3I22Z6Q&keywords=knots+and+crosses&qid=1569784300&s=books-intl-de&sprefix=Knots+,english-books,198&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=6e77b3898028ea0cf2eee8c9e2fb5714&language=de_DE"
          >
            Knots and Crosses
          </ListItem>
          <ListItem
            subtitle="by Gabriel Wyner"
            link="https://www.amazon.de/Fluent-Forever-Learn-Language-Forget/dp/0385348118/ref=as_li_ss_tl?\_\_mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=392R9S4R0TJ8R&keywords=fluent+forever&qid=1569785112&s=gateway&sprefix=fluent+fo,aps,147&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=fe5e639e9481ed1c10eb8d7ffa99fe74&language=de_DE"
          >
            Fluent Forever: How to Learn Any Language Fast and Never Forget It
          </ListItem>
          <ListItem
            subtitle="by Gary Keller, Jay Papasan"
            link="https://www.amazon.de/gp/product/1848549253/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=sl1&tag=aheenam-21&linkId=e41b389168ba6de0b9361ee200cdb4c0&language=de_DE"
          >
            The One Thing: The Surprisingly Simple Truth Behind Extraordinary
            Results
          </ListItem>
          <ListItem
            subtitle="by Jason Fried, David Heinemeier Hansson"
            link="https://www.amazon.de/Doesnt-Have-Be-Crazy-Work/dp/0062874780/ref=as_li_ss_tl?\_\_mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1VTWBPPJBMM4G&keywords=it+doesnt+have+to+be+crazy+at+work&qid=1569784737&s=books-intl-de&sprefix=It+doe,english-books,144&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=e3d47d2ed74d92f7b76169f166aa9602&language=de_DE"
          >
            It Doesn't Have to Be Crazy at Work
          </ListItem>
          <ListItem
            subtitle="by James N. Frey"
            link="https://www.amazon.de/Write-Damn-Novel-Step-Step/dp/0312010443/ref=as_li_ss_tl?\_\_mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GFH4GODP9KJQ&keywords=how+to+write+a+damn+good+novel&qid=1569784848&s=books-intl-de&sprefix=How+to+write+a+dam,english-books,149&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=b097480b152cdddfa4a7819ea4eb6762&language=de_DE"
          >
            How to Write a Damn Good Novel: A Step-By-Step No Nonsense Guide to
            Dramatic Storytelling
          </ListItem>
          <ListItem
            subtitle="by Sebastian Fitzek"
            link="https://www.amazon.de/Eye-Collector-Sebastian-Fitzek/dp/0857893718/ref=as_li_ss_tl?\_encoding=UTF8&qid=1569785773&sr=8-2&linkCode=sl1&tag=aheenam-21&linkId=9c0eee4ede2677230d7f3dd92cd7d8c2&language=de_DE"
          >
            The Eye Collector
          </ListItem>
          <ListItem
            subtitle="by Sunila Galappatti"
            link="https://www.amazon.de/gp/product/9350291770/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=sl1&tag=aheenam-21&linkId=c63e2d759691bd90defd148ce310c6ae&language=de_DE"
          >
            A Long Watch: War, Captivity and Return in Sri Lanka
          </ListItem>
          <ListItem
            subtitle="by Andrew Couldwell"
            link="https://designsystemfoundations.com/"
          >
            Laying the Foundations — A book about design systems
          </ListItem>
          <ListItem
            subtitle="by Agatha Christie"
            link="https://amzn.to/2sIwXsT"
          >
            Death on the Nile
          </ListItem>
          <ListItem subtitle="by Dan Brown" link="https://amzn.to/2tkH9bm">
            Origin (Robert Langdon 5)
          </ListItem>
        </List>
        <Separator />
        <List title="Reading List 2017">
          <ListItem
            subtitle="by Mary Higgins Clark"
            link="https://amzn.to/3ijBSqJ"
          >
            Stillwatch
          </ListItem>
          <ListItem subtitle="by Ransom Riggs" link="https://amzn.to/3qiAzwE">
            Miss Peregrine's Home for Peculiar Children
          </ListItem>
          <ListItem subtitle="by Elmore Leonard" link="https://amzn.to/3ijBGaZ">
            Split Images
          </ListItem>
          <ListItem subtitle="by Dale Carnegie" link="https://amzn.to/37Iw0W2">
            How to Win Friends & Influence People
          </ListItem>
          <ListItem subtitle="by Jo Nesbø" link="https://amzn.to/3CTAJzv">
            Flaggermusmannen, The Bat
          </ListItem>
          <ListItem subtitle="by Stephen King" link="https://amzn.to/3JisrDP">
            It
          </ListItem>
          <ListItem subtitle="by Tom Peters" link="https://amzn.to/36e1p21">
            The brandyou50
          </ListItem>
          <ListItem
            subtitle="by Meena Kandasamy"
            link="https://amzn.to/3utuFu3"
          >
            The Gypsy Goddess
          </ListItem>
          <ListItem
            subtitle="by Douglas Preston"
            link="https://amzn.to/3qlsqaH"
          >
            The Kraken Project
          </ListItem>
          <ListItem
            subtitle="by A.Jeyaratnam Wilson"
            link="https://amzn.to/3Jnv1IQ"
          >
            S.J.V.Chelvanayakam and the Crisis of Sri Lankan Tamil Nationalism
          </ListItem>
          <ListItem
            subtitle="by Andreas Eschbach"
            link="https://amzn.to/3ImoNHN"
          >
            Lord of All Things
          </ListItem>
          <ListItem subtitle="by Ian Rankin" link="https://amzn.to/3ua11tp">
            Saints of the Shadow Bible
          </ListItem>
        </List>
      </Section>
    </Container>
  </PageLayout>
)

export default ReadingList
