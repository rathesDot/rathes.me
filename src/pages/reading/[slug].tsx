import React from "react"

import { PageLayout } from "../../layouts"
import { Meta, Heading1 } from "../../components"

const BookDetailsPage = () => (
  <PageLayout>
    <Meta title="Book: " />
    <div className="max-w-xl p-8 md:px-14">
      <Heading1>Book Details page</Heading1>
    </div>
  </PageLayout>
)

export default BookDetailsPage
