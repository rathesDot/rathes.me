import React, { PureComponent } from "react"
import { Link } from "gatsby"

class Footer extends PureComponent {
  render() {
    return (
      <div className="flex justify-between text-silver-darker">
        <span className="text-xs">&copy; 2019 — Rathes Sachchithananthan</span>
        <Link className="text-xs" to="/page-2/">
          Legal Information
        </Link>
      </div>
    )
  }
}

export default Footer
