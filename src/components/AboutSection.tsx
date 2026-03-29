import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, Plus, IceCream, IceCreamCone } from 'lucide-react';

const AboutSection = () => {
  // Data Statistik
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
      label: "ice cream",
      value: "1000+",
      icon: <IceCreamCone className="w-6 h-6 text-amber-500" />,
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
    // Poin 3: Perbaikan Dark Mode - Tambahkan `dark:bg-slate-950` agar background jadi gelap saat mode gelap
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* --- SISI KIRI: FOTO (Penuh & Melengkung Rapi) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-[38%] flex justify-center flex-shrink-0"
        >
          {/* Poin 1: Foto Gepeng -> Balikin ke tinggi aslinya */}
          {/* Hapus `aspect-square` agar tingginya proporsional. Gunakan `rounded-[40px]` */}
          <div className="relative group w-full max-w-[360px] rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-slate-900 overflow-hidden">
            
            {/* GAMBAR PROFIL - Sekarang tidak terpotong mukanya */}
            <img 
              src="/foto-profil.jpg" // Ganti dengan path foto kamu
              alt="Khalila Profil" 
              className="w-full h-auto object-contain rounded-[40px] transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay Halus */}
            <div className="absolute inset-0 bg-indigo-950/5 group-hover:bg-transparent transition-colors duration-300"></div>

            {/* Poin 2: Ikon Melayang yang "Ketutup" -> Kita ubah jadi interaktif */}
            {/* Hanya nampilkan ikon 'Plus' saja dulu. Kalau di-hover (atau diklik di mobile), baru teksnya muncul. */}
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-50 dark:border-slate-700 hidden md:flex z-10">
               {/* Lingkaran Ikon (Seperti di gambar) */}
               <div className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-inner border border-slate-100 dark:border-slate-600 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-indigo-500" />
               </div>

               {/* Teks Pengalaman yang "Ketutup" - Gunakan hover: untuk membukanya */}
               <div className="flex flex-col group/exp p-2">
                  <span className="block text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-none mb-1 group-hover/exp:opacity-100 transition-opacity">
                      5+ Tahun
                  </span>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] group-hover/exp:opacity-100 transition-opacity">
                      Pengalaman
                  </p>
               </div>
               
               {/* Ikon untuk mengisyaratkan "Bisa Dibuka" */}
               <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg ml-2">
                   <Plus className="w-4 h-4 text-slate-400 group-hover/exp:rotate-90 transition-transform"/>
               </div>
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
            {/* Judul Baru */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-8 leading-tight tracking-tight">
              Digital Explorer & <span className="text-indigo-600 dark:text-indigo-400">Front-end Enthusiast</span>
            </h2>

            {/* Biodata Baru - Sesuaikan agar profesional untuk siswi SMA */}
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
              <p>
                Saya adalah seorang <strong className="text-slate-900 dark:text-slate-100">siswi kelas 1 SMA</strong> yang memiliki ketertarikan mendalam di dunia pengembangan web, khususnya pada bagian <strong>Front-end Development</strong>. Saat ini, saya sedang fokus mempelajari bagaimana cara membangun tampilan website yang tidak hanya berfungsi dengan baik, tapi juga memiliki estetika yang jernih dan nyaman digunakan.
              </p>
              <p>
                Di sela-sela waktu sekolah, saya terus menantang diri dengan mengerjakan berbagai proyek belajar untuk mengasah kemampuan <em>coding</em> saya. Saya percaya bahwa dengan ketekunan dan kemauan untuk terus mencoba hal baru, setiap baris kode yang saya tulis bisa menjadi solusi digital yang bermanfaat di masa depan.
              </p>
            </div>

            {/* Grid Ikon Statistik - Tambahkan warna mode gelap */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-slate-100 dark:border-slate-800 pt-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-5 group"
                >
                  {/* Lingkaran Ikon - Perhatikan `bgColor` */}
                  <div className={`p-4 ${stat.bgColor} rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  
                  {/* Angka & Label */}
                  <div>
                    <span className="block text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-none mb-1">
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