import React from "react"

export default () => {
  return (
    <div id="two-section" className="inner">
      <h2>Projects</h2>
      <div className="features">
        <section
          onClick={() => window.open("https://off-blocks.com", "_blank")}
        >
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
        <section onClick={() => window.open("https://www.peddy.nl/", "_blank")}>
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
            window.open("http://www.intelory.com/products/", "_blank")
          }
        >
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
          onClick={() => window.open("http://www.rottaapp.com/", "_blank")}
        >
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
  )
}
