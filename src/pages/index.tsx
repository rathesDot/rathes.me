import React from "react"
import { NextPage } from "next"

import { Link, Meta } from "../components"
import { PageLayout } from "../layouts"

const IndexPage: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout>
    <Meta title="Home" />
    <section className="p-8">
      <h1 className="mb-8 max-w-xl break-words font-sans text-[3.55vh] font-semibold leading-[1.2em] text-neutral-50 antialiased">
        I'm Rathes Sachchithananthan, a front-end engineer living in{" "}
        <Link underlined href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9">
          London
        </Link>{" "}
        interested in fitness, languages, books &amp; cooking.
      </h1>
      <p className="mb-8 max-w-xl break-words font-sans text-[3.55vh] font-semibold leading-[1.2em] text-neutral-50 antialiased">
        Currently, I work as a product engineer at{" "}
        <Link underlined href="https://www.intercom.com/">
          Intercom
        </Link>{" "}
        helping businesses building better customer relationships.
      </p>
      <p className="mb-8 max-w-xl break-words font-sans text-[3.55vh] font-semibold leading-[1.2em] text-neutral-50 antialiased">
        Find out more about me on{" "}
        <Link
          underlined
          href="https://mozhi.app/@tamizhographer"
          target="_blank"
        >
          Mozhi
        </Link>
      </p>
    </section>
  </PageLayout>
)

export default IndexPage
