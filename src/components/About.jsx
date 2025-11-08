import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.10),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-emerald-300 md:text-4xl"
          style={{ fontFamily: 'JetBrains Mono, Orbitron, ui-monospace, monospace' }}
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed text-slate-300"
        >
          Ghifari Azhar adalah seorang cybersecurity enthusiast yang aktif di dunia CTF dan bug bounty. Ia merupakan Founder PhoenixCySec, komunitas CTF asal Lampung Barat, dengan fokus pada edukasi keamanan siber, kolaborasi, dan berbagi praktik terbaik untuk membangun ekosistem keamanan yang lebih kuat.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
