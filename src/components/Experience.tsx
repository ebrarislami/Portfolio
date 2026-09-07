const jobs = [
  {
    period: 'Nov 2020 – Present',
    company: 'AvantStay',
    location: 'Remote',
    title: 'Software Engineer',
    body: 'At AvantStay, I served as a Frontend and Mobile Developer focusing on React Native. My role involved building robust, cross-platform mobile applications that deliver seamless user experiences across iOS and Android. By collaborating closely with designers, product managers, and backend engineers, I ensured every feature was implemented with efficiency, scalability, and a user-first mindset.',
    stack: ['TypeScript, React Native, React.js'],
  },
  {
    period: 'Nov 2017 – Nov 2020',
    company: 'Symanto',
    location: 'Remote',
    title: 'Software Engineer',
    body: 'Our unique application of psychology and technology enables the deepest level of understanding of not just WHAT your customers are saying but WHO they are – their motivations and emotions – accurately and on scale.',
    stack: [
      'TypeScript, React.js, Angular, D3.js, Chart.js',
      'C#, .Net Framework, Redis, ElasticSearch, PostgreSQL, Azure',
    ],
  },
  {
    period: 'Nov 2016 – Nov 2017',
    company: 'Technoperia',
    location: 'Skopje',
    title: 'Software Engineer',
    body: "Cloud-based API's, hybrid or native mobile applications, web applications, deep-level social media integration",
    stack: ['TypeScript, JavaScript, React.js, React Native, Angular', 'Node.js, C#'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="border-t border-rule py-[clamp(56px,8vw,96px)]">
      <div className="mb-10 flex items-baseline justify-between gap-6">
        <h2 className="font-serif text-[clamp(34px,4vw,52px)] tracking-[-.01em]">Experience</h2>
        <span className="inline-block -rotate-3 rounded-[3px] border border-accent px-2.5 py-1 text-xs uppercase tracking-[.1em] text-accent">
          2016 – Present
        </span>
      </div>
      <div className="flex flex-col">
        {jobs.map((j) => (
          <article
            key={j.company}
            className="grid grid-cols-1 gap-2.5 border-t border-dashed border-line py-9 md:grid-cols-[minmax(150px,220px)_minmax(0,1fr)] md:gap-x-10 md:gap-y-6"
          >
            <div className="text-sm leading-relaxed text-muted">
              {j.period}
              <br />
              <span className="text-ink">{j.company}</span> · {j.location}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-3xl leading-[1.15]">{j.title}</h3>
              <p className="text-base leading-[1.7] text-body [text-wrap:pretty]">{j.body}</p>
              <p className="text-[13.5px] leading-relaxed text-muted">
                <span className="font-serif text-[15px] italic text-accent">Technology stack</span> —{' '}
                {j.stack.map((s, i) => (
                  <span key={s}>
                    {i > 0 && <br />}
                    {s}
                  </span>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
