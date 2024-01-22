import { NextPage } from "next"
import { PageLayout } from "../layouts"
import { Heading1, Link, Meta, Paragraph } from "../components"

import { SayHi } from "../patterns"

import London1 from "../assets/photos/202310_london_1.jpg"
import London2 from "../assets/photos/202310_london_2.jpg"
import London3 from "../assets/photos/202307_london.jpg"
import Bologna from "../assets/photos/202306_bologna.jpg"
import Paris from "../assets/photos/202302-paris.jpg"
import Madeira1 from "../assets/photos/202210_madeira_1.jpg"
import Madeira2 from "../assets/photos/202210_madeira_2.jpg"
import MadeiraMountains from "../assets/photos/202210_madeira_mountains.jpg"
import Rome from "../assets/photos/202209_rome.jpg"
import Sorrento from "../assets/photos/202204_sorrento.jpg"
import Naples2 from "../assets/photos/202204_naples_2.jpg"
import Naples1 from "../assets/photos/202204_naples_1.jpg"
import Edinburgh from "../assets/photos/202111_edinburgh.jpg"
import KewGardens from "../assets/photos/202110_kew_gardens.jpg"
import { Photo } from "../patterns/Photo"

const Photos: NextPage = () => (
  <PageLayout>
    <Meta title="Photography" />
    <section className="max-w-lg p-8 md:px-14">
      <Heading1>Photography</Heading1>
      <Paragraph>
        Aside from reading and writing, photography is the latest of my
        passions. Trying to imagine a picture, capturing the right moment and
        bring that idea to life is such a booster for creativity.
      </Paragraph>
      <Paragraph>
        Most of my photos are taken on an iPhone and the others on my{" "}
        <Link
          underlined
          className="text-neutral-50"
          href="https://amzn.to/3RtSMUA"
        >
          Sony A6000
        </Link>
        .
      </Paragraph>
    </section>
    <section className="flex flex-col gap-8 md:flex-row md:flex-wrap md:p-8">
      <Photo
        image={London2}
        title="Old Car in London Borough Market"
        caption="Borough Market, London / October 2023"
      />

      <Photo
        image={London1}
        title="Elegant lights in London"
        caption="London / October 2023"
      />

      <Photo
        image={London3}
        title="Architecture in London"
        caption="Liverpool Street, London / July 2023"
      />

      <Photo
        image={Bologna}
        title="Neon sign of pizza place in Bologna"
        caption="Bologna, Italy / June 2023"
      />

      <Photo
        image={Paris}
        title="Phantom Manor in Disneyland Paris"
        caption="Disneyland, Paris / February 2023"
      />

      <Photo
        image={Madeira1}
        title="Architecture in Madeira"
        caption="Funchal, Madeira / October 2022"
      />

      <Photo
        image={Madeira2}
        title="Bus in Madeira"
        caption="Funchal, Madeira / October 2022"
      />

      <Photo
        image={MadeiraMountains}
        title="View from Pico do Areeiro in Madeira"
        caption="Pico do Areeiro, Madeira / October 2022"
      />

      <Photo
        image={Rome}
        title="Old Car in Rome"
        caption="Rome, Italy / September 2022"
      />

      <Photo
        image={Sorrento}
        title="Road in Sorrento"
        caption="Sorrento, Italy / April 2022"
      />

      <Photo
        image={Naples1}
        title="Old building in Naples"
        caption="Naples, Italy / April 2022"
      />

      <Photo
        image={Naples2}
        title="Old building in Naples"
        caption="Naples, Italy / April 2022"
      />

      <Photo
        image={Edinburgh}
        title="Edinburgh Castle"
        caption="Edinburgh, Scotland / November 2021"
        mode="landscape"
      />

      <Photo
        image={KewGardens}
        title="Japanese Haikus in Kew Gardens"
        caption="Kew Gardens, London / October 2021"
        mode="landscape"
      />
    </section>
    <div className="mt-16 p-8 md:px-14">
      <SayHi />
    </div>
  </PageLayout>
)

export default Photos
