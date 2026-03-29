import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Video, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'SI ASISTEN PINTAR (AI)',
    description: 'Sebuah sistem kecerdasan buatan yang dirancang untuk membantu produktivitas dalam pembuatan konten kreatif secara efisien dan sistematis.',
    tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
    icon: <Bot className="w-10 h-10 text-blue-400" />, 
    color: 'from-blue-50/50 to-cyan-50/50',
    github: '#',
    demo: '#',
  },
  {
    title: 'TIPS & TRIK KODING',
    description: 'Dokumentasi dan tutorial mengenai praktik terbaik dalam pengembangan perangkat lunak bagi pengembang generasi muda.',
    tags: ['Premiere Pro', 'YouTube', 'TikTok'],
    icon: <Video className="w-10 h-10 text-pink-400" />,
    color: 'from-pink-50/50 to-rose-50/50',
    github: '#',
    youtube: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header - Simple & Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Projects
          </h2>
          <div className="w-10 h-1 bg-blue-400 mx-auto mt-4 rounded-full opacity-50" />
        </motion.div>

        {/* Grid: Dipersempit agar card tidak terlalu lebar (max-w-4xl) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Thumbnail: Dibuat lebih kecil & clean */}
                <div className={`aspect-video rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                   {project.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800">
                    {project.title}
                  </h3>
                  
                  {/* Deskripsi: Elegant & No Emoji */}
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-medium tracking-wide rounded-lg bg-slate-50 text-slate-400 border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Buttons: Lebih mungil & elegan */}
                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button variant="outline" size="sm" className="h-8 text-xs rounded-xl border-slate-200" asChild>
                        <a href={project.github}>
                          <Github className="h-3.5 w-3.5 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="h-8 text-xs rounded-xl bg-blue-500 hover:bg-blue-600 transition-all px-4" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-3.5 w-3.5 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.youtube && (
                      <Button size="sm" className="h-8 text-xs rounded-xl bg-pink-500 hover:bg-pink-600 transition-all px-4" asChild>
                        <a href={project.youtube}>
                          <Youtube className="h-3.5 w-3.5 mr-2" />
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