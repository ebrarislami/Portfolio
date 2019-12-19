import React from "react"
import { Helmet } from "react-helmet"
import "./index.scss"
import profilePic from "../images/ebooo.png"
import noScript from "../sass/noscript.scss"

export default () => {
  const sendEmail = () => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    window.location.href = `mailto:ebrarislami@gmail.com?subject=Contact - ${email} ${name}&body=${message}`
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <noscript>{`
            <link rel="stylesheet" href=${noScript} />
        `}</noscript>
        <title>Ebrar Islami</title>
      </Helmet>
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              <li>
                <a href="#intro">Welcome</a>
              </li>
              <li>
                <a href="#one">Experience</a>
              </li>
              <li>
                <a href="#two">Projects</a>
              </li>
              <li>
                <a href="#three">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div id="wrapper">
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <img className="pic" src={profilePic} alt="" />
            <h1>Ebrar Islami</h1>
            <p>
              Hi, I am Full-Stack Developer with 3+ years of experience from
              Skopje.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button scrolly">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="one" className="wrapper style2 spotlights">
          <section>
            <div className="content">
              <div className="inner">
                <h2>Symanto - Software Engineer (Nov 2017 - Present)</h2>
                <p>
                  Our unique application of psychology and technology enables
                  the deepest level of understanding of not just WHAT your
                  customers are saying but WHO they are – their motivations and
                  emotions – accurately and on scale.
                  <br />
                  <br />
                  Technology Stack:
                  <br />
                  - C#, .Net Framework, Elastic, MSSQL
                  <br />- Angular 8, D3.js, NgRx, Charts.js
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="content">
              <div className="inner">
                <h2>Technoperia - Software Engineer (Nov 2016 - Nov 2017)</h2>
                <p>
                  Cloud-based API's, hybrid or native mobile applications, web
                  applications, deep-level social media integration
                  <br />
                  <br />
                  Technology stack:
                  <br />
                  - Node.js, C#
                  <br />- Ionic, Angular 2+, React.js, React Native
                </p>
              </div>
            </div>
          </section>
        </section>

        <section id="two" className="wrapper style3 fade-up">
          <div className="inner">
            <h2>Projects</h2>
            <div className="features">
              <section
                onClick={() => window.open("https://off-blocks.com", "_blank")}
              >
                <img alt="" src="images/offblocks.png" />
                <div className="content">
                  <h3>Off-Blocks</h3>
                  <p>
                    Digital signatures on blockchain. Sign documents and send
                    documents for signing. <br />
                    Technology stack:
                    <br />
                    - Node.js, React, React-Native, Factom Blockchain
                    <br />
                  </p>
                </div>
              </section>
              <section
                onClick={() => window.open("https://www.peddy.nl/", "_blank")}
              >
                <img alt="" src="images/offblocks.png" />
                <div className="content">
                  <h3>Peddy</h3>
                  <p>
                    Digital signatures on blockchain. Sign documents and send
                    documents for signing. <br />
                    Technology stack:
                    <br />- Node.js, Angular, Pusher
                  </p>
                </div>
              </section>
              <section
                onClick={() =>
                  window.open("https://www.intelory.com/products/", "_blank")
                }
              >
                <img alt="" src="images/offblocks.png" />
                <div className="content">
                  <h3>Marina</h3>
                  <p>
                    Digital signatures on blockchain. Sign documents and send
                    documents for signing. <br />
                    Technology stack:
                    <br />- Node.js, React, React-Native, Mqtt
                  </p>
                </div>
              </section>
              <section
                onClick={() =>
                  window.open("http://www.rottaapp.com/", "_blank")
                }
              >
                <img alt="" src="images/offblocks.png" />
                <div className="content">
                  <h3>Rotta</h3>
                  <p>
                    Digital signatures on blockchain. Sign documents and send
                    documents for signing. <br />
                    Technology stack:
                    <br />- C#, .Net Framework, Angular, Ionic 3
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper style1 fade-up">
          <div className="inner">
            <h2>Get in touch</h2>
            <div className="split style1">
              <section>
                <form>
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="5"></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <a
                        onClick={sendEmail}
                        type="button"
                        className="button submit"
                      >
                        Send Message
                      </a>
                    </li>
                  </ul>
                </form>
              </section>
              <section>
                <ul className="contact">
                  <li>
                    <h3>Address</h3>
                    <span>
                      Ul. Mirche Orovchanec,
                      <br />
                      Skopje, 1000
                      <br />
                      Macedonia
                    </span>
                  </li>
                  <li>
                    <h3>Email</h3>
                    <a href="#">ebrarislami@gmail.com</a>
                  </li>
                  <li>
                    <h3>Phone</h3>
                    <span>+389 71 363653</span>
                  </li>
                  <li>
                    <h3>Social</h3>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://github.com/ebrarislami"
                          target="_blank"
                          className="icon brands fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/ebrar-islami-931b68b6/"
                          target="_blank"
                          className="icon brands fa-linkedin-in"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
      <footer id="footer" className="wrapper style1-alt">
        <div className="inner">
          <ul className="menu">
            <li>&copy; Ebrar Islami. All rights reserved.</li>
          </ul>
        </div>
      </footer>{" "}
    </>
  )
}
