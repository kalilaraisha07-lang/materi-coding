import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Youtube, Star } from 'lucide-react';

const projects = [
  {
    title: 'SI ASISTEN PINTAR (AI)',
    description: 'Bukan dukun, tapi tool AI cerdas buat generate konten kilat. Hemat waktu, hemat pikiran, hasil tetep cantik! ✨',
    tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
    // GAMBAR 1: Ilustrasi 3D Robot Cute Gaya Clay
    image: 'https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-saying-hello-5610813-4693175.png?f=webp', 
    color: 'from-blue-100 to-cyan-100',
    large: true, 
    action: { label: 'Coba Keajaibannya', icon: <Sparkles size={16} /> }
  },
  {
    title: 'TIPS & TRIK KODING',
    description: 'Seri tutorial & tips receh tapi daging buat para developer muda. Subscribe ya, biar nambah ilmu! 😄',
    tags: ['Premiere Pro', 'YouTube', 'TikTok'],
    // GAMBAR 2: Ilustrasi 3D Kamera Film Cute Gaya Clay
    image: 'https://cdn3d.iconscout.com/3d/premium/thumb/camera-icon-4601132-3806499.png?f=webp',
    color: 'from-pink-100 to-rose-100',
    large: false, 
    action: { label: 'Tonton Sekarang', icon: <Youtube size={16} /> }
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Konsisten Pastel Dream Kalila */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-pink-400 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">My Creations</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter mb-4">
            Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 italic">Pilihan</span> Kalila
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-blue-300 to-pink-300 mx-auto rounded-full mt-5 shadow-inner" />
        </motion.div>

        {/* Layout Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className={`${project.large ? 'md:col-span-2' : 'md:col-span-1'} relative group`}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000`}></div>
              
              <div className="relative h-full p-10 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl hover:shadow-shadow-glow hover:border-white/80 transition-all duration-500">
                
                {/* Thumbnail Area dengan Gambar 3D Gemas */}
                <div className={`aspect-[16/10] md:aspect-video rounded-[2rem] mb-10 flex items-center justify-center bg-gradient-to-br ${project.color} shadow-inner relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-700`}>
                  
                  {/* Gambar 3D dengan Animasi Bouncy */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.15, y: -10, rotate: project.large ? [0, -5, 5, 0] : [0, 5, -5, 0] }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`object-contain ${project.large ? 'h-56' : 'h-40'} group-hover:drop-shadow-pastel transition-shadow duration-500`}
                  />

                  {/* Efek Bintang Jatuh Halus */}
                  <div className="absolute top-4 left-6 opacity-40 text-blue-300 animate-pulse">✦</div>
                  <div className="absolute bottom-6 right-8 opacity-40 text-pink-300 animate-pulse">✦</div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed font-medium italic">
                    "{project.description}"
                  </p>
                  
                  {/* Tag Gaya Pastel Mint */}
                  <div className="flex flex-wrap gap-2.5 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button - Letakkan di Kanan Atas biar Unik */}
                  <div className="absolute top-8 right-8">
                    <motion.a 
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/80 text-purple-400 rounded-full shadow-lg border border-purple-100 hover:text-purple-600 transition-colors"
                    >
                      {project.action.icon}
                    </motion.a>
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