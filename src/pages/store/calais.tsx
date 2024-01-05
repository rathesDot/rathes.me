import React from "react"
import { NextPage } from "next"
import Image from "next/image"

import { PageLayout } from "../../layouts"

import { Paragraph, Meta, Heading1 } from "../../components"

import CalaisTemplate from "../../assets/templates/calais.png"

const IndexPage: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout className="md:flex md:flex-grow md:flex-col md:justify-center">
    <Meta title={`Figma Template: Calais`} />
    <section className="md:flex md:gap-8 md:px-14">
      <Image
        src={CalaisTemplate}
        alt="Preview of template named 'Calais'"
        width={480}
      />
      <div className=" max-w-md px-8 py-4">
        <Heading1>Calais — Figma Template</Heading1>
        <div className="my-2 text-neutral-50/60">$10.00</div>
        <div className="my-4">
          <button
            disabled
            className="block w-full rounded bg-neutral-800/90 px-4 py-3 font-semibold text-neutral-50/50 antialiased"
          >
            Buy Now (coming soon)
          </button>
        </div>
        <Paragraph>
          A minimal personal portfolio template best for someone who wants to
          showcase their projects but also have their resume ready on their
          website.
        </Paragraph>

        <Paragraph>
          This template comes with 7 pages (Home, About, Work, Case Study, Blog,
          Single Blog Post and Contact) designed for mobile and desktop screen
          sizes. The key elements have been separated as components so you can
          modify them as you like.
        </Paragraph>

        <Paragraph className="italic text-neutral-50/45">
          You will get a Calais.fig (41.3MB) file.
        </Paragraph>
      </div>
    </section>
  </PageLayout>
)

export default IndexPage
