import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

const AboutSection = () => {
  // Data Statistik untuk ikon di bawah biodata
  const stats = [
    {
      label: "Projects Selesai",
      value: "50+",
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
      label: "Cangkir Kopi",
      value: "1000+",
      icon: <Coffee className="w-6 h-6 text-amber-500" />,
      bgColor: "bg-amber-50"
    },
    {
      label: "Tahun Pengalaman",
      value: "5+",
      icon: <Rocket className="w-6 h-6 text-emerald-500" />,
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* --- SISI KIRI: FOTO (Dikecilkan & Berbingkai) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-[35%] flex justify-center flex-shrink-0"
        >
          <div className="relative group w-full max-w-[340px]">
            {/* Bingkai Abu-abu Muda (Rounded Rectangle) */}
            <div className="aspect-square bg-slate-50 rounded-[45px] border border-slate-100 flex items-center justify-center p-10 shadow-sm transition-all duration-500 group-hover:shadow-md">
              
              {/* Kontainer Putih untuk Avatar */}
              <div className="w-full h-full bg-white rounded-3xl shadow-sm flex items-center justify-center overflow-hidden border border-slate-50">
                <img 
                  src="/khalila.jpeg" // Ganti dengan path foto kamu di folder public
                  alt="Khalila Profil" 
                  className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Label Pengalaman Melayang di Pojok Bawah */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                 <span className="block text-2xl font-bold text-slate-800 tracking-tight leading-none mb-1">5+ Tahun</span>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Pengalaman</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- SISI KANAN: BIODATA & IKON --- */}
        <div className="w-full lg:w-[65%] text-left">
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

            {/* Grid Ikon Statistik (Di bawah Biodata) */}
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