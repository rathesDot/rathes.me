import { Metadata, NextPage } from "next"
import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@heroicons/react/16/solid"
import { cva } from "cva"

import { Paragraph } from "../../components/Paragraph"
import { Heading1, Heading2 } from "../../components/Heading"

export const metadata: Metadata = {
  title: "Biryani",
  description:
    "My own recipe is based off the typical Chennai style biryani and it's developed in a way that it can be easily replicated in Western countries and kitchens without losing the original taste of a good biryani.",
}

const instructionItem = cva({
  base: "relative text-base antialiased [counter-increment:section] before:absolute before:mt-0.5 before:-ml-7 before:flex before:size-5 before:items-center before:justify-center before:rounded-full before:bg-neutral-200 before:text-xs before:font-semibold before:[content:counters(section,'.')] dark:text-neutral-400 dark:before:bg-neutral-800 dark:before:text-neutral-400 dark:before:[content:counters(section,'.')]",
})

// ingredients for 1kg
const ingredients = [
  { name: "Red Onions", amount: 400, unit: "g" },
  { name: "Vegetable Oil", amount: 200, unit: "g" },
  { name: "Cardamom", amount: 2, unit: "pcs" },
  { name: "Cinnamon", amount: 1, unit: "pcs" },
  { name: "Cloves", amount: 3, unit: "pcs" },
  { name: "Basmati Rice", amount: 1000, unit: "g" },
  { name: "Coriander", amount: 0.25, unit: "bn" },
  { name: "Mint", amount: 0.25, unit: "bn" },
  { name: "Green chilies", amount: 3, unit: "pcs" },
  { name: "Curry Powder", amount: 1, unit: "tbsp" },
  { name: "Ginger paste", amount: 100, unit: "g" },
  { name: "Garlic paste", amount: 50, unit: "g" },
  { name: "Salt", amount: 1, unit: "tsp" },
  { name: "Curd", amount: 200, unit: "g" },
  { name: "Tomatoes", amount: 400, unit: "g" },
  { name: "Chicken", amount: 1000, unit: "g" },
  { name: "Water", amount: 1200, unit: "ml" },
]

const BiryaniPage: NextPage = () => {
  return (
    <main className="space-y-12 py-4">
      <section className="mx-auto max-w-lg px-4 sm:px-0">
        <Heading1>Chicken Biryani Recipe</Heading1>
        <Paragraph>
          One of my favorite dishes is a good chicken biryani. There are several
          biryani recipes out there as every region in India as well as many
          neighboring countries have the their own variants.
        </Paragraph>
        <Paragraph>
          My own recipe is based off the typical Chennai style biryani and it's
          developed in a way that it can be easily replicated in Western
          countries and kitchens without losing the original taste of a good
          biryani.
        </Paragraph>
      </section>
      <section className="mx-auto max-w-lg px-4 sm:px-0">
        <Heading2 level="small">Ingredients</Heading2>
        <ul className="mt-4 space-y-2">
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index} className="flex items-center gap-2">
                <Checkbox.Root
                  className="size-5 rounded bg-neutral-200 dark:bg-neutral-800"
                  id={ingredient.name}
                >
                  <Checkbox.Indicator className="flex items-center justify-center">
                    <CheckIcon className="size-4 text-neutral-700 dark:text-neutral-400" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label
                  htmlFor={ingredient.name}
                  className="text-base text-neutral-950 antialiased dark:text-neutral-400"
                >
                  {ingredient.amount}
                  {ingredient.unit} {ingredient.name}
                </label>
              </li>
            )
          })}
        </ul>
      </section>
      <section className="mx-auto max-w-lg px-4 sm:px-0">
        <Heading2 level="small">Instructions</Heading2>
        <ol className="mt-4 space-y-2 pl-7 antialiased [counter-reset:section]">
          <li className={instructionItem()}>
            Wash the Basmati Rice properly and soak it in cold water
          </li>
          <li className={instructionItem()}>
            Prep the ingredients. Julienne the onions. Remove the stalks from
            the coriander and mint and finely chop them. If you use fresh garlic
            and ginger, peel them and use a food processor to create a paste.
            Dice the tomatoes and finally cut the chicken into bite size pieces.
          </li>
          <li className={instructionItem()}>
            In a large pot (remember that you will have 1kg of rice and 1kg of
            chicken), add the onions and the oil and put the stove on to medium
            heat. While the oil heats up, add the cardamom, cinnamon and the
            cloves
          </li>
          <li className={instructionItem()}>
            Fry the onions on medium heat until the become golden brown.
          </li>
          <li className={instructionItem()}>
            Turn down the heat to low and add:
            <ul className="my-4 list-outside list-disc space-y-2 pl-6">
              <li>Roughly chopped coriander leaves</li>
              <li>Roughly chopped mint leaves</li>
              <li>
                Green chilies (whole, we only need the flavor, not the spice)
              </li>
              <li>Curry Powder</li>
              <li>
                Use a spice grinder to make a paste of the Ginger and the Garlic
                and add it as well
              </li>
              <li>Salt (to taste, I normally start with 2 tea spoons)</li>
              <li>Curd</li>
              <li>Tomatoes, fine diced</li>
            </ul>
          </li>
          <li className={instructionItem()}>
            Mix everything well together and cook for like 30 to 60 seconds
          </li>
          <li className={instructionItem()}>
            Add 1200 ml water. Put on a lid and bring it to a boil turning the
            heat up. Turn down the heat of the curry once it starts boiling and
            let it simmer for 5 more minutes
          </li>
          <li className={instructionItem()}>
            Add the chicken and bring it to boil again as the chicken will cool
            down your curry rapidly. Let it boil for two minutes while mixing
            the curry, then put the lid on and let it simmer for 2 more minutes
            on low heat.
          </li>
          <li className={instructionItem()}>
            Layer the soaked rice (without the soaking water of course) on the
            curry and spread it evenly. Do not mix it, just spread the rice on
            top of the curry.
          </li>
          <li className={instructionItem()}>
            Once you have spread the rice evenly, the water should be at the
            same level as the rice layer. If not, add a bit of fresh water to
            level it up.
          </li>
          <li className={instructionItem()}>
            Cover the pot with a lid and bring it to a boil. Once it boiled,
            turn down the heat to the lowest and let the rice cook. Make sure
            that the pot does not lose steam. That's where a heavy pot comes in
            handy. If I don't have one, I usually use a large plate as a lid and
            add some heavy weights on top of it. Under the plate I put a tea
            towel to keep it even more safe.{" "}
            <strong>Do not open the pot while the rice is cooking</strong>
          </li>
          <li className={instructionItem()}>
            Once the rice is cooked properly (takes 5-15 minutes depending on
            stove), carefully mix the top layer rice with the curry below
          </li>
          <li className={instructionItem()}>
            Plate the biryani by taking the rice from the bottom so that the
            rice on the top keeps mixing with the curry. <strong>Enjoy!</strong>
          </li>
        </ol>
      </section>
    </main>
  )
}

export default BiryaniPage
