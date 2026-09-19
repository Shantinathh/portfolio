import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const focusAreas = [
  { icon: '🤖', label: 'AI/ML', desc: 'End-to-end model development' },
  { icon: '✨', label: 'Generative AI', desc: 'LLM-powered applications' },
  { icon: '💬', label: 'NLP', desc: 'Language understanding systems' },
  { icon: '🔍', label: 'RAG', desc: 'Retrieval-Augmented Generation' },
  { icon: '🚀', label: 'AI Applications', desc: 'Production-ready AI apps' },
  { icon: '☁️', label: 'Deployment', desc: 'Streamlit & FastAPI deployment' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #020409 0%, #050d18 50%, #020409 100%)' }} />
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section heading */}
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
            <span className="text-blue-400 text-sm font-semibold">ABOUT ME</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            The AI Engineer
            <span className="gradient-text"> Behind the Work</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p className="text-lg">
                I'm <span className="text-white font-semibold">Shantinath Patil</span>, an aspiring AI Engineer from{' '}
                <span className="text-blue-400">Greater Bengaluru Area</span>, pursuing a BE in Artificial Intelligence and Machine Learning at Bahubali College of Engineering.
              </p>
              <p>
                My journey in AI spans the full spectrum — from building classical{' '}
                <span className="text-blue-300 font-medium">supervised and unsupervised ML models</span> to deploying{' '}
                <span className="text-purple-300 font-medium">Generative AI applications</span> powered by LLMs. I've gained real-world industry experience as a{' '}
                <span className="text-emerald-300 font-medium">Machine Learning Intern at FlyRank AI</span>, an{' '}
                <span className="text-amber-300 font-medium">AWS Student Builder Group Leader</span>, a{' '}
                <span className="text-yellow-300 font-medium">Google Gemini Student Ambassador</span> promoting AI adoption, and through an{' '}
                <span className="text-cyan-300 font-medium">NLP Internship at ICCC</span> developing conversational systems.
              </p>
              <p>
                I'm particularly passionate about{' '}
                <span className="text-blue-300 font-medium">Retrieval-Augmented Generation</span> — a space I've explored deeply enough to publish academic research on how RAG mitigates LLM hallucinations. I work across the full AI application stack: data preprocessing, model training, LangChain pipelines, vector databases, and FastAPI/Streamlit deployment.
              </p>
              <p>
                I'm actively looking for <span className="text-blue-400 font-medium">AI/ML engineering roles, internships, and collaborations</span> where I can build intelligent systems that make a real difference.
              </p>
            </div>

            {/* Info cards */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: 'Location', value: 'Bengaluru, India', icon: '📍' },
                { label: 'CGPA', value: '8.80 / 10', icon: '🎓' },
                { label: 'Published', value: 'IJRASET 2026', icon: '📄' },
                { label: 'Focus', value: 'Generative AI & RAG', icon: '🎯' },
              ].map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors duration-200"
                >
                  <span className="text-xl">{icon}</span>
                  <div className="text-xs text-slate-500 mt-1">{label}</div>
                  <div className="text-sm text-white font-medium mt-0.5">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map(({ icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="glass rounded-2xl p-5 group hover:scale-105 transition-all duration-300 cursor-default"
                  style={{
                    border: '1px solid rgba(59,130,246,0.15)',
                    background: 'rgba(10,22,40,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(59,130,246,0.4)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(59,130,246,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(59,130,246,0.15)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <div
                    className="text-sm font-bold text-white mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {label}
                  </div>
                  <div className="text-xs text-slate-400">{desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 glass rounded-2xl p-5"
              style={{ border: '1px solid rgba(59,130,246,0.15)' }}
            >
              <div className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wider">Core Stack</div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'LangChain', 'Hugging Face', 'FastAPI', 'Streamlit',
                  'Scikit-learn', 'ChromaDB', 'RAG', 'NLP',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium text-blue-300"
                    style={{
                      background: 'rgba(59,130,246,0.1)',
                      border: '1px solid rgba(59,130,246,0.2)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
