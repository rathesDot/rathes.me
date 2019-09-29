import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SayHi from "../components/SayHi"

const AboutMe = () => (
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
      <h3 className="text-xl mt-12 font-bold leading-none text-white break-words xs:text-2xl">
        Reading List 2019
      </h3>
      <ul>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg mb-2 "
            href="https://www.amazon.de/Company-One-Staying-Small-Business/dp/0241380227/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30Q5H7258RS6N&keywords=company+of+one&qid=1569783760&s=gateway&sprefix=Company+,aps,156&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=64b51b5b329ae16ef1a79cf782d2e1c0&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm">
              Paul Jarvis
            </span>
            Company of One: Why Staying Small is the Next Big Thing for Business
          </a>
        </li>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg"
            href="https://www.amazon.de/Six-Crows-Crooked-Kingdom-Book/dp/1780622317/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=172EZFM0NO73E&keywords=crooked+kingdom&qid=1569783979&s=gateway&sprefix=Crooked+King,aps,146&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=1f9016fab24cfba12a2e409bac0f5d11&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm mt-2">
              Leigh Bardugo
            </span>
            Crooked Kingdom
          </a>
        </li>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg"
            href="https://www.amazon.de/Carrie-Stephen-King/dp/0450018628/ref=as_li_ss_tl?_encoding=UTF8&qid=1569784151&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=19d572bb5e3ca68dbfb3d580b89c3a5e&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm mt-2">
              Stephen King
            </span>
            Carrie
          </a>
        </li>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg"
            href="https://www.amazon.de/Knots-Crosses-Rebus-Novel-Rankin/dp/0752883534/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WDIWI3I22Z6Q&keywords=knots+and+crosses&qid=1569784300&s=books-intl-de&sprefix=Knots+,english-books,198&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=6e77b3898028ea0cf2eee8c9e2fb5714&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm mt-2">
              Ian Rankin
            </span>
            Knots and Crosses
          </a>
        </li>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg"
            href="https://www.amazon.de/Fluent-Forever-Learn-Language-Forget/dp/0385348118/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=392R9S4R0TJ8R&keywords=fluent+forever&qid=1569785112&s=gateway&sprefix=fluent+fo,aps,147&sr=8-1&linkCode=sl1&tag=aheenam-21&linkId=fe5e639e9481ed1c10eb8d7ffa99fe74&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm mt-2">
              Gabriel Wyner
            </span>
            Fluent Forever: How to Learn Any Language Fast and Never Forget It
          </a>
        </li>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg"
            href="https://www.amazon.de/gp/product/1848549253/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=sl1&tag=aheenam-21&linkId=e41b389168ba6de0b9361ee200cdb4c0&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm mt-2">
              Gary Keller, Jay Papasan
            </span>
            The One Thing: The Surprisingly Simple Truth Behind Extraordinary
            Results
          </a>
        </li>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg"
            href="https://www.amazon.de/Doesnt-Have-Be-Crazy-Work/dp/0062874780/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1VTWBPPJBMM4G&keywords=it+doesnt+have+to+be+crazy+at+work&qid=1569784737&s=books-intl-de&sprefix=It+doe,english-books,144&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=e3d47d2ed74d92f7b76169f166aa9602&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm mt-2">
              Jason Fried, David Heinemeier Hansson
            </span>
            It Doesn't Have to Be Crazy at Work
          </a>
        </li>
        <li className="mb-3 leading-normal">
          <a
            className="text-white text-lg"
            href="https://www.amazon.de/Write-Damn-Novel-Step-Step/dp/0312010443/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GFH4GODP9KJQ&keywords=how+to+write+a+damn+good+novel&qid=1569784848&s=books-intl-de&sprefix=How+to+write+a+dam,english-books,149&sr=1-1&linkCode=sl1&tag=aheenam-21&linkId=b097480b152cdddfa4a7819ea4eb6762&language=de_DE"
          >
            <span className="block text-silver-darker tracking-wider text-sm mt-2">
              James N. Frey
            </span>
            How to Write a Damn Good Novel: A Step-By-Step No Nonsense Guide to
            Dramatic Storytelling
          </a>
        </li>
      </ul>
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

export default AboutMe
