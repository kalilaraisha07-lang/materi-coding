import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Heart } from 'lucide-react';

const personalStats = {
  // Urutan 1: Core Logic (Sisi Mindset & Kreativitas)
  logic: [
    { name: 'Curiosity', level: 99, color: 'from-blue-200 to-blue-400' },
    { name: 'Design Sense', level: 70, color: 'from-blue-300 to-indigo-300' },
    { name: 'Consistency', level: 80, color: 'from-cyan-200 to-blue-300' },
  ],
  // Urutan 2: Vibe Check (Sisi Sosial & Energi)
  vibe: [
    { name: 'Energy', level: 99, color: 'from-pink-200 to-pink-400' },
    { name: 'Humor', level: 80, color: 'from-rose-200 to-pink-300' },
    { name: 'Social Battery', level: 90, color: 'from-fuchsia-200 to-pink-400' },
  ],
  // Urutan 3: The Soul (Sisi Passion & Love)
  soul: [
    { name: 'Family', level: 100, color: 'from-blue-300 to-pink-300' },
    { name: 'Music', level: 90, color: 'from-indigo-200 to-purple-300' },
    { name: 'Him', level: 100, color: 'from-pink-300 via-purple-300 to-blue-300' },
  ],
};

function SkillBar({ name, level, delay, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-3"
    >
      <div className="flex justify-between items-center text-sm">
        <span className="font-bold text-slate-700 tracking-wide">{name}</span>
        <span className="font-medium text-slate-400">{level}%</span>
      </div>
      <div className="h-2.5 bg-slate-100/50 rounded-full overflow-hidden shadow-inner border border-white/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg`}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Personal Stats</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter mb-4">
            Attributes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 italic">Vibes</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-300 to-pink-300 mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Core Logic (Biru Pastel) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-black text-blue-600 tracking-tight uppercase">Core Logic</h3>
            </div>
            <div className="space-y-8">
              {personalStats.logic.map((item, index) => (
                <SkillBar key={item.name} {...item} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Card 2: Vibe Check (Pink Pastel) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-pink-50 border border-pink-100 shadow-sm group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-black text-pink-600 tracking-tight uppercase">Vibe Check</h3>
            </div>
            <div className="space-y-8">
              {personalStats.vibe.map((item, index) => (
                <SkillBar key={item.name} {...item} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Card 3: The Soul (Mix Pastel) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100 shadow-sm group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-black text-purple-600 tracking-tight uppercase">The Soul</h3>
            </div>
            <div className="space-y-8">
              {personalStats.soul.map((item, index) => (
                <SkillBar key={item.name} {...item} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}