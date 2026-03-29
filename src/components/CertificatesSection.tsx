import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    title: 'Medali Perak, Olim IPA',
    issuer: 'Omni Sains Indonesia (Penyisihan Kota)',
    date: '2024',
    credentialId: 'OSI-IPA-KOTA-2024',
    image: '🥈',
    color: 'from-blue-100 to-slate-200',
    darkColor: 'dark:from-blue-900/20 dark:to-slate-800/20',
    link: '#',
  },
  {
    title: 'Medali Perunggu, Olim Inggris',
    issuer: 'Omni Sains Indonesia (Penyisihan Kota)',
    date: '2024',
    credentialId: 'OSI-ENG-KOTA-2024',
    image: '🥉',
    color: 'from-orange-100 to-amber-200',
    darkColor: 'dark:from-orange-900/20 dark:to-amber-900/20',
    link: '#',
  },
  {
    title: 'Juara 1 Estafet',
    issuer: 'Perayaan 17 Agustus',
    date: '2024',
    credentialId: 'RI-79-ESTAFET-2024',
    image: '🏃',
    color: 'from-red-100 to-rose-200',
    darkColor: 'dark:from-red-900/20 dark:to-rose-900/20',
    link: '#',
  },
  {
    title: 'Juara 1',
    issuer: 'Pencapaian saat kelas 6',
    date: '2022',
    credentialId: 'KL-06-2022',
    image: '🏆',
    color: 'from-yellow-100 to-orange-100',
    darkColor: 'dark:from-yellow-900/20 dark:to-orange-900/20',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="achievements" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display italic">
            My Achievements
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid Kartu */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achieve, index) => (
            <motion.div
              key={achieve.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] border border-white/50 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                
                {/* Ikon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${achieve.color} ${achieve.darkColor} shadow-inner`}>
                  <span className="text-3xl">{achieve.image}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Medal className="h-6 w-6 text-blue-500 mt-1 shrink-0" />
                    <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors tracking-tight leading-tight">
                      {achieve.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                    {achieve.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                    <Calendar className="h-4 w-4 text-pink-400" />
                    <span>{achieve.date}</span>
                  </div>
                  
                  {/* ID Box */}
                  <div className="pt-2">
                    <p className="text-[10px] text-slate-400 dark:text-slate-600 font-mono bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50 italic">
                      REF: {achieve.credentialId}
                    </p>
                  </div>
                  
                  {/* Button Detail */}
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full rounded-2xl border-slate-200 dark:border-slate-700 dark:text-white font-bold text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all" asChild>
                      <a href={achieve.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-2" />
                        Detail Achievement
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}