const Hero = () => {
  return (
    <section
      id="intro"
      className="flex flex-col gap-9 py-14 md:pb-[clamp(64px,10vw,120px)] md:pt-[clamp(72px,12vw,150px)]"
    >
      <h1 className="font-serif text-[clamp(46px,8vw,104px)] leading-[.98] tracking-[-.02em]">
        Ebrar
        <br />
        <em className="relative inline-block pl-[.35em]">
          Islami
          <svg
            viewBox="0 0 300 14"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute bottom-[-.08em] left-[.35em] h-[.12em] w-[calc(100%-.35em)] overflow-visible"
          >
            <path
              d="M2 9 C 60 2, 120 12, 180 6 S 260 3, 298 8"
              fill="none"
              stroke="#a3341f"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </em>
      </h1>
      <p className="max-w-[560px] text-[clamp(18px,2vw,22px)] font-light leading-normal text-body [text-wrap:pretty]">
        Hi, I am Skopje based Full-Stack Developer with 7+ years of experience focused on crafting{' '}
        <em className="font-serif text-[1.12em] text-ink">web &amp; mobile apps</em>
      </p>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-6 text-sm">
        <a
          href="#experience"
          className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-accent"
        >
          Learn more <span aria-hidden="true">↓</span>
        </a>
        <a
          href="https://github.com/ebrarislami"
          className="border-b border-line pb-0.5 text-[#5f584f] hover:text-accent"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ebrarislami/"
          className="border-b border-line pb-0.5 text-[#5f584f] hover:text-accent"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
