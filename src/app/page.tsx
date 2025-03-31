import Head from 'next/head';
import Intro from '@/components/Intro';
import Sidebar from '@/components/Sidebar';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="p-4">
      <Head>
        <title>Ebrar Islami</title>
        <meta name="description" content="Ebrar Islami Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <section id="sidebar">
          <Sidebar />
        </section>
        <div id="wrapper">
          <section id="intro" className="wrapper style1 fullscreen fade-up">
            <Intro />
          </section>

          <section id="experience" className="wrapper style2 spotlights">
            <Experience />
          </section>

          <section id="projects" className="wrapper style3 fade-up">
            <Projects />
          </section>

          <section id="contact" className="wrapper style1 fade-up">
            <Contact />
          </section>
        </div>
        <Footer />
      </>
    </div>
  );
}
