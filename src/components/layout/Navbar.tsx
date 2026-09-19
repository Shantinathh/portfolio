import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../../data/portfolio';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publication', label: 'Publication' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#hackathons', label: 'Hackathons' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,13,24,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(59,130,246,0.15)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
            aria-label="Shantinath Patil - Home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              SP
            </div>
            <div className="hidden md:block">
              <div
                className="text-sm font-bold text-white leading-none"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Shantinath Patil
              </div>
              <div className="text-xs text-blue-400 font-medium">AI Engineer</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{
                  color: activeSection === href.slice(1) ? '#60a5fa' : '#94a3b8',
                }}
                aria-current={activeSection === href.slice(1) ? 'page' : undefined}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={personal.resumeUrl}
              download
              id="nav-download-resume"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 0 20px rgba(59,130,246,0.3)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 bg-current"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl glass p-4"
            style={{ border: '1px solid rgba(59,130,246,0.2)' }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  color: activeSection === href.slice(1) ? '#60a5fa' : '#94a3b8',
                  background: activeSection === href.slice(1) ? 'rgba(59,130,246,0.1)' : 'transparent',
                }}
              >
                {label}
              </a>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(59,130,246,0.15)' }}>
              <a
                href={personal.resumeUrl}
                download
                className="block text-center px-4 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
