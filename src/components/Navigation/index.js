import React, { PureComponent } from "react"
import { Link } from "gatsby"
import cx from "classnames"

import Toggle from "../Toggle"
import Logo from "../Logo"

class Navigation extends PureComponent {
  render() {
    return (
      <div className="mb-24">
        <div className="flex items-center justify-between mb-4">
          <Link to="/">
            <Logo />
          </Link>
          <Toggle />
        </div>
        <div className={cx("text-right")}>
          <Link to="/page-2/" className="font-bold mr-2">
            <span className="font-normal mr-2">//</span>About
          </Link>
          <Link to="/page-2/" className="font-bold mr-2">
            <span className="font-normal mr-2">//</span>Work
          </Link>
          <Link to="/page-2/" className="font-bold mr-2">
            <span className="font-normal mr-2">//</span>Writings
          </Link>
          <Link to="/page-2/" className="font-bold">
            <span className="font-normal mr-2">//</span>Talks
          </Link>
        </div>
      </div>
    )
  }
}

export default Navigation
