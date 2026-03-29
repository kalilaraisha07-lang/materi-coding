import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish } from 'lucide-react'; 

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          {/* Ikon Ikan Biru */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-20 relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-20 rounded-full animate-pulse" />
            
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center border border-white/5 shadow-[0_0_80px_rgba(59,130,246,0.1)] relative z-10">
              <motion.div
                animate={{ 
                  y: [0, -12, 0], 
                  rotate: [0, -5, 5, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Fish className="w-24 h-24 md:w-28 md:h-28 text-blue-400 opacity-90 rotate-12" />
              </motion.div>
            </div>
          </motion.div>

          {/* Quotes Cinta & Loading Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="px-6 text-center max-w-3xl space-y-8"
          >
            {/* QUOTES DENGAN UNSUR CINTA */}
            <p className="text-sm md:text-lg font-medium italic text-slate-300 leading-relaxed tracking-[0.1em] font-serif mx-auto max-w-2xl px-4">
              " Seperti ikan yang tak bisa hidup tanpa samudera, biarlah cinta menjadi arus yang membawamu pulang sejauh apapun kamu berkelana. "
            </p>
            
            <div className="w-40 h-[1px] bg-white/10 mx-auto overflow-hidden rounded-full">
              <motion.div 
                className="h-full bg-blue-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}