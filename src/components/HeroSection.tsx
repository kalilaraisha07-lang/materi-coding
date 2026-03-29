import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kalilaraisha07-lang', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/khalilaraisha_/', label: 'Instagram' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />

      {/* Container utama: gap-20 untuk menggeser teks lebih jauh ke kanan dari foto */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        
        {/* 📸 FOTO PROFIL (Diperbesar) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          {/* Ukuran ditingkatkan: w-64/h-64 (mobile) dan w-[350px]/h-[350px] (desktop) */}
          <div className="w-64 h-64 md:w-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-blue-300 dark:border-blue-400 shadow-2xl bg-white/10 backdrop-blur-sm">
            <img
              src="/foto-profil.jpg"
              alt="Khalila Raisha"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* 📝 KONTEN TEKS (Tergeser ke kanan karena gap) */}
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
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight"
          >
            khalila raisha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
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

          {/* Perbaikan Social Links: Menggunakan tanda kurung ( ) agar ter-render */}
          <div className="flex items-center justify-center lg:justify-start gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-foreground" />
              </motion.a>
            ))}
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