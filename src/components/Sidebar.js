import React, { useEffect } from "react"
import ScrollMagic from "scrollmagic"

export default () => {
  const controller = new ScrollMagic.Controller()

  useEffect(() => {
    new ScrollMagic.Scene({ triggerElement: "#intro", duration: "100%" })
      .setClassToggle("#welcome", "active") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller)
    new ScrollMagic.Scene({ triggerElement: "#one", duration: "100%" })
      .setClassToggle("#experience", "active") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller)
    new ScrollMagic.Scene({ triggerElement: "#two", duration: "100%" })
      .setClassToggle("#projects", "active") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller)
    new ScrollMagic.Scene({ triggerElement: "#three", duration: "100%" })
      .setClassToggle("#contact", "active") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller)
  }, [])

  return (
    <div className="inner">
      <nav>
        <ul>
          <li>
            <a id="welcome" href="#intro">
              Welcome
            </a>
          </li>
          <li>
            <a id="experience" href="#one">
              Experience
            </a>
          </li>
          <li>
            <a id="projects" href="#two">
              Projects
            </a>
          </li>
          <li>
            <a id="contact" href="#three">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
