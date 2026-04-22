import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  MapPin,
  PhoneCall,
  Rocket,
  Trophy,
  Sparkles,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import PageFooterBar from "@/components/PageFooterBar";

const stats = [
  { value: "4", label: "Pozisyon", color: "text-blue-400" },
  { value: "6+", label: "Yıl", color: "text-violet-400" },
  { value: "10+", label: "Yetenek", color: "text-pink-400" },
];

const timelineItems = [
  {
    id: 1,
    title: "Fullstack Developer",
    company: "OnlyJS Akademi",
    meta: ["2025 - 2026", "Uzaktan"],
    summary: "Modern web uygulamaları geliştirme",
    description:
      "Modern web uygulamaları geliştirdim. React ve TypeScript ile büyük ölçekli projeler yönettim.",
    icon: Building2,
    iconBg: "bg-violet-500",
    border: "border-violet-500/30",
    accent: "from-violet-500/20 to-transparent",
    skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    achievements: ["5+ proje tamamlandı", "Performans iyileştirmeleri", "Reusable component sistemi"],
    expanded: true,
  },
  {
    id: 2,
    title: "Çağrı Merkezi Asistanı",
    company: "Sağlık Bakanlığı",
    meta: ["2020 - 2026", "Türkiye"],
    summary: "Hasta randevu sistemi desteği",
    description: "Hasta randevu süreci ve operasyonel destek süreçlerinde görev aldım.",
    icon: PhoneCall,
    iconBg: "bg-emerald-500",
    border: "border-emerald-500/30",
    accent: "from-emerald-500/20 to-transparent",
    skills: ["İletişim", "Operasyon", "Destek"],
    achievements: ["Yoğun çağrı yönetimi", "Kullanıcı memnuniyeti"],
    expanded: false,
  },
  {
    id: 3,
    title: "Müşteri Temsilcisi",
    company: "Akbank",
    meta: ["2019 - 2020", "İstanbul"],
    summary: "Bankacılık müşteri hizmetleri",
    description: "Müşteri taleplerini çözüme kavuşturma ve finansal işlemler konusunda destek sağladım.",
    icon: Trophy,
    iconBg: "bg-amber-500",
    border: "border-amber-500/30",
    accent: "from-amber-500/20 to-transparent",
    skills: ["Müşteri İlişkileri", "Problem Çözme", "Takım Çalışması"],
    achievements: ["Hızlı çözüm oranı", "İş süreçlerinde disiplin"],
    expanded: false,
  },
  {
    id: 4,
    title: "İşletme Yönetimi",
    company: "Anadolu Üniversitesi",
    meta: ["2014 - 2018", "Eskişehir"],
    summary: "Kurumsal yönetim ve iş süreçleri",
    description: "Yönetim, planlama ve iş süreçleri üzerine akademik altyapı kazandım.",
    icon: GraduationCap,
    iconBg: "bg-sky-500",
    border: "border-sky-500/30",
    accent: "from-sky-500/20 to-transparent",
    skills: ["Planlama", "Analiz", "Yönetim"],
    achievements: ["Akademik temel", "Kurumsal bakış açısı"],
    expanded: false,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-60px" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-40px" },
};

const timelineItemVariant = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const Timeline = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="mx-auto max-w-[1120px] px-4 pb-16 pt-20 sm:pt-24 sm:px-6 md:pt-28 md:px-10 lg:px-16">
        <motion.section {...fadeIn} className="text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-violet-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Kariyer Yolculuğum
          </motion.div>
          <h1 className="text-4xl font-display italic md:text-5xl lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Timeline
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-muted md:text-base"
          >
            Profesyonel gelişimim, deneyimlerim ve yol boyunca kazandığım yetenekler.
          </motion.p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/80 to-surface/60 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-6"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1b2234] to-[#161d2d] px-4 py-5 text-center shadow-lg shadow-black/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-500/10 group-hover:to-cyan-500/5 group-hover:opacity-100" />
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                    className="mb-2 flex justify-center"
                  >
                    {index === 0 ? <Target className="h-5 w-5 text-blue-400" /> : 
                     index === 1 ? <TrendingUp className="h-5 w-5 text-violet-400" /> : 
                     <Zap className="h-5 w-5 text-pink-400" />}
                  </motion.div>
                  <div className={`text-3xl font-bold md:text-4xl ${stat.color}`}>{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="mt-10 space-y-6">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline dot with glow */}
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-0 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 border-bg shadow-lg shadow-violet-500/20 ${item.iconBg}`} 
                />
                
                {/* Animated timeline line */}
                {index !== timelineItems.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="absolute left-[9px] top-10 w-0.5 bg-gradient-to-b from-white/20 via-violet-500/30 to-transparent" 
                  />
                )}

                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`overflow-hidden rounded-[28px] border ${item.border} bg-gradient-to-br from-[#151c2d] via-[#1a2335] to-[#151c2d] shadow-[0_20px_80px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_25px_100px_rgba(0,0,0,0.4)]`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? -1 : item.id)}
                    className="group flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconBg} text-white shadow-lg shadow-violet-500/20`}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <div className="flex-1">
                        <h2 className="text-base font-semibold md:text-lg">{item.title}</h2>
                        <div className="mt-0.5 text-sm text-muted">{item.company}</div>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1">
                            <CalendarDays className="h-3 w-3" />
                            {item.meta[0]}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1">
                            <MapPin className="h-3 w-3" />
                            {item.meta[1]}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-slate-400">{item.summary}</p>
                      </div>
                    </div>
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200"
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <CardContent className="relative border-t border-white/10 p-5 md:p-6">
                          <div className={`absolute inset-x-0 top-0 h-16 bg-gradient-to-b ${item.accent} opacity-50`} />
                          <div className="relative">
                            <p className="text-sm leading-7 text-slate-300 md:text-[15px]">{item.description}</p>

                            <div className="mt-5">
                              <h3 className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                                <Zap className="h-3.5 w-3.5 text-violet-400" />
                                Yetenekler
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, skillIndex) => (
                                  <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: skillIndex * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200 transition-colors hover:bg-violet-500/20"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-5">
                              <h3 className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                                <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
                                Başarılar
                              </h3>
                              <ul className="space-y-2">
                                {item.achievements.map((achievement, achievementIndex) => (
                                  <motion.li 
                                    key={achievement} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: achievementIndex * 0.1 }}
                                    className="flex items-start gap-2 text-sm text-slate-300"
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                    <span>{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/80 via-surface/60 to-surface/80 p-6 text-center shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-violet-500/20 text-pink-400"
            >
              <Rocket className="h-5 w-5" />
            </motion.div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              Gelecek hedefi
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Deneyimlerimi teknik üretkenlikle birleştirerek daha ölçeklenebilir, daha hızlı ve daha iyi kullanıcı deneyimi sunan projeler üretmeye devam ediyorum.
            </p>
          </div>
        </motion.section>

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

export default Timeline;
