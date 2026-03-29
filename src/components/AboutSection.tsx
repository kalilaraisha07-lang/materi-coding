import React, { useState } from 'react';
import { ChevronDown, Target, Cpu, Heart } from 'lucide-react';

const AboutSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const aboutDetails = [
    {
      title: "Behind the Screen",
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      content: "Pelajar SMA yang sedang mendalami front-end development. Fokus saya adalah membangun tampilan web yang bersih, rapi, dan fungsional melalui proses belajar yang konsisten."
    },
    {
      title: "Beyond the Code",
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      content: "Di luar coding, saya penikmat estetika visual. Mencari inspirasi dari desain minimalis dan komposisi warna untuk menjaga kreativitas tetap segar di setiap proyek."
    },
    {
      title: "Target Masa Depan",
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      content: "Terus bereksplorasi dengan teknologi web terbaru untuk membangun platform yang solutif, fungsional, dan memberikan dampak positif bagi banyak orang."
    }
  ];

  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Header Section - Warna teks otomatis ikut tema */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Digital Explorer & Design Enthusiast</h2>
          <div className="h-1 w-20 bg-blue-500 rounded shadow-[0_0_10px_#3b82f6]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kiri: Deskripsi Singkat */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed opacity-80">
              Halo! Saya seorang siswa kelas 1 SMA yang sedang menantang diri untuk menguasai dunia pengembangan web. Meskipun masih pemula, saya percaya bahwa disiplin dan estetika adalah kunci utama dalam membangun karya digital yang berkualitas.
            </p>
            
            {/* Stats Kecil - Border disesuaikan agar transparan halus */}
            <div className="flex gap-8 border-t border-slate-500/30 pt-6">
              <div>
                <span className="block text-2xl font-bold">10+</span>
                <span className="text-sm opacity-60 underline decoration-blue-500">Proyek Belajar</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-blue-400 underline decoration-blue-400">Active</span>
                <span className="text-sm opacity-60">Status Belajar</span>
              </div>
            </div>
          </div>

          {/* Kanan: Accordion Details */}
          <div className="space-y-4">
            {aboutDetails.map((item, index) => (
              <div 
                key={index} 
                className="border border-slate-500/20 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 bg-white/5 shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3 font-semibold">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 opacity-80 leading-relaxed border-t border-slate-500/10">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;