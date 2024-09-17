'use client'

import React from 'react'

const Sidebar = () => {
  return (
    <div className="inner">
      <nav>
        <ul>
          <li>
            <a id="sidebar-intro" href="#intro">
              Welcome
            </a>
          </li>
          <li>
            <a id="sidebar-experience" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a id="sidebar-projects" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a id="sidebar-contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
