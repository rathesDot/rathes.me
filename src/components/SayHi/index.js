import React, { PureComponent } from "react"

class SayHi extends PureComponent {
  render() {
    return (
      <div className="text-4xl xs:text-5xl font-bold text-white max-w-345px leading-none my-8">
        Work inquiry, question or something else?{" "}
        <a className="underline" href="mailto:sachchi@rathes.de">
          Say hi!
        </a>
      </div>
    )
  }
}

export default SayHi
