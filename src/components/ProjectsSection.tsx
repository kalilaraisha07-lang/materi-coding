import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Video, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'SI ASISTEN PINTAR (AI)',
    description: 'Sebuah sistem kecerdasan buatan yang dirancang untuk membantu produktivitas dalam pembuatan konten kreatif secara efisien dan sistematis.',
    tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
    icon: <Bot className="w-10 h-10 text-blue-500" />, 
    color: 'from-blue-100/40 to-cyan-100/40',
    darkColor: 'dark:from-blue-900/20 dark:to-cyan-900/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'TIPS & TRIK KODING',
    description: 'Dokumentasi dan tutorial mengenai praktik terbaik dalam pengembangan perangkat lunak bagi pengembang generasi muda.',
    tags: ['Premiere Pro', 'YouTube', 'TikTok'],
    icon: <Video className="w-10 h-10 text-pink-500" />,
    color: 'from-pink-100/40 to-rose-100/40',
    darkColor: 'dark:from-pink-900/20 dark:to-rose-900/20',
    github: '#',
    youtube: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header - Font Membulat & Warna Kontras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* text-slate-900 di terang, dark:text-white di gelap agar nampak jelas */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display italic">
            Projects
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card - Border lebih tegas di mode gelap */}
              <div className="h-full p-8 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] border border-white/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Thumbnail Area */}
                <div className={`aspect-video rounded-3xl mb-8 flex items-center justify-center bg-gradient-to-br ${project.color} ${project.darkColor}`}>
                   {project.icon}
                </div>
                
                <div className="space-y-4">
                  {/* Title - Warna Kontras Tinggi */}
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                    {project.title}
                  </h3>
                  
                  {/* Description - Lebih tebal sikit biar gak samar */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6">
                    {project.github && (
                      <Button variant="outline" size="sm" className="rounded-2xl border-slate-200 dark:border-slate-700 dark:text-white" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="rounded-2xl bg-blue-500 hover:bg-blue-600 font-bold text-white shadow-lg shadow-blue-200 dark:shadow-none transition-all" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.youtube && (
                      <Button size="sm" className="rounded-2xl bg-pink-500 hover:bg-pink-600 font-bold text-white shadow-lg shadow-pink-200 dark:shadow-none transition-all" asChild>
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