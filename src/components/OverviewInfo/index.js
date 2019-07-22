import React, { PureComponent } from "react"
import "./styles.css"

class OverviewInfo extends PureComponent {
  render() {
    return (
      <ul className="flex justify-between my-16 overview-info md:max-w-sm">
        <li>
          <span className="block w-8 bg-white border-t border-white my-2" />
          <span className="block tracking-wide text-xs text-silver leading-none">
            Working at
          </span>
          <a
            className="text-white text-base font-bold xs:text-lg"
            href="https://www.teamleader.eu/"
          >
            Teamleader
          </a>
        </li>
        <li>
          <span className="block w-8 bg-white border-t border-white my-2" />
          <span className="block tracking-wide text-xs text-silver leading-none">
            Living in
          </span>
          <a
            className="text-white text-base font-bold xs:text-lg"
            href="https://goo.gl/maps/9kKByTYJhSz"
          >
            Ghent, BE
          </a>
        </li>
        <li>
          <span className="block w-8 bg-white border-t border-white my-2" />
          <span className="block tracking-wide text-xs text-silver leading-none">
            Follow me
          </span>
          <a
            className="text-white text-base font-bold xs:text-lg"
            href="https://twitter.com/rswebdesigner"
          >
            @rswebdesigner
          </a>
        </li>
      </ul>
    )
  }
}

export default OverviewInfo
