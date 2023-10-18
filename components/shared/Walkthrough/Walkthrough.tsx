import React from "react"

import WalkthroughBody from "./WalkthroughBody"
import WalkthroughHeader from "./WalkthroughHeader"

const Walkthrough = () => {
  return (
    <div className="space-y-8 md:space-y-16">
      <WalkthroughHeader />
      <WalkthroughBody />
    </div>
  )
}

export default Walkthrough
