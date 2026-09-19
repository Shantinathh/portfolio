import { useState, useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { pipeline } from '../../data/portfolio';

const pipelineIcons: Record<string, ReactNode> = {
  Database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  Filter: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  ),
  BarChart3: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  MessageSquare: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Sparkles: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Layers: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Rocket: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

const pipelineColors = [
  '#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#ec4899', '#10b981', '#6366f1',
];

export default function WhatIBuild() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="what-i-build" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050d18 0%, #020409 100%)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-15" aria-hidden="true" />

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
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <span className="text-emerald-400 text-sm font-semibold">ENGINEERING PROCESS</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What I <span className="gradient-text">Build</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            My end-to-end AI engineering workflow — hover each stage to learn more.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="flex flex-col items-center gap-2">
          {pipeline.map((stage, i) => {
            const color = pipelineColors[i % pipelineColors.length];
            const isHovered = hoveredStep === i;

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="w-full max-w-2xl"
              >
                <div
                  className="glass rounded-2xl p-4 cursor-pointer transition-all duration-300 group"
                  style={{
                    border: `1px solid ${isHovered ? color + '60' : 'rgba(59,130,246,0.15)'}`,
                    boxShadow: isHovered ? `0 0 40px ${color}25` : 'none',
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${stage.step}: ${stage.description}`}
                  onFocus={() => setHoveredStep(i)}
                  onBlur={() => setHoveredStep(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setHoveredStep(isHovered ? null : i);
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Step number */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{
                        background: `${color}30`,
                        border: `2px solid ${color}60`,
                        color: color,
                      }}
                    >
                      {i + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isHovered ? `${color}25` : `${color}10`,
                        color: color,
                        border: `1px solid ${color}30`,
                      }}
                      aria-hidden="true"
                    >
                      {pipelineIcons[stage.icon]}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm font-bold mb-0.5"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          color: isHovered ? color : 'white',
                        }}
                      >
                        {stage.step}
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-slate-400 leading-relaxed pt-1">
                          {stage.description}
                        </p>
                      </motion.div>
                      {!isHovered && (
                        <div className="text-xs text-slate-600">Hover to learn more</div>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <svg
                      className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                      style={{ color: isHovered ? color : '#475569', transform: isHovered ? 'rotate(90deg)' : 'rotate(0deg)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Connector arrow */}
                {i < pipeline.length - 1 && (
                  <div className="flex justify-center my-1" aria-hidden="true">
                    <div
                      className="w-px h-6 transition-all duration-300"
                      style={{ background: `linear-gradient(180deg, ${color}60, ${pipelineColors[(i + 1) % pipelineColors.length]}60)` }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
