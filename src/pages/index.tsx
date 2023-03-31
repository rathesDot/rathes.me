import React from "react"
import { NextPage } from "next"

import { Link, List, ListItem, Meta } from "../components"
import { PageLayout } from "../layouts"

const IndexPage: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout>
    <Meta title="Home" />
    <section>
      <h1 className="mb-8 max-w-xl break-words font-sansDisplay text-xl font-medium leading-snug text-neutral-900 antialiased dark:text-neutral-50 sm:text-2xl">
        I'm Rathes Sachchithananthan, a front-end engineer living in{" "}
        <Link underlined href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9">
          London
        </Link>{" "}
        interested in fitness, languages, books &amp; cooking.
      </h1>
      <p className="mb-8 max-w-xl break-words font-sansDisplay text-xl font-medium leading-snug text-neutral-900 antialiased dark:text-neutral-50 sm:text-2xl">
        Currently, I work as a product engineer at{" "}
        <Link underlined href="https://www.intercom.com/">
          Intercom
        </Link>{" "}
        helping businesses building better customer relationships.
      </p>
      <p className="mb-8 max-w-xl break-words font-sansDisplay text-xl font-medium leading-snug text-neutral-900 antialiased dark:text-neutral-50 sm:text-2xl">
        Find out more about me on{" "}
        <Link underlined href="https://twitter.com/rswebdesigner">
          Twitter
        </Link>{" "}
        or{" "}
        <Link underlined href="https://www.instagram.com/tamizhographer/">
          Instagram
        </Link>
      </p>

      <section className="my-24">
        <List title="Featured Posts">
          <ListItem link="/blog/en/building-maxout">Building Maxout</ListItem>
          <ListItem link="/blog/en/from-couch-to-5k">
            From Couch to 5k — A simple way to get into running
          </ListItem>
          <ListItem link="/blog/en/how-to-slack">How-To Slack</ListItem>
          <ListItem link="/blog/en/customer-experience-instead-of-features">
            Stop thinking in features. Start thinking in customer experience.
          </ListItem>
          <ListItem link="/blog/en/essential-metrics-saas-businesses">
            Essential metrics for SaaS businesses
          </ListItem>
          <ListItem link="/blog/en/developing-meeting-culture-employees-love">
            Developing a meeting culture that your employees will love
          </ListItem>
        </List>
      </section>
    </section>
  </PageLayout>
)

export default IndexPage
