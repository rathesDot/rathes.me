import { Metadata, NextPage } from "next"

import { SayHi } from "../../patterns/SayHi"
import { Paragraph } from "../../components/Paragraph"
import * as List from "../../components/List"

import { ExpandableSection } from "./ExpandableSection"
import { Heading1 } from "../../components/Heading"

export const metadata: Metadata = {
  title: "About me",
}

const AboutPage: NextPage = () => {
  return (
    <div className="">
      <Heading1 className="mb-2">
        I'm a front-end engineer with over 10 years of web experience.
      </Heading1>
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
          <List.Container className="space-y-6">
            <List.Item>
              Senior Engineer / Intercom
              <List.Subtitle>April 2024 — now</List.Subtitle>
              <Paragraph className="mt-2 text-neutral-500">
                Owning and leading bigger, more strategic projects at team level
                and contributing to the roadmap and technical strategy. I'm also
                coaching and mentoring other team mates to help the entire team
                work as effective as possible
              </Paragraph>
            </List.Item>
            <List.Item>
              Product Engineer 3 / Intercom
              <List.Subtitle>December 2021 — March 2024</List.Subtitle>
            </List.Item>
            <List.Item>
              Engineering Team Lead / Hussle
              <List.Subtitle>April 2021 — November 2021</List.Subtitle>
              <Paragraph className="mt-2 text-neutral-500">
                As the team could not grow due to the impacts of the pandemic, I
                was guiding and leading the front-end and back-end engineers to
                collaborate and work closely together to help out each other to
                fill gaps
              </Paragraph>
            </List.Item>
            <List.Item>
              Senior Frontend Engineer / Hussle
              <List.Subtitle>February 2020 — March 2021</List.Subtitle>
              <Paragraph className="mt-2 text-neutral-500">
                In 2020, I made the decision to make another big step and moved
                to London to work in FitTech at Hussle. This was my chance to
                combine my passion for fitness with my passion for tech.
              </Paragraph>
            </List.Item>
            <List.Item>
              Software Engineer / Teamleader
              <List.Subtitle>May 2018 — January 2020</List.Subtitle>
            </List.Item>
            <List.Item>
              Founder / Aheenam
              <List.Subtitle>May 2016 — October 2021</List.Subtitle>
              <Paragraph className="mt-2 text-neutral-500">
                In 2016, I decided decrease client work and focus more on
                creating software products. Therefore, I changed the type of my
                business and created a custom brand for this company
              </Paragraph>
            </List.Item>
            <List.Item>
              Web Developer / netinsiders
              <List.Subtitle>November 2016 — April 2018</List.Subtitle>
            </List.Item>
            <List.Item>
              Co-Founder / Kernwerk
              <List.Subtitle>October 2015 — January 2018</List.Subtitle>
              <Paragraph className="mt-2 text-neutral-500">
                Together with some friends, I created an awesome app for digital
                personal training. I created the backend of first MVP using
                Laravel as the framework of choice. Due to lack of time and
                shift of interests, I left this project by the end of 2017.
              </Paragraph>
            </List.Item>
            <List.Item>
              Product Assistant / Kopierland GmbH
              <List.Subtitle>June 2011 — March 2014</List.Subtitle>
            </List.Item>
            <List.Item>
              Web Designer / rathesDot (CreativeCreation)
              <List.Subtitle>June 2006 — March 2016</List.Subtitle>
              <Paragraph className="mt-2 text-neutral-500">
                Earning my first money creating custom MySpace layouts, I went
                on to create custom websites for various customer of different
                sizes as a freelancer
              </Paragraph>
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
