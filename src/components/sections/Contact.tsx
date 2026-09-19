import { useState, useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Hi Shantinath,\n\nMy name is ${name} (${email}).\n\n${message}`);
    window.location.href = `mailto:patilsammed188@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'patilsammed188@gmail.com',
      href: 'mailto:patilsammed188@gmail.com',
      color: '#3b82f6',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'shantinath-patil-8a7b842b3',
      href: 'https://www.linkedin.com/in/shantinath-patil-8a7b842b3/',
      color: '#0ea5e9',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/Shantinathh',
      href: 'https://github.com/Shantinathh',
      color: '#8b5cf6',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020409 0%, #050d18 50%, #020409 100%)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-15" aria-hidden="true" />

      {/* Glow blobs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            <span className="text-blue-400 text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Let's Build Something{' '}
            <span className="gradient-text">Intelligent.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Open to AI/ML opportunities, internships, collaborations, and interesting AI projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                id={`contact-${label.toLowerCase()}`}
                className="flex items-center gap-4 p-5 glass rounded-2xl group hover:scale-[1.02] transition-all duration-300"
                style={{ border: `1px solid ${color}20` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}50`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 30px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}20`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
                aria-label={`Contact via ${label}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, color: color, border: `1px solid ${color}30` }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{label}</div>
                  <div className="text-sm text-white font-medium mt-0.5 group-hover:text-blue-300 transition-colors">
                    {value}
                  </div>
                </div>
                <svg className="w-4 h-4 text-slate-600 ml-auto group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 space-y-5"
              style={{ border: '1px solid rgba(59,130,246,0.2)' }}
              aria-label="Contact form"
            >
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Send a Message
              </h3>

              <div>
                <label htmlFor="contact-name" className="block text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(10,22,40,0.8)',
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.2)')}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(10,22,40,0.8)',
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.2)')}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="I'd love to discuss an AI/ML opportunity..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none resize-none transition-all duration-200"
                  style={{
                    background: 'rgba(10,22,40,0.8)',
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.2)')}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: submitted
                    ? 'linear-gradient(135deg, #10b981, #06b6d4)'
                    : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 0 30px rgba(59,130,246,0.3)',
                }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              <p className="text-xs text-slate-600 text-center">
                Opens your email client — no data stored.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
