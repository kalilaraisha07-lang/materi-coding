import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

const AboutSection = () => {
  // Data Statistik
  const stats = [
    {
      label: "Projects Selesai",
      value: "1+",
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      bgColor: "bg-indigo-50"
    },
    {
      label: "Video Konten",
      value: "100+",
      icon: <Video className="w-6 h-6 text-rose-500" />,
      bgColor: "bg-rose-50"
    },
    {
      label: "ice cream",
      value: "∞",
      icon: <Coffee className="w-6 h-6 text-amber-500" />,
      bgColor: "bg-amber-50"
    },
    {
      label: "Tahun Pengalaman",
      value: "3+",
      icon: <Rocket className="w-6 h-6 text-emerald-500" />,
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* --- SISI KIRI: FOTO (Penuh sampai ke pinggir bingkai) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-[38%] flex justify-center flex-shrink-0"
        >
          {/* KONTAINER UTAMA BINGKAI (Sangat melengkung/Rounded) */}
          <div className="relative group w-full max-w-[360px] aspect-square rounded-[40px] border border-slate-100 shadow-sm bg-slate-50 overflow-hidden">
            
            {/* GAMBAR (Penuh mengikuti kontainer & Bentuknya) */}
            <img 
              src="/khalila.jpeg" // Ganti dengan path foto kamu yang benar
              alt="Khalila Profil" 
              className="absolute inset-0 w-full h-full object-cover rounded-[40px] transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay Halus saat Hover */}
            <div className="absolute inset-0 bg-indigo-950/5 group-hover:bg-transparent transition-colors duration-300"></div>

            {/* Label Melayang (Sesuai Screenshot 74) */}
            <div className="absolute bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden md:block z-10">
               <span className="block text-2xl font-bold text-slate-800 tracking-tight leading-none mb-1">5+ Tahun</span>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Pengalaman</p>
            </div>
          </div>
        </motion.div>

        {/* --- SISI KANAN: BIODATA & IKON --- */}
        <div className="w-full lg:w-[62%] text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              Passionate Developer & <span className="text-indigo-600">Creator</span>
            </h2>

            {/* Biodata Teks */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12">
              <p>
                Saya adalah seorang <strong className="text-slate-900">Fullstack Web Developer</strong> dengan passion yang kuat dalam menciptakan solusi digital yang inovatif. Dengan pengalaman lebih dari 5 tahun, saya telah membantu berbagai klien dan perusahaan dalam mewujudkan ide-ide mereka menjadi aplikasi web yang powerful dan user-friendly.
              </p>
              <p>
                Selain coding, saya juga aktif sebagai <strong className="text-slate-900">Content Creator</strong>, berbagi pengetahuan tentang pemrograman dan teknologi melalui berbagai platform. Saya percaya bahwa berbagi ilmu adalah cara terbaik untuk terus belajar dan berkembang.
              </p>
            </div>

            {/* Grid Ikon Statistik */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-slate-100 pt-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-5 group"
                >
                  {/* Lingkaran Ikon */}
                  <div className={`p-4 ${stat.bgColor} rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  
                  {/* Angka & Label */}
                  <div>
                    <span className="block text-3xl font-bold text-slate-800 tracking-tight leading-none mb-1">
                      {stat.value}
                    </span>
                    <p className="text-sm font-semibold text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;