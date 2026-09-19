import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/portfolio';

function FlowDiagram({ flow, color }: { flow: string[]; color: string }) {
  return (
    <div className="flex flex-wrap items-center gap-1 mt-3">
      {flow.map((step, i) => (
        <div key={step} className="flex items-center gap-1">
          <span
            className="text-xs px-2 py-1 rounded-md font-medium"
            style={{
              background: `${color}15`,
              color: color,
              border: `1px solid ${color}30`,
            }}
          >
            {step}
          </span>
          {i < flow.length - 1 && (
            <svg className="w-3 h-3 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{ perspective: '1000px' }}
    >
      <div
        className="glass rounded-2xl overflow-hidden cursor-default transition-all duration-300"
        style={{
          border: `1px solid ${hovered ? project.color + '50' : project.color + '25'}`,
          boxShadow: hovered ? `0 20px 60px ${project.color}25, 0 0 40px ${project.color}15` : '0 8px 32px rgba(0,0,0,0.3)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'translateY(-8px)' : 'translateY(0)'}`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top gradient bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})` }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full z-10"
            style={{
              background: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}40`,
            }}
          >
            ⚡ GenAI Featured
          </div>
        )}

        {/* Card content */}
        <div className="p-6 relative">
          {/* Animated background glow */}
          {hovered && (
            <div
              className="absolute inset-0 opacity-5 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${project.color}, transparent 60%)`,
              }}
            />
          )}

          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
              aria-hidden="true"
            >
              {project.icon}
            </div>
            <div>
              <div className="text-xs font-semibold mb-1" style={{ color: project.color }}>
                {project.category}
              </div>
              <h3
                className="text-xl font-bold text-white leading-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {project.title}
              </h3>
              <div className="text-sm text-slate-400 mt-0.5">{project.subtitle}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* AI Flow */}
          <div>
            <div className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">
              AI Pipeline
            </div>
            <FlowDiagram flow={project.flow} color={project.color} />
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200"
                style={{
                  background: hovered ? `${project.color}15` : 'rgba(15,32,64,0.6)',
                  color: hovered ? project.accentColor : '#94a3b8',
                  border: `1px solid ${hovered ? project.color + '30' : 'rgba(59,130,246,0.15)'}`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="flex gap-3 mt-5 pt-4"
            style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            {project.demo !== '#' ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.accentColor})`,
                  boxShadow: `0 0 20px ${project.color}30`,
                }}
                aria-label={`Live demo for ${project.title}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020409 0%, #050d18 60%, #020409 100%)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-15" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
          >
            <span className="text-yellow-400 text-sm font-semibold">PROJECTS</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            End-to-end AI applications — from data to deployment.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Shantinathh"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-300 hover:text-white transition-all duration-200 glass hover:scale-105"
            style={{ border: '1px solid rgba(59,130,246,0.3)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
