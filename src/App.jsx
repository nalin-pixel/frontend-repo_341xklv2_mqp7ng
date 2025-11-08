import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import { Skills, Projects, Achievements, Contact } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-white/5 bg-black/60 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Ghifari Azhar — Stay Secure, Stay Curious.
      </footer>
    </div>
  );
}

export default App;
