import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../../data/portfolio';

// Animated particles background
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const count = Math.min(80, Math.floor(w * h / 15000));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// 3D Neural Core using CSS + SVG (performant, no WebGL overhead)
function NeuralCore() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMousePos({
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rotateX = mousePos.y * -15;
  const rotateY = mousePos.x * 15;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="relative w-80 h-80"
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow" />
        <div
          className="absolute inset-4 rounded-full border border-purple-500/20"
          style={{ animation: 'spin 15s linear infinite reverse' }}
        />
        <div
          className="absolute inset-8 rounded-full border border-cyan-500/30"
          style={{ animation: 'spin 10s linear infinite' }}
        />

        {/* Core glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Central orb */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-cyan-500/40 blur-sm" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/60 to-purple-500/60" />
            <div className="absolute inset-4 rounded-full bg-blue-300/80 blur-[2px]" />

            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-pulse" />
            <div
              className="absolute -inset-4 rounded-full border border-blue-500/20"
              style={{ animation: 'pulse-glow 3s ease-in-out 1s infinite' }}
            />
            <div
              className="absolute -inset-8 rounded-full border border-purple-500/15"
              style={{ animation: 'pulse-glow 3s ease-in-out 2s infinite' }}
            />
          </div>
        </div>

        {/* Orbiting nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-start"
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: 'center',
            }}
          >
            <div
              className="w-3 h-3 rounded-full ml-2"
              style={{
                background: i % 3 === 0
                  ? 'rgba(96, 165, 250, 0.8)'
                  : i % 3 === 1
                  ? 'rgba(167, 139, 250, 0.8)'
                  : 'rgba(34, 211, 238, 0.8)',
                boxShadow: `0 0 8px ${i % 3 === 0 ? 'rgba(96, 165, 250, 0.6)' : i % 3 === 1 ? 'rgba(167, 139, 250, 0.6)' : 'rgba(34, 211, 238, 0.6)'}`,
              }}
            />
          </motion.div>
        ))}

        {/* Data streams */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>
          </defs>
          {[
            [160, 160, 60, 30],
            [160, 160, 280, 80],
            [160, 160, 240, 250],
            [160, 160, 80, 280],
            [160, 160, 30, 120],
            [160, 160, 310, 190],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#lineGrad)"
              strokeWidth="0.5"
              opacity="0.5"
            />
          ))}
        </svg>

        {/* Floating label nodes */}
        {[
          { label: 'ML', pos: 'top-2 right-8', color: 'blue' },
          { label: 'NLP', pos: 'bottom-2 left-8', color: 'purple' },
          { label: 'RAG', pos: 'top-12 left-2', color: 'cyan' },
          { label: 'LLM', pos: 'bottom-12 right-2', color: 'blue' },
        ].map(({ label, pos, color }) => (
          <div
            key={label}
            className={`absolute ${pos} text-xs font-mono font-semibold px-2 py-1 rounded glass`}
            style={{
              color: color === 'blue' ? '#60a5fa' : color === 'purple' ? '#a78bfa' : '#22d3ee',
              border: `1px solid ${color === 'blue' ? 'rgba(96,165,250,0.3)' : color === 'purple' ? 'rgba(167,139,250,0.3)' : 'rgba(34,211,238,0.3)'}`,
              fontSize: '10px',
            }}
          >
            {label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const roles = [
  'Machine Learning Engineer',
  'Generative AI Engineer',
  'NLP Engineer',
  'RAG Systems Developer',
  'AI Application Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020409 0%, #050d18 50%, #020409 100%)' }}
    >
      {/* Background elements */}
      <ParticleField />

      {/* Hero gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              style={{ border: '1px solid rgba(59,130,246,0.3)' }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">Open to AI/ML Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white">Shantinath</span>
              <br />
              <span className="gradient-text">Patil</span>
            </motion.h1>

            {/* Dynamic role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-300 font-medium mb-4 min-h-[2rem] font-mono"
            >
              <span>{displayText}</span>
              <span className="animate-pulse text-blue-400">|</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
            >
              Building intelligent applications with{' '}
              <span className="text-blue-400 font-medium">Machine Learning</span>,{' '}
              <span className="text-purple-400 font-medium">Generative AI</span>,{' '}
              <span className="text-cyan-400 font-medium">NLP</span>, and{' '}
              <span className="text-blue-300 font-medium">Retrieval-Augmented Generation</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={handleScrollToProjects}
                id="hero-view-projects"
                className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 0 30px rgba(59,130,246,0.4)',
                }}
              >
                View Projects
              </button>
              <a
                href={personal.resumeUrl}
                download
                id="hero-download-resume"
                className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 glass"
                style={{ border: '1px solid rgba(59,130,246,0.4)' }}
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/Shantinathh"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 group"
                aria-label="GitHub profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shantinath-patil-8a7b842b3/"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 group"
                aria-label="LinkedIn profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">LinkedIn</span>
              </a>
              <a
                href="mailto:patilsammed188@gmail.com"
                id="hero-email"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 group"
                aria-label="Email Shantinath"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Profile + 3D Visual */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            {/* Profile photo glass card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glow behind photo */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-40"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              />

              {/* Glass card */}
              <div
                className="relative glass rounded-2xl p-3 animate-float"
                style={{
                  border: '1px solid rgba(59,130,246,0.3)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.15)',
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-xl" />

                <img
                  src={personal.profilePhoto}
                  alt="Shantinath Patil — AI Engineer"
                  className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl"
                  style={{ objectPosition: 'top' }}
                />

                {/* Status badge */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass whitespace-nowrap"
                  style={{ border: '1px solid rgba(16,185,129,0.4)', boxShadow: '0 0 20px rgba(16,185,129,0.2)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-semibold">AI Engineer</span>
                </div>
              </div>
            </motion.div>

            {/* Neural Core 3D visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-72 h-72 relative"
              aria-hidden="true"
            >
              <NeuralCore />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
