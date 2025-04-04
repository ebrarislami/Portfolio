'use client';

import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Intro = () => {
  return (
    <div className="inner">
      <div id="welcome-inner">
        <img className="pic" src="/ebooo.png" alt="author" />
        <h1>Ebrar Islami</h1>
        <p>
          Hi, I am Skopje based Full-Stack Developer with 5+ years of experience focused on crafting web & mobile apps
        </p>
        <div className="actions-icons">
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
  );
};

export default Intro;
