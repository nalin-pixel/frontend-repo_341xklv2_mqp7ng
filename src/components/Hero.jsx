import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#05090e] to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.18),_transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center md:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
          style={{ fontFamily: 'JetBrains Mono, Orbitron, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace' }}
        >
          Ghifari Azhar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl"
        >
          Cybersecurity Enthusiast | CTF Player | Bug Hunter
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-emerald-200 backdrop-blur transition hover:border-emerald-400/70 hover:bg-emerald-500/20"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Explore My Work
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
