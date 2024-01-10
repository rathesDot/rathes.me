import React from "react"
import { NextPage } from "next"
import Image from "next/image"

import { PageLayout } from "../../layouts"

import { Paragraph, Meta, Heading1, Link } from "../../components"

import CalaisTemplateLarge from "../../assets/templates/calais-large.png"

const IndexPage: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout className="md:flex md:flex-grow md:flex-col md:justify-center">
    <Meta title={`Figma Template: Calais`} />
    <section className="md:flex md:gap-8 md:px-14">
      <div>
        <Image
          src={CalaisTemplateLarge}
          alt="Preview of template named 'Calais'"
          width={480}
        />
      </div>
      <div className=" max-w-md px-8 py-4">
        <Heading1>Calais — Figma Template</Heading1>
        <div className="my-2 text-neutral-50/60">£9.99</div>
        <div className="my-4">
          <Link
            href="https://aheenam.lemonsqueezy.com/checkout/buy/597d3764-92f3-4db7-a551-b17ac34a3d77?discount=0"
            className="block w-full cursor-pointer rounded bg-neutral-800/80 px-4 py-3 text-center font-semibold text-neutral-50 antialiased hover:bg-neutral-700/50"
          >
            Buy Now
          </Link>
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
