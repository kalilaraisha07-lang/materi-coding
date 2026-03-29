import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, IceCream, Rocket } from 'lucide-react';

const AboutSection = () => {
  // Data Statistik yang kamu inginkan
  const stats = [
    {
      label: "Projects Selesai",
      value: "1+",
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      bgColor: "bg-indigo-50 dark:bg-indigo-950"
    },
    {
      label: "Video Konten",
      value: "5+",
      icon: <Video className="w-6 h-6 text-rose-500" />,
      bgColor: "bg-rose-50 dark:bg-rose-950"
    },
    {
      label: "Ice Cream",
      value: "1000+",
      icon: <IceCream className="w-6 h-6 text-amber-500" />,
      bgColor: "bg-amber-50 dark:bg-amber-950"
    },
    {
      label: "Status Belajar",
      value: "Active",
      icon: <Rocket className="w-6 h-6 text-emerald-500" />,
      bgColor: "bg-emerald-50 dark:bg-emerald-950"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* --- SISI KIRI: FOTO (Bersih & Penuh) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-[38%] flex justify-center flex-shrink-0"
        >
          <div className="relative group w-full max-w-[360px] aspect-square rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <img 
              src="/khalila-baru.jpg" // Pastikan file fotomu ada di folder public dengan nama ini
              alt="Khalila Profil" 
              className="absolute inset-0 w-full h-full object-cover rounded-[40px] transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-indigo-950/5 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        </motion.div>

        {/* --- SISI KANAN: BIODATA --- */}
        <div className="w-full lg:w-[62%] text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              Get to know more <span className="text-indigo-600 dark:text-indigo-400">closely</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
              <p>
                Saya adalah seorang <strong className="text-slate-900 dark:text-white">siswi kelas 1 SMA</strong> yang memiliki ketertarikan mendalam di dunia pengembangan web, khususnya pada bagian <strong>Front-end Development</strong>. Saat ini, saya sedang fokus mempelajari bagaimana cara membangun tampilan website yang tidak hanya berfungsi dengan baik, tapi juga memiliki estetika yang jernih dan nyaman digunakan.
              </p>
              <p>
                Di sela-sela waktu sekolah, saya terus menantang diri dengan mengerjakan berbagai proyek belajar untuk mengasah kemampuan <em>coding</em> saya. Saya percaya bahwa setiap baris kode yang saya tulis adalah langkah menuju solusi digital yang bermanfaat di masa depan.
              </p>
            </div>

            {/* Grid Ikon Statistik */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-slate-100 dark:border-slate-800 pt-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-5 group"
                >
                  <div className={`p-4 ${stat.bgColor} rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-slate-800 dark:text-white tracking-tight leading-none mb-1">
                      {stat.value}
                    </span>
                    <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
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