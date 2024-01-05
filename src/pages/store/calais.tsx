import React from "react"
import { NextPage } from "next"

import { Meta } from "../../components"
import { PageLayout } from "../../layouts"

const IndexPage: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout className="flex flex-grow flex-col justify-center">
    <Meta title={`Figma Template: Calais`} />
    <section className="p-8 md:px-14"></section>
  </PageLayout>
)

export default IndexPage
