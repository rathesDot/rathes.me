import React, { PureComponent } from "react"
import { Link } from "gatsby"

class Footer extends PureComponent {
  render() {
    return (
      <div className="flex justify-between text-silver-darker mt-4 lg:max-w-4xl">
        <span className="text-xs">&copy; 2019 — Rathes Sachchithananthan</span>
        <Link className="text-xs" to="/legal">
          Legal Information
        </Link>
      </div>
    )
  }
}

export default Footer
