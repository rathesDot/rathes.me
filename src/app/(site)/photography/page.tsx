import { Metadata, NextPage } from "next"

import { Paragraph } from "@/components/Paragraph"
import { Heading1 } from "@/components/Heading"
import { Link } from "@/components/Link"

import { Photo } from "@/patterns/Photo"

import Iceland1 from "@/assets/photos/202402_iceland_1.jpg"
import Iceland2 from "@/assets/photos/202402_iceland_2.jpg"
import Iceland3 from "@/assets/photos/202402_iceland_3.jpg"
import Iceland4 from "@/assets/photos/202402_iceland_4.jpg"
import London1 from "@/assets/photos/202310_london_1.jpg"
import London2 from "@/assets/photos/202310_london_2.jpg"
import London3 from "@/assets/photos/202307_london.jpg"
import Bologna from "@/assets/photos/202306_bologna.jpg"
import PisaTower from "@/assets/photos/202306_pisa_tower.jpg"
import Paris from "@/assets/photos/202302-paris.jpg"
import Madeira1 from "@/assets/photos/202210_madeira_1.jpg"
import Madeira2 from "@/assets/photos/202210_madeira_2.jpg"
import MadeiraMountains from "@/assets/photos/202210_madeira_mountains.jpg"
import Rome from "@/assets/photos/202209_rome.jpg"
import Sorrento from "@/assets/photos/202204_sorrento.jpg"
import Naples2 from "@/assets/photos/202204_naples_2.jpg"
import Naples1 from "@/assets/photos/202204_naples_1.jpg"
import Edinburgh from "@/assets/photos/202111_edinburgh.jpg"
import KewGardens from "@/assets/photos/202110_kew_gardens.jpg"
import Bergen1 from "@/assets/photos/202404_Bergen_1.jpg"
import RuislipJeep from "@/assets/photos/202411_ruislip_jeep.jpg"
import CoaldropYards1 from "@/assets/photos/202509_coaldrop_yards_1.jpg"
import CoaldropYards2 from "@/assets/photos/202509_coaldrop_yards_2.jpg"
import CoaldropYards3 from "@/assets/photos/202509_coaldrop_yards_3.jpg"

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Aside from reading and writing, photography is the latest of my passions. Trying to imagine a picture, capturing the right moment and bring that idea to life is such a booster for creativity.",
}

const PhotoPage: NextPage = () => {
  return (
    <main className="py-4 lg:py-8">
      <section className="mx-auto max-w-lg px-4 sm:px-0">
        <Heading1>Photography</Heading1>
        <Paragraph>
          Aside from reading and writing, photography is the latest of my
          passions. Trying to imagine a picture, capturing the right moment and
          bring that idea to life is such a booster for creativity.
        </Paragraph>
        <Paragraph>
          Most of my photos are taken on an iPhone and the others on my{" "}
          <Link target="_blank" href="https://amzn.to/3RtSMUA">
            Sony A6000
          </Link>
          .
        </Paragraph>
      </section>
      <section className="mx-auto grid max-w-[656px] gap-8 py-8 md:grid-cols-2 md:gap-x-4 md:gap-y-8">
        <Photo
          image={CoaldropYards1}
          title="Coaldrop Yards"
          caption="Coaldrop Yards, London — September 2025"
        />
        <Photo
          image={CoaldropYards2}
          title="Coaldrop Yards"
          caption="Coaldrop Yards, London — September 2025"
        />
        <Photo
          image={CoaldropYards3}
          title="Coaldrop Yards"
          caption="Coaldrop Yards, London — September 2025"
        />
        <Photo
          image={RuislipJeep}
          title="An old SUV on an autumn covered street"
          caption="London, UK / November 2024"
        />
        <Photo
          image={Bergen1}
          title="View of Bergen from above"
          caption="Bergen, Norway / April 2024"
        />
        <Photo
          image={Iceland1}
          title="Steam coming out of hardened Lava"
          caption="Reykjavík, Iceland / February 2024"
        />
        <Photo
          image={Iceland2}
          title="Van parked in snow"
          caption="Reykjavík, Iceland / February 2024"
        />
        <Photo
          image={Iceland3}
          title="Car driving through the snow in Iceland"
          caption="Reykjavík, Iceland / February 2024"
        />
        <Photo
          image={Iceland4}
          title="Car driving through the snow in Iceland"
          caption="Reykjavík, Iceland / February 2024"
        />

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
          image={PisaTower}
          title="The Tower of Pisa"
          caption="Pisa, Italy / June 2023"
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
    </main>
  )
}

export default PhotoPage
