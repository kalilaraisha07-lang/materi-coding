import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Clapperboard, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Pastikan import Button ini ada

const projects = [
  {
    title: 'SI ASISTEN PINTAR (AI)',
    description: 'Tool AI cerdas buat generate konten kilat. Hemat waktu, hemat pikiran, hasil tetep cantik! ✨',
    tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
    // GAMBAR: Kita balikin pakai Icon Bot yang cute & lucu
    icon: <Bot className="w-16 h-16 text-blue-500/70" />, 
    color: 'from-blue-100 to-cyan-100',
    github: '#', // Ganti dengan link GitHub kamu
    demo: '#', // Ganti dengan link demo kamu
  },
  {
    title: 'TIPS & TRIK KODING',
    description: 'Seri tutorial & tips receh tapi daging buat para developer muda. Subscribe ya! 😄',
    tags: ['Premiere Pro', 'YouTube', 'TikTok'],
    // GAMBAR: Kita balikin pakai Icon Film yang lucu
    icon: <Clapperboard className="w-12 h-12 text-pink-500/70" />,
    color: 'from-pink-100 to-rose-100',
    github: '#', // Ganti dengan link GitHub kamu
    youtube: '#', // Ganti dengan link YouTube kamu
  },
];

export default function ProjectsSection() {
  return (
    // Kita tambah margin top/bottom (mt-32 mb-20) agar gak tabrakan sama section lain
    <section id="projects" className="py-20 md:py-32 bg-transparent mt-32 mb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header - Nama Kalila sudah Update! */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16" // Jarak bawah 16
        >
          {/* Label atas: text-pink-400 warna solid */}
          <span className="text-pink-400 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">My Portfolio</span>
          
          {/* Judul Baru: warna text-slate-800 solid, tidak ada gradien di Kalila-nya */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter mb-4">
            Projects & <span className="text-blue-500 italic">Karya</span> Kalila
          </h2>
          
          {/* Garis bawah: warna solid gradient blue-pink, rounded full */}
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-300 to-pink-300 mx-auto rounded-full mt-4 shadow-sm" />
        </motion.div>

        {/* Layout Grid: Normal (Semua kartu sama besar, grid-cols-2) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card - Glassmorphism, Rounded 2.5rem (Bulat & Soft) */}
              <div className="h-full p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                
                {/* Thumbnail Area dengan Icon */}
                <div className={`aspect-video rounded-3xl mb-8 flex items-center justify-center bg-gradient-to-br ${project.color} shadow-inner`}>
                   {project.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Deskripsi: line-clamp-3 agar gak kepanjangan, Font regular text-slate-500 */}
                  <p className="text-sm text-slate-500 leading-relaxed font-regular line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tag Gaya Pastel Mint */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-white text-slate-500 border border-slate-100 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons - Konsisten dengan Tema Pastel */}
                  <div className="flex gap-3 pt-6">
                    {project.github && (
                      <Button variant="outline" size="sm" className="rounded-2xl border-slate-200 hover:bg-slate-50" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="rounded-2xl bg-blue-500 hover:bg-blue-600 font-bold shadow-md shadow-blue-100 transition-all" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.youtube && (
                      <Button size="sm" className="rounded-2xl bg-pink-500 hover:bg-pink-600 font-bold shadow-md shadow-pink-100 transition-all" asChild>
                        <a href={project.youtube}>
                          <Youtube className="h-4 w-4 mr-2" />
                          Watch
                        </a>
                      </Button>
                    )}
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