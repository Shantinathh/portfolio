import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { hackathons } from '../../data/portfolio';

export default function Hackathons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hackathons" className="section-padding relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <span className="text-red-400 text-sm font-semibold">HACKATHONS</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Competitive <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Building under pressure, competing, and learning from the best.
          </p>
        </motion.div>

        {/* Hackathon cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {hackathons.map((hack, i) => {
            const colors = ['#ef4444', '#f59e0b', '#8b5cf6'];
            const color = colors[i % colors.length];
            return (
              <motion.div
                key={hack.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                style={{ border: `1px solid ${color}25` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${color}50`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 35px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${color}25`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -translate-y-8 translate-x-8 pointer-events-none"
                  style={{ background: color }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  aria-hidden="true"
                >
                  ⚡
                </div>

                {/* Content */}
                <h3
                  className="text-base font-bold text-white mb-2 leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {hack.name}
                </h3>
                <div className="text-sm text-slate-400 mb-3">{hack.venue}</div>

                {/* Year badge */}
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: `${color}15`,
                    color: color,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {hack.year}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
