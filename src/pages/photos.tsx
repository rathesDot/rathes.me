import { NextPage } from "next"
import { PageLayout } from "../layouts"
import { Heading1, Meta, Paragraph } from "../components"
import Image from "next/image"

import { SayHi } from "../patterns"

import London1 from "../assets/photos/202310_london_1.jpg"
import London2 from "../assets/photos/202310_london_2.jpg"
import London3 from "../assets/photos/202307_london.jpg"
import Bologna from "../assets/photos/202306_bologna.jpg"
import Madeira1 from "../assets/photos/202210_madeira_1.jpg"
import Madeira2 from "../assets/photos/202210_madeira_2.jpg"
import Rome from "../assets/photos/202209_rome.jpg"
import Sorrento from "../assets/photos/202204_sorrento.jpg"
import Naples2 from "../assets/photos/202204_naples_2.jpg"
import Naples1 from "../assets/photos/202204_naples_1.jpg"
import Edinburgh from "../assets/photos/202111_edinburgh.jpg"
import KewGardens from "../assets/photos/202110_kew_gardens.jpg"

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
    <section className="flex flex-col gap-8">
      <figure className="flex flex-col gap-1">
        <Image src={London2} alt="Old Car in London Borough Market" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Borough Market, London / October 2023
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={London1} alt="Elegant lights in London" />
        <figcaption className="px-4 text-xs text-neutral-500">
          London / October 2023
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={London3} alt="Architecture in London" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Liverpool Street, London / July 2023
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Bologna} alt="Neon sign of pizza place in Bologna" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Bologna, Italy / June 2023
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Madeira1} alt="Architecture in Madeira" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Funchal, Madeira / October 2022
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Madeira2} alt="Bus in Madeira" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Funchal, Madeira / October 2022
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Rome} alt="Old Car in Rome" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Rome, Italy / September 2022
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Sorrento} alt="Road in Sorrento" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Sorrento, Italy / April 2022
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Naples1} alt="Old building in Naples" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Naples, Italy / April 2022
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Naples2} alt="Old building in Naples" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Naples, Italy / April 2022
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={Edinburgh} alt="Edinburgh Castle" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Edinburgh, Scotland / November 2021
        </figcaption>
      </figure>
      <figure className="flex flex-col gap-1">
        <Image src={KewGardens} alt="Japanese Haikus in Kew Gardens" />
        <figcaption className="px-4 text-xs text-neutral-500">
          Kew Gardens, London / October 2021
        </figcaption>
      </figure>
    </section>
    <div className="mt-16 p-8">
      <SayHi />
    </div>
  </PageLayout>
)

export default Photos
