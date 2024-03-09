import { NextPage } from "next"

import { PageLayout } from "../layouts"
import { useState } from "react"
import { Heading2, TextField } from "../components"

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

const BiriyaniPage: NextPage = () => {
  const [amountOfBiriyani, setAmountOfBiriyani] = useState<number>(1)
  return (
    <PageLayout>
      <div className="px-4">
        <section>
          <Heading2 size={4} className="text-neutral-400">
            Ingredients
          </Heading2>
          <div></div>
        </section>
        <section>
          <Heading2 size={4} className="text-neutral-400">
            Instructions
          </Heading2>
          <div></div>
        </section>
      </div>
    </PageLayout>
  )
}

export default BiriyaniPage
