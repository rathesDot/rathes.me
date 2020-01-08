import React from "react"
import "./styles.css"
import TextSmall from "../Typography/TextSmall"

const OverviewInfo = () => (
  <ul className="flex justify-between my-16 overview-info md:max-w-sm">
    <li>
      <span className="block w-8 bg-white border-t border-white my-2" />
      <TextSmall color="silver" className="block tracking-wide leading-none">
        Working at
      </TextSmall>
      <a
        className="text-white text-base font-bold xs:text-lg"
        href="https://www.teamleader.eu/"
      >
        Teamleader
      </a>
    </li>
    <li>
      <span className="block w-8 bg-white border-t border-white my-2" />
      <TextSmall color="silver" className="block tracking-wide leading-none">
        Living in
      </TextSmall>
      <a
        className="text-white text-base font-bold xs:text-lg"
        href="https://goo.gl/maps/9kKByTYJhSz"
      >
        Ghent, BE
      </a>
    </li>
    <li>
      <span className="block w-8 bg-white border-t border-white my-2" />
      <TextSmall color="silver" className="block tracking-wide leading-none">
        Follow me
      </TextSmall>
      <a
        className="text-white text-base font-bold xs:text-lg"
        href="https://twitter.com/rswebdesigner"
      >
        @rswebdesigner
      </a>
    </li>
  </ul>
)

export default OverviewInfo
