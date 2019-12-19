import React, { Component } from "react"
import "./index.scss"
import ScrollMagic from "scrollmagic"
import Intro from "../components/Intro"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Html from "../components/Html"
import Sidebar from "../components/Sidebar"

class Index extends Component {
  constructor(props) {
    super(props)
    this.controller = new ScrollMagic.Controller()
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#welcome-inner",
      triggerHook: 0.9,
      offset: 50, // move trigger to center of element
      reverse: false, // only do once
    })
      .setClassToggle("#welcome-inner", "visible") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(this.controller)

    new ScrollMagic.Scene({
      triggerElement: "#one",
      triggerHook: 0.9,
      offset: 50, // move trigger to center of element
      reverse: false, // only do once
    })
      .setClassToggle("#one-section", "visible") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(this.controller)

    new ScrollMagic.Scene({
      triggerElement: "#two",
      triggerHook: 0.9,
      offset: 50, // move trigger to center of element
      reverse: false, // only do once
    })
      .setClassToggle("#two-section", "visible") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(this.controller)

    new ScrollMagic.Scene({
      triggerElement: "#three",
      triggerHook: 0.9,
      offset: 50, // move trigger to center of element
      reverse: false, // only do once
    })
      .setClassToggle("#three-section", "visible") // add class toggle
      .addIndicators() // add indicators (requires plugin)
      .addTo(this.controller)
  }

  render() {
    return (
      <>
        <Html />
        <section id="sidebar">
          <Sidebar />
        </section>
        <div id="wrapper">
          <section id="intro" className="wrapper style1 fullscreen fade-up">
            <Intro />
          </section>

          <section id="one" className="wrapper style2 spotlights">
            <Experience />
          </section>

          <section id="two" className="wrapper style3 fade-up">
            <Projects />
          </section>

          <section id="three" className="wrapper style1 fade-up">
            <Contact />
          </section>
        </div>
        <Footer />
      </>
    )
  }
}

export default Index
