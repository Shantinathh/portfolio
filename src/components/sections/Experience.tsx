import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050d18 0%, #020409 100%)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-15" aria-hidden="true" />

      {/* Decorative line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px opacity-10"
        style={{ background: 'linear-gradient(180deg, transparent, #3b82f6 30%, #8b5cf6 70%, transparent)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}
          >
            <span className="text-cyan-400 text-sm font-semibold">EXPERIENCE</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.5), rgba(139,92,246,0.5))' }}
            aria-hidden="true"
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className={`relative flex items-start gap-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-blue-400 z-10"
                style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60`, top: '1.5rem' }}
                aria-hidden="true"
              />

              {/* Spacer for centering */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
              >
                <div
                  className="glass rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300"
                  style={{
                    border: `1px solid ${exp.color}30`,
                    background: 'rgba(10,22,40,0.7)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${exp.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40` }}
                        aria-hidden="true"
                      >
                        {exp.logo}
                      </div>
                      <div>
                        <h3
                          className="text-base font-bold text-white"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {exp.role}
                        </h3>
                        <div className="text-sm font-medium" style={{ color: exp.color }}>
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full hidden sm:block"
                      style={{
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
