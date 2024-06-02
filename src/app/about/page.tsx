import { Metadata, NextPage } from "next"

import { SayHi } from "../../patterns/SayHi"
import { Heading1, Paragraph } from "../../components"
import * as List from "../../components/List/List"

import { ExpandableSection } from "./ExpandableSection"

export const metadata: Metadata = {
  title: "About me",
}

const AboutPage: NextPage = () => {
  return (
    <div className="">
      <h1 className="mb-2 mt-8 text-2xl font-bold leading-tight tracking-[-0.01em] text-white antialiased">
        I'm a front-end engineer with over 10 years of web experience.
      </h1>
      <ExpandableSection>
        <Paragraph>
          I started working as a web designer and web developer at a very young
          age. I earned my first money as a web designer creating custom MySpace
          layouts when I was just 14. In 2008, at the age of 16, I founded my
          own company for web design and development. Since then, I have worked
          with several clients doing quite a wide range of tasks.
        </Paragraph>
        <Paragraph>
          For more than 10 years, I have been working as a web developer doing
          problem-solving as a back-end engineer using languages such as PHP,
          Python or Node.js but also as a front-end developer working with
          HTML/CSS and JavaScript.
        </Paragraph>
        <Paragraph>
          However, my real passion lies beyond software and development. I'm
          more into solving problems for people, make their lives easier and
          connecting them with each other. Alongside that, I'm passionate about
          learning new languages and cultures.
        </Paragraph>
      </ExpandableSection>

      <section className="mt-12 md:mt-16">
        <List.Root>
          <List.Title>Work Experience</List.Title>
          <List.Container>
            <List.Item>
              Senior Engineer / Intercom
              <List.Subtitle>April 2024 — now</List.Subtitle>
            </List.Item>
            <List.Item>
              Product Engineer 3 / Intercom
              <List.Subtitle>December 2021 — March 2024</List.Subtitle>
            </List.Item>
            <List.Item>
              Engineering Team Lead / Hussle
              <List.Subtitle>April 2021 — November 2021</List.Subtitle>
            </List.Item>
            <List.Item>
              Senior Frontend Engineer / Hussle
              <List.Subtitle>February 2020 — March 2021</List.Subtitle>
            </List.Item>
            <List.Item>
              Software Engineer / Teamleader
              <List.Subtitle>May 2018 — January 2020</List.Subtitle>
            </List.Item>
            <List.Item>
              Founder / Aheenam
              <List.Subtitle>May 2016 — October 2021</List.Subtitle>
            </List.Item>
            <List.Item>
              Web Developer / netinsiders
              <List.Subtitle>November 2016 — April 2018</List.Subtitle>
            </List.Item>
            <List.Item>
              Co-Founder / Kernwerk
              <List.Subtitle>October 2015 — January 2018</List.Subtitle>
            </List.Item>
            <List.Item>
              Product Assistant / Kopierland GmbH
              <List.Subtitle>June 2011 — March 2014</List.Subtitle>
            </List.Item>
            <List.Item>
              Web Designer / rathesDot (CreativeCreation)
              <List.Subtitle>June 2006 — March 2016</List.Subtitle>
            </List.Item>
          </List.Container>
        </List.Root>
        <a
          href="/files/resume.pdf"
          className="mt-8 flex items-center gap-1 font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-2 antialiased transition-colors hover:decoration-neutral-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span className="text-sm md:text-base">Download CV</span>
        </a>
      </section>

      <div className="mt-16 md:mt-32">
        <SayHi />
      </div>
    </div>
  )
}

export default AboutPage
