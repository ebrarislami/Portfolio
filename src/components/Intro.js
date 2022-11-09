import React from "react"
import profilePic from "../images/ebooo.png"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFileContract } from "react-icons/fa"

export default () => {
  return (
    <div className="inner">
      <div id="welcome-inner">
        <img className="pic" src={profilePic} alt="" />
        <h1>Ebrar Islami</h1>
        <p>
          Hi, I am Skopje based Full-Stack Developer with 5+ years of experience
          focused on crafting web & mobile apps
        </p>
        <div class="actions-icons">
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Learn more
              </a>
            </li>
          </ul>
          <div>
            <ul className="icons">
              <li>
                <a
                  href="https://github.com/ebrarislami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon brands fa-github"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ebrarislami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon brands fa-linkedin-in"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
