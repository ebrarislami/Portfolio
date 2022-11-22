import React, { useState } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = () => {
    if (typeof window !== 'undefined') {
      window.open(
        `mailto:ebrarislami@gmail.com?subject=Contact - ${email} ${name}&body=${message}`,
        '_blank',
      )
    }
  }

  return (
    <div id="three-section" className="inner">
      <h2>Get in touch</h2>
      <div className="split style1">
        <section>
          <form>
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id="message"
                  rows={5}
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <a onClick={sendEmail} type="button" className="button submit">
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
                Skopje
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
                    rel="noopener noreferrer"
                    className="icon brands fa-github"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ebrarislami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon brands fa-linkedin-in"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Contact
