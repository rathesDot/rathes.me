import React from "react"
import { NextPage } from "next"

import { PageLayout } from "../../layouts"
import { Heading1, Paragraph, Meta } from "../../components"

const ManagingTime: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout>
    <Meta title="You can't manage time - A talk about what people call time management"></Meta>
    <div className="max-w-xl p-8">
      <Heading1>
        You can't manage time
        <span className="block text-base text-neutral-500">
          A talk about what people call time management
        </span>
      </Heading1>
      <Paragraph>
        How many different things did you already try out to be more productive
        and get more things done? How many tools do you own to accomplish more?
        And did it help?
      </Paragraph>
      <Paragraph>
        This talk focusses on what time management is about, why you can't
        manage time. You will learn about the emotional aspect of time
        management and the essential habits that will help you to get more
        things done.
      </Paragraph>
      <Paragraph>
        After this talk, you will have an idea of what you can work on if you
        want to get more things done. And you will understand what time
        management means.
      </Paragraph>
    </div>
  </PageLayout>
)

export default ManagingTime
