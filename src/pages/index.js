import React, { Component } from "react"
import "./index.scss"
import Intro from "../components/Intro"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Html from "../components/Html"
import Sidebar from "../components/Sidebar"

class Index extends Component {
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
