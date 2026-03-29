import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100, 'Nama terlalu panjang'),
  email: z.string().trim().email('Email tidak valid').max(255, 'Email terlalu panjang'),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200, 'Subjek terlalu panjang'),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000, 'Pesan terlalu panjang'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kalilaraisha07@gmail.com', // GANTI DENGAN EMAIL KAMU
    href: 'mailto:kalilaraisha07@gmail.com',
    color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 822 7668 2285', // GANTI DENGAN NOMOR KAMU
    href: 'tel:+6282276682285',
    color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Aceh, Indonesia',
    href: '#',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Pesan Terkirim! ✨',
        description: 'Terima kasih telah menghubungi saya. Saya akan membalas secepatnya.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Achievements Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Kontak
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display italic">
            Hubungi Saya
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Bagian Kiri: Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                Mari Berkolaborasi!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Mari wujudkan ide kreatif menjadi kenyataan! Apakah itu proyek baru atau sekedar
                diskusi santai, jangan ragu untuk menghubungi saya. saya siap berkolaborasi dalam
                perjalan visi anda selanjutnya.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 p-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner transition-transform group-hover:scale-110 ${info.color}`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{info.label}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bagian Kanan: Formulir Pesan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] border border-white dark:border-slate-800 shadow-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1">Nama</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className="rounded-2xl border-slate-200 dark:border-slate-800 focus:ring-pink-500 bg-transparent text-slate-900 dark:text-white"
                  />
                  {errors.name && <p className="text-xs text-red-500 font-bold italic ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="rounded-2xl border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white"
                  />
                  {errors.email && <p className="text-xs text-red-500 font-bold italic ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1">Subjek</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subjek pesan"
                  className="rounded-2xl border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white"
                />
                {errors.subject && <p className="text-xs text-red-500 font-bold italic ml-1">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1">Pesan</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan Anda..."
                  rows={4}
                  className="rounded-3xl border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white resize-none"
                />
                {errors.message && <p className="text-xs text-red-500 font-bold italic ml-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-black shadow-lg shadow-pink-500/20 transition-all active:scale-95 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}