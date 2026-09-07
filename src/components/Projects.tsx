const projects = [
  {
    name: 'DartWin',
    body: 'DartWin is a 21st century game of darts that is offering a new and incredibly fun gaming experience for all ages, which can be played in pubs, shopping malls, hotel lobbies, and many more public venues.',
    stack: 'Node.js, React, Sockets, React Native',
  },
  {
    name: 'Off-Blocks',
    body: 'Off-Blocks is a mobile and web app that you can create digital signatures on blockchain. Sign documents and send documents for signing. Protect your intellectual property before sharing. Take credit for your work, by signing it directly.',
    stack: 'Node.js, React, React-Native, Factom Blockchain',
  },
  {
    name: 'Peddy',
    body: 'Peddy is a digital buddy that connects, motivates and stimulates managers and employees in a fun, inspiring, approachable and energetic way. We have developed both Admin panel and Web app of peddy using Angular 8.',
    stack: 'Node.js, Angular 8, Pusher',
  },
  {
    name: 'Marina',
    body: 'Marina is an app for Smart Utility Pedestals, the operation of the device network is managed by a cloud-based server, supporting the end-users and operators. Using our mobile app, the users can book, activate the pedestals and pay for the consumed services. The operator manages the network from a web app with real-time visibility and remote control capability from anywhere in the world.',
    stack: 'Node.js, React, React-Native, Mqtt',
  },
  {
    name: 'Rotta',
    body: 'Rotta is an app to create daily or periodic interactive routes. You can build your own story with a brand new fashion. You can see other peoples story and you can catch up with your fiends.',
    stack: 'C#, .Net Framework, Angular, Ionic 3',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-t border-rule py-[clamp(56px,8vw,96px)]">
      <h2 className="mb-6 font-serif text-[clamp(34px,4vw,52px)] tracking-[-.01em]">Projects</h2>
      <div className="flex flex-col">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="grid grid-cols-1 gap-2.5 border-t border-dashed border-line py-9 md:grid-cols-[minmax(150px,220px)_minmax(0,1fr)] md:gap-x-10 md:gap-y-2"
          >
            <div className="font-serif text-[64px] italic leading-[.8] text-line md:text-[88px]">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-[32px] leading-[1.1]">{p.name}</h3>
              <p className="max-w-[620px] text-base leading-[1.7] text-body [text-wrap:pretty]">{p.body}</p>
              <p className="text-[13.5px] text-muted">
                <span className="font-serif text-[15px] italic text-accent">Technology stack</span> — {p.stack}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
