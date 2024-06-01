import { Metadata, NextPage } from "next"
import Image from "next/image"

import { Heading1, Link, Paragraph } from "../../../components"

import CalaisTemplateLarge from "../../../assets/templates/calais-large.png"
import CalaisPreviewDesktop from "../../../assets/templates/calais-preview-home-desktop.png"
import CalaisPreviewMobile from "../../../assets/templates/calais-preview-mobile.png"

export const metadata: Metadata = {
  title: "Figma Template: Calais",
  description: "I love to read, I read any book that I can get my hands on.",
}

const CalaisPage: NextPage = () => (
  <div className="md:flex md:flex-grow md:flex-col md:justify-center">
    <section className="md:flex md:gap-8 md:px-14">
      <div className="flex flex-col gap-4">
        <Image
          src={CalaisTemplateLarge}
          alt="Preview of template named 'Calais'"
          width={480}
        />
        <Image
          src={CalaisPreviewDesktop}
          alt="Preview of template named 'Calais'"
          width={480}
          className="hidden md:block"
        />
        <Image
          src={CalaisPreviewMobile}
          alt="Preview of template named 'Calais'"
          width={480}
          className="hidden md:block"
        />
      </div>
      <div className="max-w-md px-8 py-4">
        <div className="md:sticky md:top-32">
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
            This template comes with 7 pages (Home, About, Work, Case Study,
            Blog, Single Blog Post and Contact) designed for mobile and desktop
            screen sizes. The key elements have been separated as components so
            you can modify them as you like.
          </Paragraph>

          <Paragraph className="italic text-neutral-50/45">
            You will get a Calais.fig (41.3MB) file.
          </Paragraph>
        </div>
      </div>
    </section>
  </div>
)

export default CalaisPage
