import React from "react"

const Sidebar = () => {
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

export default Sidebar
