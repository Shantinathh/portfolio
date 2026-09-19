import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import WhatIBuild from './components/sections/WhatIBuild';
import Publication from './components/sections/Publication';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Hackathons from './components/sections/Hackathons';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#020409' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WhatIBuild />
        <Publication />
        <Education />
        <Certifications />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
