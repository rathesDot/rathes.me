import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SayHi from "../components/SayHi"

const AboutMe = ({ data }) => (
  <Layout className="p-4 md:p-8">
    <SEO title="About me" />
    <section className="md:max-w-570px md:text-lg">
      <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
        /raðiːs/
      </h1>
      <p>
        I’m Rathes Sachchithananthan, a web developer with not only interests in
        engineering but also product development & design, user & customer
        experience and most importantly in languages and cultures.
      </p>
      <p>
        I started working as a web designer and web developer at very young
        ages. At the age of 14, I earned my first money as a web designer
        creating custom MySpace layouts and in 2008, at the age of 16, I founded
        my first own company for web design and development. Since then I have
        worked with several clients doing quite a wide range of tasks.
      </p>
      <p>
        For more than 10 years I have been working as a web developer doing
        solving problems as a back-end engineer using languages such as PHP,
        Python or Node.js but also as a front-end developer working with
        HTML/CSS and JavaScript.
      </p>
      <p>
        However, my real passion is not for software and development. I’m more
        into solving problems for people, make their lives easier and connect
        them with each other. Together with that, I’m passionate about learning
        new languages and cultures.
      </p>
      <p>
        Nowadays, I work as a web developer at Teamleader in Ghent, Belgium
        building things using PHP in the back-end and React in the front-end.
      </p>
      <p>
        Apart from that, I spent most of my time working smaller side projects
        at Aheenam. Right now I’m working on providing a platform for people to
        learn my mother language Tamil.
      </p>

      <h2 className="text-3xl mt-12 font-bold leading-none text-white break-words xs:text-4xl">
        What I read
      </h2>
      <p>
        Books play an important part in my life. Just sitting my couch or bed
        and reading a novel can be really inspiring.
      </p>
      <p>
        I do fancy crime novels with interesting detective characters from good
        old Sherlock Holmes to Harry Hole. But I read basically any kind of
        books that can broaden one’s horizons.
      </p>
      <p>
        Actually, I dream to have my own library one where I can invite
        everybody to pick up a nice book and read.
      </p>
      <div className="md:flex md:w-700px">
        <div className="flex my-4 md:w-1/2">
          <Img
            className="w-1/2 mr-4"
            fluid={data.companyOfOne.childImageSharp.fluid}
          />
          <Img className="w-1/2" fluid={data.carrie.childImageSharp.fluid} />
        </div>
        <div className="flex my-4 md:w-1/2">
          <Img
            className="w-1/2 mr-4"
            fluid={data.crookedKingdom.childImageSharp.fluid}
          />
          <Img
            className="w-1/2"
            fluid={data.knotsAndCrosses.childImageSharp.fluid}
          />
        </div>
      </div>
      <h2 className="text-3xl mt-12 font-bold leading-none text-white break-words xs:text-4xl">
        What I write
      </h2>
      <p>
        From time to time I also write. It can be work related topics that I
        share in the writing section of this website but I also write to empty
        my mind and eternalize ideas.
      </p>
      <p>
        I have several ideas for some crime novel and I even developed my
        detective character “Chris Garner”. I want to publish my first short
        stories soon.
      </p>
      <p>
        Before I can do that I have to finish my current book which is called “A
        guide to basic Tamil Grammar”. I’m writing that book as an entry point
        for my learning platform.
      </p>
    </section>
    <SayHi />
  </Layout>
)

export const query = graphql`
  query {
    companyOfOne: file(
      relativePath: { eq: "images/company-of-one-paul-jarvis.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carrie: file(relativePath: { eq: "images/stephen-king-carrie.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    knotsAndCrosses: file(
      relativePath: { eq: "images/knots-and-crosses-ian-rankin.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crookedKingdom: file(
      relativePath: { eq: "images/crooked-kingdom-leigh-bardugo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutMe
