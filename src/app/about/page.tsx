import { Metadata, NextPage } from "next"

import { PageLayout } from "../../layouts"
import { SayHi } from "../../patterns"
import { Heading1, List, ListItem, Paragraph } from "../../components"

import { ExpandableSection } from "./ExpandableSection"

export const metadata: Metadata = {
  title: "About me",
}

const AboutPage: NextPage = () => {
  return (
    <PageLayout>
      <div className="max-w-[720px] p-8 md:px-14 lg:max-w-none">
        <Heading1 className="lg:max-w-2xl">
          I'm a front-end engineer with over 10 years of web experience.
        </Heading1>
        <ExpandableSection>
          <Paragraph>
            I started working as a web designer and web developer at a very
            young age. I earned my first money as a web designer creating custom
            MySpace layouts when I was just 14. In 2008, at the age of 16, I
            founded my own company for web design and development. Since then, I
            have worked with several clients doing quite a wide range of tasks.
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
            connecting them with each other. Alongside that, I'm passionate
            about learning new languages and cultures.
          </Paragraph>
        </ExpandableSection>

        <section className="mt-12 md:mt-32">
          <List title="Work Experience" className="md:flex md:gap-12">
            <div className="flex flex-col gap-6">
              <ListItem subtitle="April 2024 — now">
                Senior Engineer / Intercom
              </ListItem>
              <ListItem subtitle="December 2021 — March 2024">
                Product Engineer 3 / Intercom
              </ListItem>
              <ListItem subtitle="April 2021 — November 2021">
                Engineering Team Lead / Hussle
              </ListItem>
              <ListItem subtitle="February 2020 — March 2021">
                Senior Frontend Engineer / Hussle
              </ListItem>
              <ListItem subtitle="May 2018 — January 2020">
                Software Engineer / Teamleader
              </ListItem>
            </div>
            <div className="mt-6 flex flex-col gap-6 md:mt-0">
              <ListItem subtitle="May 2016 — October 2021">
                Founder / Aheenam
              </ListItem>
              <ListItem subtitle="November 2016 — April 2018">
                Web Developer / netinsiders
              </ListItem>
              <ListItem subtitle="October 2015 — January 2018">
                Co-Founder / Kernwerk
              </ListItem>
              <ListItem subtitle="June 2011 — March 2014">
                Product Assistant / Kopierland GmbH
              </ListItem>
              <ListItem subtitle="June 2006 — March 2016">
                Web Designer / rathesDot (CreativeCreation)
              </ListItem>
            </div>
          </List>
          <a
            href="/files/resume.pdf"
            className="mt-8 inline-flex items-center gap-1"
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
    </PageLayout>
  )
}

export default AboutPage
