import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { ComponentType } from "react";
import {
  ArrowLeft,
  Bot,
  Box,
  Braces,
  CheckCircle2,
  Database,
  Figma,
  Github,
  MonitorCog,
  Palette,
  Plus,
  Code2,
  Atom,
  FileText,
  Hexagon,
  Layers3,
  Smartphone,
  ServerCog,
  SquareCode,
  TerminalSquare,
  Workflow,
  Wrench,
  Triangle,
  Sparkles,
  Zap,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageFooterBar from "@/components/PageFooterBar";

const overviewStats = [
  { value: "6", label: "Teknoloji Grubu" },
  { value: "25+", label: "Araç ve Kütüphane" },
  { value: "3", label: "Odak Alanı" },
];

const skillGroups = [
  {
    title: "Geliştirme Ortamı",
    count: 6,
    accent: "border-violet-500/40 bg-violet-500/10",
    icon: Bot,
    iconColor: "text-violet-300",
    description: "Üretkenliği artırmak, hızlı prototipleme yapmak ve geliştirme sürecini verimli yönetmek için kullandığım araçlar.",
    items: [
      { label: "Cursor", icon: TerminalSquare, color: "text-slate-100" },
      { label: "Windsurf", icon: Workflow, color: "text-sky-400" },
      { label: "Kiro", icon: MonitorCog, color: "text-violet-400" },
      { label: "OpenCode", icon: Code2, color: "text-emerald-400" },
      { label: "Z Code", icon: Box, color: "text-amber-400" },
      { label: "Antigravity", icon: Braces, color: "text-pink-400" },
    ],
    gridClass: "lg:grid-cols-6 md:grid-cols-3 grid-cols-2",
  },
  {
    title: "Veri Katmanı",
    count: 5,
    accent: "border-cyan-500/40 bg-cyan-500/10",
    icon: Database,
    iconColor: "text-cyan-300",
    description: "Veri modelleme, yönetim, sorgulama ve sistemler arası veri akışını düzenlemek için kullandığım altyapı araçları.",
    items: [
      { label: "PostgreSQL", icon: Database, color: "text-blue-400" },
      { label: "MongoDB", icon: Database, color: "text-green-400" },
      { label: "pgAdmin 4", icon: ServerCog, color: "text-sky-400" },
      { label: "MongoDB Compass", icon: Database, color: "text-emerald-400" },
      { label: "DBeaver", icon: Box, color: "text-orange-400" },
    ],
    gridClass: "lg:grid-cols-5 md:grid-cols-3 grid-cols-2",
  },
  {
    title: "İş Akışı ve Tasarım Araçları",
    count: 4,
    accent: "border-blue-500/40 bg-blue-500/10",
    icon: Wrench,
    iconColor: "text-blue-300",
    description: "Günlük geliştirme, versiyon kontrolü, API testleri ve tasarım süreçlerinde aktif olarak kullandığım temel araçlar.",
    items: [
      { label: "VS Code", icon: Code2, color: "text-sky-400" },
      { label: "GitHub", icon: Github, color: "text-violet-300" },
      { label: "Postman", icon: Plus, color: "text-orange-400" },
      { label: "Figma", icon: Figma, color: "text-pink-400" },
    ],
    gridClass: "lg:grid-cols-4 md:grid-cols-2 grid-cols-2",
  },
  {
    title: "Arayüz Geliştirme",
    count: 4,
    accent: "border-violet-500/40 bg-violet-500/10",
    icon: Palette,
    iconColor: "text-violet-300",
    description: "Responsive yapı, görsel tutarlılık ve kullanıcı deneyimi odaklı arayüzler oluşturmak için kullandığım teknolojiler.",
    items: [
      { label: "HTML", icon: SquareCode, color: "text-orange-500" },
      { label: "CSS", icon: Braces, color: "text-sky-400" },
      { label: "Sass", icon: Palette, color: "text-pink-400" },
      { label: "Bootstrap", icon: Box, color: "text-purple-400" },
    ],
    gridClass: "lg:grid-cols-4 md:grid-cols-2 grid-cols-2",
  },
  {
    title: "Sunucu Tarafı",
    count: 4,
    accent: "border-emerald-500/40 bg-emerald-500/10",
    icon: ServerCog,
    iconColor: "text-emerald-300",
    description: "API geliştirme, iş mantığı yönetimi ve veritabanı entegrasyonu için üzerinde çalıştığım sunucu tarafı katmanı.",
    items: [
      { label: "Node.js", icon: Hexagon, color: "text-green-400" },
      { label: "Express", icon: Code2, color: "text-slate-300" },
      { label: "NestJS", icon: Box, color: "text-rose-500" },
      { label: "Prisma", icon: Triangle, color: "text-indigo-400" },
    ],
    gridClass: "lg:grid-cols-4 md:grid-cols-2 grid-cols-2",
  },
  {
    title: "Temel Teknolojiler",
    count: 6,
    accent: "border-amber-500/40 bg-amber-500/10",
    icon: Layers3,
    iconColor: "text-amber-300",
    description: "Projelerde ana iskeleti oluşturan diller, kütüphaneler ve state yönetimi çözümleri.",
    items: [
      { label: "JavaScript", icon: SquareCode, color: "text-yellow-400" },
      { label: "TypeScript", icon: Braces, color: "text-blue-400" },
      { label: "React", icon: Atom, color: "text-cyan-400" },
      { label: "React Native", icon: Smartphone, color: "text-sky-300" },
      { label: "Zustand", icon: Layers3, color: "text-violet-400" },
      { label: "Hook Form", icon: FileText, color: "text-pink-400" },
    ],
    gridClass: "lg:grid-cols-6 md:grid-cols-3 grid-cols-2",
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
  whileInView: {
    transition: { staggerChildren: 0.08 },
  },
  viewport: { once: true, margin: "-60px" },
};

const scaleUp = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

type SkillIcon = ComponentType<{ className?: string }>;

const SkillTile = ({ label, icon: Icon, color, index }: { label: string; icon: SkillIcon; color: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e2636] to-[#1a2230] px-3 py-5 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:border-white/25 hover:shadow-xl hover:shadow-violet-500/10"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-500/5 group-hover:via-violet-500/3 group-hover:to-cyan-500/5 group-hover:opacity-100" />
    <motion.span 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: index * 0.05 + 0.2, type: "spring", stiffness: 500 }}
      className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
    >
      <CheckCircle2 className="h-3 w-3" />
    </motion.span>
    <div className="relative flex h-full min-h-[80px] flex-col items-center justify-center gap-2">
      <motion.div 
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 ${color}`}
      >
        <Icon className="h-4 w-4" />
      </motion.div>
      <span className="text-[11px] font-medium text-slate-300">{label}</span>
    </div>
  </motion.div>
);

const SkillGroupCard = ({ group, index }: { group: typeof skillGroups[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const GroupIcon = group.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/80 via-surface/60 to-surface/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${group.accent} shadow-lg shadow-violet-500/10`}
          >
            <GroupIcon className={`h-5 w-5 ${group.iconColor}`} />
          </motion.div>
          <div>
            <h2 className="text-base font-semibold md:text-lg">{group.title}</h2>
            <p className="text-xs text-muted">{group.count} teknoloji</p>
          </div>
        </div>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 0 : -90 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-4 max-w-3xl text-sm leading-6 text-slate-400">{group.description}</p>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className={`grid gap-2 md:gap-3 ${group.gridClass}`}
            >
              {group.items.map((item, itemIndex) => (
                <SkillTile key={item.label} label={item.label} icon={item.icon} color={item.color} index={itemIndex} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="mx-auto max-w-[1280px] px-4 pb-16 pt-20 sm:pt-24 sm:px-6 md:pt-28 md:px-10 lg:px-16">
        <motion.section {...fadeIn} className="mb-12 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-violet-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Yetenek Ağacı
          </motion.div>
          <h1 className="text-4xl font-display italic md:text-5xl lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Skills
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-muted md:text-base"
          >
            Geliştirme sürecimde kullandığım araçlar, framework'ler ve teknik odak alanlarımı özetleyen profesyonel bir görünüm.
          </motion.p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/80 to-surface/60 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {overviewStats.map((stat, index) => (
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
                    <Zap className="h-5 w-5 text-violet-400" />
                  </motion.div>
                  <div className="text-3xl font-bold text-slate-100">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="space-y-6">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.title} group={group} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
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

export default Skills;
