import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { publication } from '../../data/portfolio';

export default function Publication() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="publication" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020409 0%, #050d18 100%)' }}
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
            style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
          >
            <span className="text-indigo-400 text-sm font-semibold">RESEARCH PUBLICATION</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Published <span className="gradient-text">Research</span>
          </h2>
        </motion.div>

        {/* Publication card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(99,102,241,0.3)' }}
        >
          {/* Top accent */}
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }} />

          <div className="p-8 md:p-10">
            {/* Document icon header */}
            <div className="flex items-start gap-6 mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}
                aria-hidden="true"
              >
                📄
              </div>
              <div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}
                  >
                    {publication.journal}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(6,182,212,0.15)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.3)' }}
                  >
                    {publication.volume}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }}
                  >
                    {publication.date}
                  </span>
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-white leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {publication.title}
                </h3>
              </div>
            </div>

            {/* Abstract */}
            <div className="mb-8">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Abstract</div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {publication.abstract}
              </p>
            </div>

            {/* RAG Pipeline Visual */}
            <div
              className="rounded-2xl p-5 mb-8"
              style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(99,102,241,0.2)' }}
            >
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-4">
                Research Focus — RAG Mitigation Pipeline
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { label: 'LLMs', color: '#8b5cf6', desc: 'Large Language Models' },
                  { arrow: true },
                  { label: 'Hallucination', color: '#ef4444', desc: 'Factual Errors' },
                  { arrow: true },
                  { label: 'Retrieval', color: '#06b6d4', desc: 'Knowledge Base' },
                  { arrow: true },
                  { label: 'Grounding', color: '#10b981', desc: 'Verified Context' },
                  { arrow: true },
                  { label: 'Reliability', color: '#f59e0b', desc: 'Accurate Output' },
                ].map((item, i) => {
                  if ('arrow' in item) {
                    return (
                      <svg key={i} className="w-5 h-5 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    );
                  }
                  return (
                    <div key={item.label} className="flex flex-col items-center">
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-lg"
                        style={{
                          background: `${item.color}15`,
                          color: item.color,
                          border: `1px solid ${item.color}40`,
                        }}
                      >
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-600 mt-1">{item.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tags + CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(99,102,241,0.1)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-mono text-slate-500"
                  title="Paper ID"
                >
                  ID: {publication.paperId}
                </span>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="publication-read-paper"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    boxShadow: '0 0 25px rgba(99,102,241,0.35)',
                  }}
                  aria-label="Read full research paper on IJRASET"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Read Paper
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
