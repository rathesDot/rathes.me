import { NextPage } from "next"
import { Link } from "../components/Link"

const HomePage: NextPage = () => {
  return (
    <div className="mt-8">
      <h1 className="mb-8 max-w-xl break-words font-sans text-[3.55vh] font-semibold leading-[1.2em] text-neutral-50 antialiased md:text-[clamp(32px,7.5vw,36px)]">
        I'm Rathes Sachchithananthan, a front-end engineer living in{" "}
        <Link
          className="text-white decoration-dotted underline-offset-4"
          href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9"
        >
          London
        </Link>{" "}
        interested in fitness, languages, books &amp; cooking.
      </h1>
      <p className="mb-8 max-w-xl break-words font-sans text-[3.55vh] font-semibold leading-[1.2em] text-neutral-50 antialiased md:text-[clamp(32px,7.5vw,36px)]">
        Currently, I work as a product engineer at{" "}
        <Link
          className="text-white decoration-dotted underline-offset-4"
          href="https://www.intercom.com/"
        >
          Intercom
        </Link>{" "}
        helping businesses building better customer relationships.
      </p>
      <p className="mb-8 max-w-xl break-words font-sans text-[3.55vh] font-semibold leading-[1.2em] text-neutral-50 antialiased md:text-[clamp(32px,7.5vw,36px)]">
        Find out more about me on{" "}
        <Link
          className="text-white decoration-dotted underline-offset-4"
          href="https://mozhi.app/@tamizhographer"
          target="_blank"
        >
          Mozhi
        </Link>
      </p>
    </div>
  )
}

export default HomePage
