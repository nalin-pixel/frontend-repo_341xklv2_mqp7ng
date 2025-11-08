import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Network, Bug, Cpu } from 'lucide-react';

export const Skills = () => {
  const skills = [
    { name: 'Web Penetration Testing', icon: <Bug className="h-5 w-5 text-emerald-300" /> },
    { name: 'Network Security', icon: <Network className="h-5 w-5 text-emerald-300" /> },
    { name: 'Reverse Engineering', icon: <Cpu className="h-5 w-5 text-emerald-300" /> },
    { name: 'Vulnerability Assessment', icon: <Shield className="h-5 w-5 text-emerald-300" /> },
    { name: 'AI Security Tools', icon: <Cpu className="h-5 w-5 text-emerald-300" /> },
  ];

  return (
    <section id="skills" className="relative bg-[#05090e] py-24 text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-cyan-300 md:text-4xl"
          style={{ fontFamily: 'JetBrains Mono, Orbitron, ui-monospace, monospace' }}
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
            >
              <div className="mb-2 flex items-center gap-2">
                {s.icon}
                <span className="font-medium text-emerald-200">{s.name}</span>
              </div>
              <div className="h-1 w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section id="work" className="relative bg-black py-24 text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-emerald-300 md:text-4xl"
          style={{ fontFamily: 'JetBrains Mono, Orbitron, ui-monospace, monospace' }}
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 shadow-lg backdrop-blur"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-emerald-400/20 blur-2xl transition group-hover:scale-125" />
            <h3 className="text-xl font-semibold text-emerald-200">AI Scanner</h3>
            <p className="mt-2 text-slate-300">
              Tools berbasis kecerdasan buatan untuk mendeteksi celah keamanan secara otomatis.
            </p>
            <div className="mt-4 inline-flex items-center text-emerald-300">
              <span className="mr-2 h-1 w-6 bg-gradient-to-r from-emerald-400 to-cyan-400" />
              View details
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export const Achievements = () => {
  const items = [
    'Juara 3 LKS Provinsi Lampung bidang Cyber Security.',
    'Peringkat 5 LampungCTF Vol.2.',
    'Founder PhoenixCySec (Lampung Barat Cybersecurity Community).',
  ];
  return (
    <section id="achievements" className="relative bg-[#05090e] py-24 text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.10),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-cyan-300 md:text-4xl"
          style={{ fontFamily: 'JetBrains Mono, Orbitron, ui-monospace, monospace' }}
        >
          Achievements
        </motion.h2>
        <ul className="mt-8 space-y-4">
          {items.map((it) => (
            <motion.li
              key={it}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-4 backdrop-blur"
            >
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span className="text-slate-300">{it}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-24 text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-emerald-300 md:text-4xl"
          style={{ fontFamily: 'JetBrains Mono, Orbitron, ui-monospace, monospace' }}
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a href="https://github.com/" target="_blank" className="rounded-lg border border-white/5 bg-white/5 p-4 text-slate-300 hover:bg-white/10">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" className="rounded-lg border border-white/5 bg-white/5 p-4 text-slate-300 hover:bg-white/10">LinkedIn</a>
          <a href="https://tryhackme.com/" target="_blank" className="rounded-lg border border-white/5 bg-white/5 p-4 text-slate-300 hover:bg-white/10">TryHackMe</a>
          <a href="mailto:contact@ghifariazhar.dev" className="rounded-lg border border-white/5 bg-white/5 p-4 text-slate-300 hover:bg-white/10">Email</a>
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">Stay Secure, Stay Curious.</p>
      </div>
    </section>
  );
};
