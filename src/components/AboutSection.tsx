import React, { useState } from 'react';
import { ChevronDown, Target, Cpu, Heart } from 'lucide-react';

const AboutSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const aboutDetails = [
    {
      title: "Behind the Screen",
      icon: <Cpu className="w-5 h-5" />,
      content: "Pelajar SMA yang sedang mendalami front-end development. Fokus saya adalah membangun tampilan web yang bersih, rapi, dan fungsional melalui proses belajar yang konsisten."
    },
    {
      title: "Beyond the Code",
      icon: <Heart className="w-5 h-5" />,
      content: "Di luar coding, saya penikmat estetika visual. Mencari inspirasi dari desain minimalis dan komposisi warna untuk menjaga kreativitas tetap segar di setiap proyek."
    },
    {
      title: "Target Masa Depan",
      icon: <Target className="w-5 h-5" />,
      content: "Terus bereksplorasi dengan teknologi web terbaru untuk membangun platform yang solutif, fungsional, dan memberikan dampak positif bagi banyak orang."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Passionate Developer & Creative Thinker</h2>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kiri: Deskripsi Singkat */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Halo! Saya seorang siswa kelas 1 SMA yang sedang menantang diri untuk menguasai dunia pengembangan web. Meskipun masih pemula, saya percaya bahwa disiplin dan estetika adalah kunci utama dalam membangun karya digital yang berkualitas.
            </p>
            
            {/* Stats Kecil (Opsional) */}
            <div className="flex gap-8 border-t pt-6">
              <div>
                <span className="block text-2xl font-bold">10+</span>
                <span className="text-sm text-slate-500 underline decoration-blue-500">Proyek Belajar</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-blue-600 underline">Active</span>
                <span className="text-sm text-slate-500">Status Belajar</span>
              </div>
            </div>
          </div>

          {/* Kanan: Accordion Details */}
          <div className="space-y-4">
            {aboutDetails.map((item, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3 font-semibold text-slate-800">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
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