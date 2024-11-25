import { NextPage } from "next"
import { Link } from "../components/Link"
import { Heading1, heading } from "../components/Heading"

const HomePage: NextPage = () => {
  return (
    <main className="space-y-12 p-4">
      <Heading1>
        I'm Rathes Sachchithananthan, a front-end engineer living in{" "}
        <Link href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9">London</Link>{" "}
        interested in fitness, languages, books &amp; cooking.
      </Heading1>
      <p className={heading({ level: "h1" })}>
        Currently, I work as a senior software engineer at{" "}
        <Link href="https://www.hubspot.com/">HubSpot</Link> helping businesses
        grow better.
      </p>
      <p className={heading({ level: "h1" })}>
        Find out more about me on{" "}
        <Link href="https://pinkary.com/@tamizhographer" target="_blank">
          Pinkary
        </Link>
      </p>
    </main>
  )
}

export default HomePage
