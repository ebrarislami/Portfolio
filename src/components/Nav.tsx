'use client';

import { useState } from 'react';

const links = [
  { href: '#intro', label: 'Welcome' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-between gap-6 border-b border-rule bg-paper/[.88] px-[clamp(20px,6vw,80px)] py-5 backdrop-blur-md">
        <a href="#intro" className="font-serif text-[23px] tracking-tight">
          Ebrar <em>Islami</em>
        </a>
        <div className="hidden gap-7 text-sm text-[#5f584f] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center text-sm uppercase tracking-[.08em] md:hidden"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-20 flex flex-col bg-ink px-[clamp(20px,6vw,80px)] pb-10 pt-5 text-paper">
          <div className="flex items-center justify-between">
            <span className="font-serif text-[23px]">
              Ebrar <em>Islami</em>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-11 w-11 text-sm uppercase tracking-[.08em]"
            >
              Close
            </button>
          </div>
          <div className="mt-auto flex flex-col gap-1.5 font-serif text-5xl leading-[1.1]">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-10 flex gap-6 text-sm text-[#a89f92]">
            <a href="https://github.com/ebrarislami">GitHub</a>
            <a href="https://www.linkedin.com/in/ebrarislami/">LinkedIn</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
