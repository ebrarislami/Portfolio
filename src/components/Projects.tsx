'use client'

import React from 'react'

const Projects = () => {
  return (
    <div id="two-section" className="inner">
      <h2>Projects</h2>
      <div className="features">
        <section
          onClick={() => window.open('https://www.dartwin.nl', '_blank')}
        >
          <div className="content">
            <h3>DartWin</h3>
            <p>
              DartWin is a 21st century game of darts that is offering a new and
              incredibly fun gaming experience for all ages, which can be played
              in pubs, shopping malls, hotel lobbies, and many more public
              venues. <br />
              Technology stack:
              <br />
              - Node.js, React, Sockets, React Native
              <br />
            </p>
          </div>
        </section>
        <section
          onClick={() => window.open('https://off-blocks.com', '_blank')}
        >
          <div className="content">
            <h3>Off-Blocks</h3>
            <p>
              Off-Blocks is a mobile and web app that you can create digital
              signatures on blockchain. Sign documents and send documents for
              signing.Protect your intellectual property before sharing. Take
              credit for your work, by signing it directly. <br />
              Technology stack:
              <br />
              - Node.js, React, React-Native, Factom Blockchain
              <br />
            </p>
          </div>
        </section>
        <section onClick={() => window.open('https://www.peddy.nl/', '_blank')}>
          <div className="content">
            <h3>Peddy</h3>
            <p>
              Peddy is a digital buddy that connects, motivates and stimulates
              managers and employees in a fun, inspiring, approachable and
              energetic way. We have developed both Admin panel and Web app of
              peddy using Angular 8.
              <br />
              Technology stack:
              <br />- Node.js, Angular 8, Pusher
            </p>
          </div>
        </section>
        <section
          onClick={() =>
            window.open('http://www.intelory.com/products/', '_blank')
          }
        >
          <div className="content">
            <h3>Marina</h3>
            <p>
              Marina is an app for Smart Utility Pedestals, the operation of the
              device network is managed by a cloud-based server, supporting the
              end-users and operators. Using our mobile app, the users can book,
              activate the pedestals and pay for the consumed services. The
              operator manages the network from a web app with real-time
              visibility and remote control capability from anywhere in the
              world. <br />
              Technology stack:
              <br />- Node.js, React, React-Native, Mqtt
            </p>
          </div>
        </section>
        <section
          onClick={() => window.open('http://www.rottaapp.com/', '_blank')}
        >
          <div className="content">
            <h3>Rotta</h3>
            <p>
              Rotta is an app to create daily or periodic interactive routes.
              You can build your own story with a brand new fashion. You can see
              other peoples story and you can catch up with your fiends.
              <br />
              Technology stack:
              <br />- C#, .Net Framework, Angular, Ionic 3
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
