'use client';

import { useState, type FormEvent } from 'react';

const field = 'border-0 border-b border-line bg-transparent py-2.5 text-base text-ink outline-none focus:border-accent';

const Contact = () => {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: post FormData to your API route
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="grid grid-cols-1 gap-14 border-t border-rule py-[clamp(56px,8vw,96px)] md:grid-cols-2 md:gap-x-20"
    >
      <div className="flex flex-col gap-10">
        <h2 className="font-serif text-[clamp(34px,4vw,52px)] tracking-[-.01em]">
          Get in <em>touch</em>
        </h2>
        <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-8 gap-y-[18px] text-[15px] leading-normal">
          <dt className="text-muted">Address</dt>
          <dd>
            Skopje
            <br />
            Macedonia
          </dd>
          <dt className="text-muted">Email</dt>
          <dd>
            <a href="mailto:ebrarislami@gmail.com" className="border-b border-line hover:text-accent">
              ebrarislami@gmail.com
            </a>
          </dd>
          <dt className="text-muted">Phone</dt>
          <dd>+389 71 363653</dd>
          <dt className="text-muted">Social</dt>
          <dd className="flex flex-col items-start gap-1.5">
            <a href="https://github.com/ebrarislami" className="border-b border-line hover:text-accent">
              github.com/ebrarislami
            </a>
            <a href="https://www.linkedin.com/in/ebrarislami" className="border-b border-line hover:text-accent">
              linkedin.com/in/ebrarislami
            </a>
          </dd>
        </dl>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-7 pt-3">
        <label className="flex flex-col gap-2 text-[13px] text-muted">
          Name
          <input name="name" type="text" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-[13px] text-muted">
          Email
          <input name="email" type="email" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-[13px] text-muted">
          Message
          <textarea name="message" rows={4} className={`${field} resize-y`} />
        </label>
        <button
          type="submit"
          className="self-start rounded-full bg-ink px-[26px] py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          {sent ? 'Message sent' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
