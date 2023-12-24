import { NextPage } from "next"
import { PageLayout } from "../layouts"
import { Heading1, Meta, Paragraph } from "../components"

const Photos: NextPage = () => (
  <PageLayout>
    <Meta title="Work" />
    <section className="p-8">
      <Heading1 size={2}>Photography</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit
        nunc massa, condimentum accumsan lectus luctus vitae.
      </Paragraph>
      <Paragraph>
        Vestibulum commodo porta neque eget semper. Phasellus non dictum metus.
        Pellentesque pretium est quis aliquet tempus.
      </Paragraph>
    </section>
  </PageLayout>
)

export default Photos
