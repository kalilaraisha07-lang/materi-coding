import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

// ✅ PERBAIKAN 1: Hapus import profilePic yang lama karena foldernya tidak ada
// Sebagai gantinya, kita pakai link gambar langsung di bawah.

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-center gap-10">
        {/* 📸 Foto di kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-300 dark:border-blue-400 shadow-lg bg-white/10 backdrop-blur-sm">
            {/* ✅ PERBAIKAN 2: Ganti {profilePic} menjadi link gambar avatar lucu */}
            <img
              src="/materi-coding/public/profil.jpg.jpeg"
              alt="Khalila Raisha"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* 📝 Konten teks di kanan */}
        <div className="max-w-2xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
          >
            khalila raisha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Baru saja memulai pelayaran di luasnya dunia pemrograman, berupaya
            menghadirkan solusi digital yang jernih dan bermanfaat bagi pengguna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-glow bg-primary text-primary-foreground hover:opacity-90 transition-all"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hubungi Saya
            </Button>
          </motion.div>

          <div className="flex items-center justify-center lg:justify-start gap-6">
            {[Github, Linkedin, Youtube, Instagram].map((Icon, idx) => {
              const labels = ['GitHub', 'LinkedIn', 'YouTube', 'Instagram'];
              return (
                <motion.a
                  key={labels[idx]}
                  href="#"
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={labels[idx]}
                >
                  <Icon className="h-5 w-5 text-foreground" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Arrow scroll */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}