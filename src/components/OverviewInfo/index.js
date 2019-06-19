import React, { PureComponent } from "react"
import "./styles.css"

class OverviewInfo extends PureComponent {
  render() {
    return (
      <ul className="flex justify-between mt-20">
        <li>
          <span className="block text-xs text-silver leading-none">
            Working at
          </span>
          <a
            className="text-white text-base font-bold"
            href="https://www.teamleader.eu/"
          >
            Teamleader
          </a>
        </li>
        <li>
          <span className="block text-xs text-silver leading-none">
            Living in
          </span>
          <a
            className="text-white text-base font-bold"
            href="https://goo.gl/maps/9kKByTYJhSz"
          >
            Ghent, BE
          </a>
        </li>
        <li>
          <span className="block text-xs text-silver leading-none">
            Follow me
          </span>
          <a
            className="text-white text-base font-bold"
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
