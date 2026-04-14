import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  AtSign,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Paperclip,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Zap,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageFooterBar from "@/components/PageFooterBar";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-60px" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true },
};

const socialLinks = [
  {
    name: "GitHub",
    handle: "@enesakmehmet",
    url: "https://github.com/enesakmehmet",
    icon: Github,
    accent: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/15 text-violet-300",
  },
  {
    name: "LinkedIn",
    handle: "Enes Akmehmet",
    url: "https://www.linkedin.com/in/enes-akmehmet-a061bb206/?skipRedirect=true",
    icon: Linkedin,
    accent: "from-sky-500/20 to-sky-500/5",
    iconBg: "bg-sky-500/15 text-sky-300",
  },
  {
    name: "Instagram",
    handle: "@enesakmehmt",
    url: "https://www.instagram.com/enesakmehmt/",
    icon: Instagram,
    accent: "from-pink-500/20 to-pink-500/5",
    iconBg: "bg-pink-500/15 text-pink-300",
  },
];

const infoItems = [
  { label: "E-posta", value: "enesakmehmet@gmail.com", icon: Mail },
  { label: "Konum", value: "Türkiye", icon: MapPin },
  { label: "Yanıt Süresi", value: "24 saat içinde", icon: ShieldCheck },
];

const SocialCard = ({ social, index, isLast }: { social: typeof socialLinks[0]; index: number; isLast: boolean }) => {
  const Icon = social.icon;
  const [isHovered, setIsHovered] = useState(false);

  const accentColors: Record<string, { dot: string; line: string; bg: string; text: string; glow: string }> = {
    GitHub: { dot: "bg-violet-500", line: "from-violet-500/50", bg: "bg-violet-500/10", text: "text-violet-300", glow: "shadow-violet-500/30" },
    LinkedIn: { dot: "bg-sky-500", line: "from-sky-500/50", bg: "bg-sky-500/10", text: "text-sky-300", glow: "shadow-sky-500/30" },
    Instagram: { dot: "bg-pink-500", line: "from-pink-500/50", bg: "bg-pink-500/10", text: "text-pink-300", glow: "shadow-pink-500/30" },
  };
  const colors = accentColors[social.name];

  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 400 }}
        className={`absolute left-0 top-5 z-10 h-4 w-4 rounded-full border-2 border-bg ${colors.dot} shadow-lg ${colors.glow}`}
      />
      
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className={`absolute left-[7px] top-9 w-0.5 bg-gradient-to-b ${colors.line} to-transparent`}
        />
      )}

      <motion.a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ x: 4, transition: { duration: 0.2 } }}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1b2234] to-[#161d2d] p-4 transition-all duration-300 hover:border-white/20 hover:shadow-xl"
      >
        {/* Hover gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ 
            background: `linear-gradient(135deg, ${social.name === 'GitHub' ? 'rgba(139,92,246,0.08)' : social.name === 'LinkedIn' ? 'rgba(56,189,248,0.08)' : 'rgba(236,72,153,0.08)'}, transparent)` 
          }}
        />
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              animate={isHovered ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text} shadow-lg ${colors.glow}`}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
            <div>
              <div className="font-semibold text-slate-100">{social.name}</div>
              <div className="text-sm text-slate-400">{social.handle}</div>
            </div>
          </div>
          
          <motion.div
            animate={isHovered ? { x: 3, y: -3, scale: 1.1 } : { x: 0, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10 ${colors.text}`}
          >
            <ExternalLink className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.a>
    </div>
  );
};

const Messages = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="mx-auto max-w-[1180px] px-6 pb-16 pt-28 md:px-10 lg:px-16">
        <motion.section {...fadeIn} className="text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-violet-300"
          >
            <MessageSquareText className="h-3.5 w-3.5" />
            İletişim
          </motion.div>
          <h1 className="text-4xl font-display italic md:text-5xl lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              İletişime Geç
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-muted md:text-base"
          >
            Proje, işbirliği veya herhangi bir soru için benimle iletişime geçebilirsin.
          </motion.p>
        </motion.section>

        <div className="mt-12 grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="space-y-6">
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/80 to-surface/60 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200 shadow-lg shadow-violet-500/20"
                >
                  <Mail className="h-5 w-5" />
                </motion.div>
                <h2 className="text-lg font-semibold md:text-xl">Sosyal Medya</h2>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <SocialCard key={social.name} social={social} index={index} isLast={index === socialLinks.length - 1} />
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/80 to-surface/60 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200 shadow-lg shadow-emerald-500/20"
                >
                  <Globe2 className="h-5 w-5" />
                </motion.div>
                <h2 className="text-lg font-semibold md:text-xl">Bilgiler</h2>
              </div>

              <div className="space-y-3">
                {infoItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1b2234] to-[#161d2d] px-4 py-4 transition-all duration-300 hover:border-white/15"
                    >
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-slate-300 transition-colors group-hover:text-slate-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-100">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/80 via-surface/60 to-surface/80 p-6 shadow-[0_22px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-8"
          >
            {/* Animated background blobs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" 
            />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200 shadow-lg shadow-blue-500/20"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
                <h2 className="text-lg font-semibold md:text-xl">Mesaj Gönder</h2>
              </div>

              <form className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="mb-2 block text-sm font-medium text-slate-200">Ad Soyad</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Adınızı girin"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`h-12 w-full rounded-xl border bg-gradient-to-br from-[#1b2234] to-[#161d2d] pl-11 pr-4 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 ${
                        focusedField === 'name' 
                          ? 'border-violet-400/50 shadow-lg shadow-violet-500/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="mb-2 block text-sm font-medium text-slate-200">E-posta</label>
                  <div className="relative">
                    <AtSign className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      placeholder="ornek@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`h-12 w-full rounded-xl border bg-gradient-to-br from-[#1b2234] to-[#161d2d] pl-11 pr-4 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 ${
                        focusedField === 'email' 
                          ? 'border-violet-400/50 shadow-lg shadow-violet-500/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="mb-2 block text-sm font-medium text-slate-200">Konu <span className="text-slate-400">(İsteğe bağlı)</span></label>
                  <div className="relative">
                    <Paperclip className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Mesajınızın konusu"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`h-12 w-full rounded-xl border bg-gradient-to-br from-[#1b2234] to-[#161d2d] pl-11 pr-4 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 ${
                        focusedField === 'subject' 
                          ? 'border-violet-400/50 shadow-lg shadow-violet-500/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="mb-2 block text-sm font-medium text-slate-200">Mesaj</label>
                  <div className="relative">
                    <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-400" />
                    <textarea
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-xl border bg-gradient-to-br from-[#1b2234] to-[#161d2d] py-4 pl-11 pr-4 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 ${
                        focusedField === 'message' 
                          ? 'border-violet-400/50 shadow-lg shadow-violet-500/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(79,70,229,0.35)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(79,70,229,0.5)]"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -2 }}
                    className="flex items-center gap-2"
                  >
                    Mesaj Gönder
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </motion.button>
              </form>

            </div>
          </motion.section>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-surface/80 to-surface/60 px-6 py-3 text-sm text-text-primary shadow-lg shadow-black/20 transition-all duration-300 hover:border-violet-500/30 hover:shadow-violet-500/10"
          >
            <motion.span
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft className="h-4 w-4" />
            </motion.span>
            Ana sayfaya dön
          </Link>
        </motion.div>
      </main>

      <PageFooterBar />
    </div>
  );
};

export default Messages;
