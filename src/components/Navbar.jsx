import React from 'react';

const Navbar = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-slate-200">
        <a href="#home" className="font-semibold tracking-wider text-emerald-300" style={{ fontFamily: 'JetBrains Mono, Orbitron, ui-monospace, monospace' }}>
          GHIFARI.AZ
        </a>
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-300 transition hover:text-emerald-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-emerald-200 hover:bg-emerald-400/20">
          Get in touch
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
