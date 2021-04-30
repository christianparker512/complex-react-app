import React, { useEffect } from "react"
import { ProgressPlugin } from "webpack"

function Container() {
  return (
   <div className={"container py-md-5 " + (props.wide ? ''  : 'container--narrow' )}>{props.children}
   </div>
  )
}

export default Container
