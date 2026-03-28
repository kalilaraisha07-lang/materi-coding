import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Rocket, IceCream, ChevronDown } from 'lucide-react';

// Data untuk isi Accordion (bisa kamu ubah tulisannya)
const aboutDetails = [
  {
    title: "Visi & Misi",
    content: "Menciptakan karya digital yang estetik dan bermanfaat. Saya percaya bahwa belajar hal baru setiap hari adalah kunci untuk terus berkembang di dunia teknologi."
  },
  {
    title: "Hobi & Ketertarikan",
    content: "Selain coding, saya sangat menikmati eksplorasi desain visual dan mencoba berbagai jenis es krim baru sebagai mood booster saat buntu mencari ide."
  },
  {
    title: "Target Masa Depan",
    content: "Ingin menguasai lebih banyak teknologi web modern dan membangun platform yang bisa membantu banyak orang dalam mempermudah pekerjaan mereka."
  }
];

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Statistik dengan 4 Ikon (Termasuk Ice Cream & Rocket)
  const stats = [
    { icon: Code2, value: '10+', label: 'Mini Projects' },
    { icon: Video, value: 'Active', label: 'Learning' },
    { icon: IceCream, value: '∞', label: 'Mood Booster' },
    { icon: Rocket, value: '2026', label: 'Tahun Meluncur' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-wider text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Mengenal Lebih Dekat</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Bagian Kiri: Visual & Stats */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Box Foto/Emoji */}
              <div className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                   {/* Ganti 👨‍💻 di bawah ini dengan <img src="/foto-profil.jpg" ... /> jika ingin pakai foto */}
                  <span className="text-9xl filter drop-shadow-xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-xl border border-white/40"
              >
                <p className="font-display font-extrabold text-3xl text-primary">Ready</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase">To Explore</p>
              </motion.div>
            </motion.div>

            {/* Grid 4 Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-5 glass rounded-2xl text-center border border-white/10 hover:border-primary/30 transition-all"
                >
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-display text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bagian Kanan: Teks & Accordion */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-6">
                Passionate Developer <br />
                <span className="text-primary">&amp; Creative Thinker</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Halo! Saya Khalila Raisha. Saya baru saja memulai perjalanan di dunia pemrograman. 
                Fokus utama saya adalah membangun tampilan website yang bersih, modern, dan enak dilihat.
              </p>

              {/* Accordion System */}
              <div className="space-y-2">
                {aboutDetails.map((detail, idx) => (
                  <div key={idx} className="border-b border-white/10">
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors"
                    >
                      <span className="font-display font-bold text-lg">{detail.title}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-muted-foreground leading-relaxed">
                            {detail.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}