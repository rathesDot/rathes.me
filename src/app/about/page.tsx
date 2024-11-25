import { Metadata, NextPage } from "next"

import { Paragraph } from "../../components/Paragraph"
import * as List from "../../components/List"

import { heading, Heading1, Heading2 } from "../../components/Heading"
import { Link } from "../../components/Link"

export const metadata: Metadata = {
  title: "About me",
}

const AboutPage: NextPage = () => {
  return (
    <main className="space-y-12 p-4 lg:px-0">
      <section>
        <Heading1>
          I'm a front-end engineer with over 10 years of web experience.
        </Heading1>
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
        <Heading2>Career vision</Heading2>
        <Paragraph>
          While I m currently on the IC track as a full-stack engineer, my
          strength is my ability to understand and get all stakeholders on the
          same page, enabling my team to deliver effectively and efficiently.
        </Paragraph>
        <Paragraph>
          In the long term, I see myself in a role that allows me to support and
          lead one or multiple teams to deliver impactful outcomes.
        </Paragraph>
      </section>

      <section>
        <header className="mb-3 flex items-center justify-between">
          <Heading2 level="small">Work Experience</Heading2>
          <Link
            className={heading({ level: "small" })}
            href="/files/resume.pdf"
            underlined={false}
            download
          >
            Download CV
          </Link>
        </header>
        <List.Container className="space-y-4">
          <List.Item>
            Senior Software Engineer / HubSpot
            <List.Subtitle>July 2024 — now</List.Subtitle>
          </List.Item>
          <List.Item>
            Senior Engineer / Intercom
            <List.Subtitle>April 2024 — June 2024</List.Subtitle>
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
              In 2020, I made the decision to make another big step and moved to
              London to work in FitTech at Hussle. This was my chance to combine
              my passion for fitness with my passion for tech.
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
              In 2016, I decided decrease client work and focus more on creating
              software products. Therefore, I changed the type of my business
              and created a custom brand for this company
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
              Laravel as the framework of choice. Due to lack of time and shift
              of interests, I left this project by the end of 2017.
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
              Earning my first money creating custom MySpace layouts, I went on
              to create custom websites for various customer of different sizes
              as a freelancer
            </Paragraph>
          </List.Item>
        </List.Container>
      </section>
    </main>
  )
}

export default AboutPage
