import { Metadata, NextPage } from "next"

import { Paragraph } from "../../components/Paragraph"
import * as List from "../../components/List"

import { ExpandableSection } from "./ExpandableSection"
import { Heading1, Heading2 } from "../../components/Heading"
import { Link } from "../../components/Link"

export const metadata: Metadata = {
  title: "About me",
}

const AboutPage: NextPage = () => {
  return (
    <main className="p-4">
      <Heading1>
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

      <div className="mt-12 mb-16 space-y-8 md:-mx-16 md:mt-16 md:flex md:gap-16 md:space-y-0 lg:-mx-32">
        <section className="flex-none md:max-w-80 lg:max-w-96">
          <List.Root>
            <List.Title>Work Experience</List.Title>
            <List.Container className="mb-0 space-y-6">
              <List.Item>
                Senior Software Engineer / HubSpot
                <List.Subtitle>July 2024 — now</List.Subtitle>
              </List.Item>
              <List.Item>
                Senior Engineer / Intercom
                <List.Subtitle>April 2024 — June 2024</List.Subtitle>
                <Paragraph className="mt-2 text-neutral-500">
                  Owning and leading bigger, more strategic projects at team
                  level and contributing to the roadmap and technical strategy.
                  I'm also coaching and mentoring other team mates to help the
                  entire team work as effective as possible
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
                  As the team could not grow due to the impacts of the pandemic,
                  I was guiding and leading the front-end and back-end engineers
                  to collaborate and work closely together to help out each
                  other to fill gaps
                </Paragraph>
              </List.Item>
              <List.Item>
                Senior Frontend Engineer / Hussle
                <List.Subtitle>February 2020 — March 2021</List.Subtitle>
                <Paragraph className="mt-2 text-neutral-500">
                  In 2020, I made the decision to make another big step and
                  moved to London to work in FitTech at Hussle. This was my
                  chance to combine my passion for fitness with my passion for
                  tech.
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
                  creating software products. Therefore, I changed the type of
                  my business and created a custom brand for this company
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
                  Together with some friends, I created an awesome app for
                  digital personal training. I created the backend of first MVP
                  using Laravel as the framework of choice. Due to lack of time
                  and shift of interests, I left this project by the end of
                  2017.
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
        </section>
        <section>
          <div className="md:sticky md:top-24">
            <List.Root>
              <List.Title>Education</List.Title>
              <List.Container className="space-y-6">
                <List.Item>
                  B.Sc. Media Computer Science
                  <List.Subtitle>
                    Ulm University / 10/2011 - 09/2014
                  </List.Subtitle>
                </List.Item>
              </List.Container>
            </List.Root>
            <Heading2 level="small">Career vision</Heading2>
            <Paragraph className="mt-4 font-medium text-neutral-500">
              While I m currently on the IC track as a full-stack engineer, my
              strength is my ability to understand and get all stakeholders on
              the same page, enabling my team to deliver effectively and
              efficiently.
            </Paragraph>
            <Paragraph className="font-medium text-neutral-500">
              In the long term, I see myself in a role that allows me to support
              and lead one or multiple teams to deliver impactful outcomes.
            </Paragraph>
            <List.Root>
              <List.Title>Tech Stack</List.Title>
              <List.Container className="space-y-2">
                <List.Item>
                  <List.Link
                    target="_blank"
                    href="https://www.typescriptlang.org/"
                  >
                    TypeScript
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://nextjs.org/">
                    Next.js
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://tailwindcss.com">
                    Tailwind CSS
                  </List.Link>{" "}
                  <span className="text-xs text-neutral-500">and</span>{" "}
                  <List.Link target="_blank" href="https://cva.style/">
                    CVA
                  </List.Link>{" "}
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://jestjs.io/">
                    Jest
                  </List.Link>{" "}
                  <span className="text-xs text-neutral-500">and</span>{" "}
                  <List.Link
                    target="_blank"
                    href="https://testing-library.com/"
                  >
                    Testing Library
                  </List.Link>{" "}
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://tanstack.com/query">
                    TanStack Query
                  </List.Link>{" "}
                  <span className="text-xs text-neutral-500">or</span>{" "}
                  <List.Link target="_blank" href="https://swr.vercel.app">
                    SWR
                  </List.Link>{" "}
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://laravel.com/">
                    Laravel
                  </List.Link>{" "}
                  <span className="text-xs text-neutral-500">and</span>{" "}
                  <List.Link target="_blank" href="https://inertiajs.com/">
                    Inertia
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://phpunit.de">
                    PHPUnit
                  </List.Link>{" "}
                  <span className="text-xs text-neutral-500">or</span>{" "}
                  <List.Link target="_blank" href="https://pestphp.com/">
                    Pest
                  </List.Link>{" "}
                </List.Item>
              </List.Container>
            </List.Root>
            <List.Root>
              <List.Title>Tools and Services</List.Title>
              <List.Container className="space-y-2">
                <List.Item>
                  <List.Link
                    target="_blank"
                    href="https://code.visualstudio.com"
                  >
                    VS Code
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://hyper.is">
                    Hyper
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://www.netlify.com">
                    Netlify
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://www.figma.com">
                    Figma
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://www.notion.so">
                    Notion
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://github.com">
                    GitHub
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link target="_blank" href="https://forge.laravel.com">
                    Laravel Forge
                  </List.Link>
                </List.Item>
                <List.Item>
                  <List.Link
                    target="_blank"
                    href="https://m.do.co/c/9823c8ab6676"
                  >
                    Digital Ocean
                  </List.Link>
                </List.Item>
              </List.Container>
            </List.Root>
            <Paragraph className="mt-8 text-sm text-neutral-500">
              There are many other tools and services I use for deployment,
              monitoring and product management, but they all depend on the team
              and project I am working with and on
            </Paragraph>
          </div>
        </section>
      </div>
      <Paragraph>
        Want to have a local copy of the full resume?{" "}
        <Link href="/files/resume.pdf">
          <span className="text-sm md:text-base">Download the PDF here</span>
        </Link>
      </Paragraph>
    </main>
  )
}

export default AboutPage
