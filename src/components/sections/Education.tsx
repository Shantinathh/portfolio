import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../../data/portfolio';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050d18 0%, #020409 100%)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-15" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <span className="text-emerald-400 text-sm font-semibold">EDUCATION</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(16,185,129,0.3)' }}
        >
          {/* Top accent */}
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #10b981, #06b6d4)' }} />

          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                style={{ background: 'rgba(16,185,129,0.15)', border: '2px solid rgba(16,185,129,0.3)' }}
                aria-hidden="true"
              >
                🎓
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold text-white mb-1 leading-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {education.degree}
                </h3>
                <div className="text-lg text-emerald-400 font-semibold mb-2">{education.field}</div>
                <div className="text-base text-slate-300 mb-4">{education.institution}</div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {education.period}
                  </div>
                </div>

                {/* CGPA highlight */}
                <div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}
                >
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">CGPA</div>
                    <div
                      className="text-3xl font-bold"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#10b981' }}
                    >
                      {education.cgpa}
                    </div>
                  </div>
                  <div className="pl-3" style={{ borderLeft: '1px solid rgba(16,185,129,0.3)' }}>
                    <div className="text-xs text-slate-500">Out of</div>
                    <div className="text-3xl font-bold text-slate-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10</div>
                  </div>
                  <div className="pl-3" style={{ borderLeft: '1px solid rgba(16,185,129,0.3)' }}>
                    <div className="text-xs text-slate-500">Status</div>
                    <div className="text-sm font-bold text-emerald-400">Ongoing</div>
                  </div>
                </div>

                {/* Focus areas */}
                <div className="mt-5">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">Study Focus</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Artificial Intelligence', 'Machine Learning', 'Deep Learning',
                      'Neural Networks', 'Data Science', 'NLP',
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          background: 'rgba(16,185,129,0.1)',
                          color: '#6ee7b7',
                          border: '1px solid rgba(16,185,129,0.2)',
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
