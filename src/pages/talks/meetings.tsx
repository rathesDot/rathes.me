import React from "react"
import { NextPage } from "next"

import { PageLayout } from "../../layouts"
import { Heading1, Paragraph, Meta } from "../../components"

const Meetings: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout>
    <Meta title="You probably don't need that meeting - Developing a meeting culture that employees will love"></Meta>
    <div className="max-w-[640px]">
      <Heading1>
        You probably don't need that meeting
        <span className="block text-base text-neutral-500">
          Developing a meeting culture that employees will love
        </span>
      </Heading1>
      <Paragraph>
        Be honest with yourself. How many of your meetings do you think were
        useful? And how many of them were productive? In this talk, we will talk
        about developing a meeting culture that everybody in the company will
        love!
      </Paragraph>
      <Paragraph>
        You will learn how to avoid unnecessary meetings, how other types of
        communication can be more effective and efficient. You will also learn
        how to conduct those unavoidable meetings so that they are productive
        and don't feel like a waste of time.
      </Paragraph>
      <Paragraph>
        After this talk, you will be able to avoid useless meetings and make the
        necessary meetings more productive.
      </Paragraph>
    </div>
  </PageLayout>
)

export default Meetings
