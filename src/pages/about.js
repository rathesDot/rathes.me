import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SayHi from "../components/SayHi"
import ReadingList from "../components/ReadingList"

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <section className="flex-grow">
      <section className="md:max-w-570px md:text-lg">
        <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
          /raðiːs/
        </h1>
        <p>
          I’m Rathes Sachchithananthan, a web developer with not only interests
          in engineering but also product development & design, user & customer
          experience and most importantly in languages and cultures.
        </p>
        <p>
          I started working as a web designer and web developer at very young
          ages. At the age of 14, I earned my first money as a web designer
          creating custom MySpace layouts and in 2008, at the age of 16, I
          founded my first own company for web design and development. Since
          then I have worked with several clients doing quite a wide range of
          tasks.
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
          them with each other. Together with that, I’m passionate about
          learning new languages and cultures.
        </p>
        <p>
          Nowadays, I work as a web developer at Teamleader in Ghent, Belgium
          building things using PHP in the back-end and React in the front-end.
        </p>
        <p>
          Apart from that, I spent most of my time working smaller side projects
          at Aheenam. Right now I’m working on providing a platform for people
          to learn my mother language Tamil.
        </p>

        <h2 className="text-3xl mt-12 font-bold leading-none text-white break-words xs:text-4xl">
          What I read
        </h2>
        <p>
          Books play an important part in my life. Just sitting my couch or bed
          and reading a novel can be really inspiring.
        </p>
        <p>
          I do fancy crime novels with interesting detective characters from
          good old Sherlock Holmes to Harry Hole. But I read basically any kind
          of books that can broaden one’s horizons.
        </p>
        <p>
          Actually, I dream to have my own library one where I can invite
          everybody to pick up a nice book and read.
        </p>
        <h3 className="text-xl mt-12 font-bold leading-none text-white break-words xs:text-2xl">
          Reading List 2020
        </h3>
        <ReadingList>
          <ReadingList.Book
            author="Cody McFadyen"
            link="https://amzn.to/2tw7Zxp"
            title="Shadow Man (Smoky Barrett, Band 1)"
          />
        </ReadingList>
        <hr className="my-8 block w-10 border-t border-silver-darkest" />
        <ReadingList>
          <ReadingList.Book
            author="Ransom Riggs"
            link="https://amzn.to/2MYAfj6"
            title="Library of Souls: The Third Novel of Miss Peregrine's Peculiar Children (Currently Reading)"
          />
          <ReadingList.Book
            author="George R. R. Martin"
            link="https://amzn.to/2Rngm82"
            title="A Game of Thrones: A Song of Ice and Fire (Currently Reading)"
          />
        </ReadingList>
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
          Before I can do that I have to finish my current book which is called
          “A guide to basic Tamil Grammar”. I’m writing that book as an entry
          point for my learning platform.
        </p>
      </section>
      <SayHi />
    </section>
  </Layout>
)

export default AboutMe
