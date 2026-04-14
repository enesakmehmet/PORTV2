import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  CalendarDays,
  Cpu,
  Gauge,
  MonitorSmartphone,
  ServerCog,
  Smartphone,
  Target,
  Layers3,
  Sparkles,
  Code2,
  Database,
  Braces,
  Palette,
  Atom,
  Github,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageFooterBar from "@/components/PageFooterBar";

const getTechIcon = (techName: string) => {
  const icons: Record<string, JSX.Element> = {
    "React Native": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    "React": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#339933">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.7l6.5 3.6-6.5 3.6-6.5-3.6L12 4.7zm-1 13.8l-5-2.8V9.2l5 2.8v6.5zm2 0l5-2.8V9.2l-5 2.8v6.5z"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#3178C6">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <path d="M12 18v-2.5h3.5V14H8.5v-2h9V9.5h-5V7H16V4.5h-3.5V7H8.5v5H6v2h2.5v4H12z" fill="white"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v6l5 3-5-9z"/>
      </svg>
    ),
    "Expo": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
        <path d="M4.175 8.914C6.064 5.68 7.008 4.063 8.107 3.624a3 3 0 0 1 2.358.006c1.09.44 2.02 2.05 3.88 5.27l.36.623c1.617 2.8 2.426 4.2 2.406 5.373a3 3 0 0 1-1.187 2.333c-.96.677-2.623.677-5.949.677H9.09c-3.326 0-4.989 0-5.949-.677A3 3 0 0 1 1.954 14.9c-.021-1.174.788-2.573 2.406-5.372l.359-.623C4.72 8.9" fill="none" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    "Prisma": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
        <path d="M4.282 17.717 10.434 2.23a.5.5 0 0 1 .896-.033l6.523 13.504a.5.5 0 0 1-.214.666l-13.054 6.64a.5.5 0 0 1-.678-.638l.375-4.652" fill="none" stroke="#5A67D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 2.5 7.5 17.5" stroke="#5A67D8" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
    "Express.js": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
        <text x="1" y="15" fontSize="9" fontWeight="bold" fill="white" fontFamily="monospace">ex</text>
      </svg>
    ),
    "WebSocket": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#FF6600" strokeWidth="1.5">
        <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2" strokeLinecap="round"/>
        <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10" strokeLinecap="round" strokeDasharray="3 2"/>
        <path d="M8 12h8M14 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "AI": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#a855f7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    "HTML5": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#E34F26">
        <path d="M2 3l1.8 16.2L12 22l8.2-2.8L22 3H2zm16.3 4.7l-.5 5.5-3.5 1-3.5-1-.2-2.2h1.7l.1.8 1.9.5 1.9-.5.2-2H7.3l-.4-4h10.4z"/>
      </svg>
    ),
    "CSS3": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#1572B6">
        <path d="M2 3l1.8 16.2L12 22l8.2-2.8L22 3H2zm16.3 4.7l-.2 2.2H7.8l.2 2.2h10.1l-.5 5.5-3.5 1-3.5-1-.2-2.2h-1.7l.3 3.3L12 20l4.5-1.3.6-6.3H7.2l-.4-4h10.5z"/>
      </svg>
    ),
    "JavaScript": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#F7DF1E">
        <rect width="24" height="24" rx="2"/>
        <text x="4" y="17" fontSize="12" fontWeight="bold" fill="#000">JS</text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#06B6D4">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z"/>
      </svg>
    ),
  };
  return icons[techName] ?? <Sparkles className="h-3 w-3 text-cyan-300" />;
};

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-80px" },
};

const skillFilters = [
  {
    id: "all",
    label: "Tümü",
    glow: "rgba(139,92,246,0.35)",
    ring: "#8b5cf6",
    activeBg: "linear-gradient(135deg,#7c3aed,#6d28d9)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#a78bfa"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#a78bfa" opacity="0.7"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#a78bfa" opacity="0.7"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#a78bfa" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: "HTML5",
    label: "HTML5",
    glow: "rgba(234,88,12,0.35)",
    ring: "#ea580c",
    activeBg: "linear-gradient(135deg,#ea580c,#c2410c)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" fill="#e34f26"/>
        <path d="M12 19.5l5.2-1.4 1.3-14.1H12v15.5z" fill="#ef652a"/>
        <path d="M12 13h-2.6l-.2-2.5H12V8H7.2l.6 6.5H12v-1.5zm0 3.5l-.04.01-2.18-.59-.14-1.55H7.4l.27 3.08L12 19v-2z" fill="white"/>
        <path d="M12 13v1.5h2.4l-.23 2.42-2.17.59V19l4.01-1.11.03-.37.46-5.02.05-.5H12zm0-5v2.5h4.6l.04-.5.1-1.5.05-.5H12z" fill="#ebebeb"/>
      </svg>
    ),
  },
  {
    id: "CSS3",
    label: "CSS3",
    glow: "rgba(37,99,235,0.35)",
    ring: "#2563eb",
    activeBg: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" fill="#264de4"/>
        <path d="M12 19.5l5.2-1.4 1.3-14.1H12v15.5z" fill="#2965f1"/>
        <path d="M12 13.5H9.6l-.17-1.95H12V9.5H7.2l.14 1.5h3.16l.17 2h1.33V13.5zm0 3.5l-.04.01-2.18-.59-.14-1.55H7.4l.27 3.08L12 19v-2z" fill="white"/>
        <path d="M12 13.5v1.52l2.17.59.14-1.61H12V9.5h4.6l-.14 1.5h-3.26l.17 2H16.8l-.46 4.89L12 19v-2l2.17-.59.17-2H12z" fill="#ebebeb"/>
      </svg>
    ),
  },
  {
    id: "JavaScript",
    label: "JavaScript",
    glow: "rgba(234,179,8,0.35)",
    ring: "#eab308",
    activeBg: "linear-gradient(135deg,#ca8a04,#a16207)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <rect width="24" height="24" rx="2" fill="#f7df1e"/>
        <text x="4" y="17" fontSize="11" fontWeight="bold" fill="#000" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    id: "TypeScript",
    label: "TypeScript",
    glow: "rgba(49,120,198,0.35)",
    ring: "#3178c6",
    activeBg: "linear-gradient(135deg,#3178c6,#2563a8)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <rect width="24" height="24" rx="2" fill="#3178c6"/>
        <text x="3.5" y="17" fontSize="10.5" fontWeight="bold" fill="#fff" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    id: "React",
    label: "React",
    glow: "rgba(6,182,212,0.35)",
    ring: "#06b6d4",
    activeBg: "linear-gradient(135deg,#0891b2,#0e7490)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    id: "React Native",
    label: "React Native",
    glow: "rgba(6,182,212,0.30)",
    ring: "#06b6d4",
    activeBg: "linear-gradient(135deg,#0f4c75,#1b6ca8)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
        <rect x="18" y="15" width="5" height="5" rx="1" fill="#0f4c75"/>
        <text x="18.5" y="19.5" fontSize="4" fontWeight="bold" fill="#61DAFB" fontFamily="monospace">RN</text>
      </svg>
    ),
  },
];

const projectTags = ["#mobil", "#react-native", "#full-stack", "#ios", "#android", "#nodejs", "#postgresql"];

const toolRows = [
  {
    title: "İşlemci Karşılaştır",
    subtitle: "AMD vs Intel performans analizi",
    icon: Cpu,
    tone: "bg-[#18bfb3]",
  },
  {
    title: "Ekran Kartı Karşılaştır",
    subtitle: "FPS ve benchmark skorları",
    icon: Gauge,
    tone: "bg-[#6baa00]",
  },
];

const projectCards = [
  {
    title: "Donanım Kıyasla",
    date: "01.11.2024",
    subtitle: "Mobil Uygulama & Yönetim Paneli",
    description:
      "iOS ve Android için full-stack mobil uygulama. CPU/GPU kıyaslama, darboğaz analizi, PC Builder ve sistem tavsiyesi özellikleri.",
    tech: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js"],
    tags: ["#mobil", "#react-native", "#full-stack", "#ios", "#android", "#nodejs", "#postgresql"],
    variant: "hardware",
    cta: [
      { label: "App Store", tone: "bg-[#356bff] text-white", href: "https://apps.apple.com/us/app/donanım-kıyasla/id6756779775" },
      { label: "Google Play", tone: "bg-[#20b04a] text-white", href: "https://play.google.com/store/apps/details?id=com.enes.donanimkiyasla&hl=tr" },
    ],
    hoverDescription:
      "iOS ve Android için full-stack mobil uygulama. CPU/GPU kıyaslama, darboğaz analizi, PC Builder ve sistem tavsiyesi özellikleri. React Native (Expo) ile mobil uygulama, Node.js/Express backend ve React.js admin paneli. PostgreSQL veritabanı, push bildirim sistemi ve AdMob reklam entegrasyonu.",
  },
  {
    title: "Ehliyet Al 2026",
    date: "15.05.2024",
    subtitle: "Sürücü Adayları Sınav Uygulaması",
    description:
      "Sürücü adayları için geliştirilmiş full-stack sınav hazırlık uygulaması. Deneme sınavları, konu anlatımları, kişiselleştirilmiş istatistik takibi ve günlük hedefler.",
    tech: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js"],
    tags: ["#mobile", "#react-native", "#full-stack", "#ios", "#android", "#nodejs", "#postgresql", "#education"],
    variant: "ehliyet",
    cta: [
      { label: "App Store", tone: "bg-[#356bff] text-white", href: "https://apps.apple.com/us/app/ehliyet-al-2026/id6757499824" },
      { label: "Google Play", tone: "bg-[#20b04a] text-white", href: "https://play.google.com/store/apps/details?id=com.enesakmehmet.ehliyetal2026" },
    ],
    hoverDescription:
      "Sürücü adayları için geliştirilmiş React Native ve Node.js tabanlı full-stack sınav hazırlık uygulaması. İçerisinde deneme sınavları, konu anlatımları, kişiselleştirilmiş istatistik takibi ve günlük hedefler barındırır. PostgreSQL ve Prisma kullanılarak sağlam bir veri mimarisi üzerine inşa edilmiştir. AdMob reklam entegrasyonu ve Telegram bot destekli bildirim sistemi ile ticari bir ürün niteliği taşır.",
  },
  {
    title: "AltınPusula",
    date: "20.02.2024",
    subtitle: "Finans & Portföy Yönetimi",
    description:
      "Kişisel geliştirdiğim React Native ve Node.js tabanlı full-stack mobil finans ve portföy yönetim uygulaması. Canlı altın, döviz ve gümüş fiyat takibi.",
    tech: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js", "WebSocket"],
    tags: ["#mobile", "#react-native", "#full-stack", "#finance", "#ios", "#android", "#nodejs", "#postgresql", "#websocket"],
    variant: "altinpusula",
    cta: [
      { label: "App Store", tone: "bg-[#356bff] text-white", href: "#" },
      { label: "Google Play", tone: "bg-[#20b04a] text-white", href: "#" },
    ],
    hoverDescription:
      "Kişisel geliştirdiğim React Native ve Node.js tabanlı full-stack mobil finans ve portföy yönetim uygulamasıdır. İçerisinde canlı altın, döviz ve gümüş fiyat takibi; kullanıcıların alım-satım kayıtlarını tutabildiği kâr/zarar analizli portföy yönetimi ve kişiselleştirilebilir fiyat alarm sistemleri barındırır. Veri bütünlüğü PostgreSQL ve Prisma kullanılarak kurgulanmış, eş zamanlı fiyat güncellemeleri için WebSocket mimarisi entegre edilmiştir. Google AdMob reklam desteği, Expo push bildirim sistemi ve Node-cron tabanlı otomatik günlük piyasa özetleri ile ticari bir ürün niteliği taşır. React (Vite) tabanlı kapsamlı admin paneli aracılığıyla API kaynak yönetimi, anlık trafik takibi, sistem sağlık analizleri ve bildirim zamanlamaları merkezi olarak kontrol edilebilmektedir.",
  },
  {
    title: "FalBaz",
    date: "10.04.2026",
    subtitle: "AI Destekli Fal Uygulaması",
    description:
      "Kişisel geliştirdiğim, React Native ve Node.js tabanlı full-stack mobil fal uygulamasıdır. İçerisinde kahve falı, el falı ve tarot okuma türleri; Groq, Gemini ve Deepseek entegrasyonuyla yapay zeka destekli yorum üretimi ve günlük ücretsiz kota sistemi barındırır.",
    tech: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js", "AI"],
    tags: ["#mobile", "#react-native", "#full-stack", "#ai", "#ios", "#android", "#nodejs", "#postgresql", "#fal"],
    variant: "falbaz",
    cta: [
      { label: "App Store", tone: "bg-[#356bff] text-white", href: "#" },
      { label: "Google Play", tone: "bg-[#20b04a] text-white", href: "#" },
    ],
    hoverDescription:
      "Kişisel geliştirdiğim, React Native ve Node.js tabanlı full-stack mobil fal uygulamasıdır. İçerisinde kahve falı, el falı ve tarot okuma türleri; Groq, Gemini ve Deepseek entegrasyonuyla yapay zeka destekli yorum üretimi ve günlük ücretsiz kota sistemi barındırır. PostgreSQL ve Prisma kullanılarak sağlam bir veri mimarisi üzerine inşa edilmiştir. Google ile giriş, AdMob reklam entegrasyonu, Expo push bildirim sistemi ve Telegram bot destekli admin bildirimleri ile ticari bir ürün niteliği taşır. React (Vite) tabanlı admin paneli aracılığıyla kullanıcı yönetimi, fal havuzu düzenleme ve yapay zeka ayarları merkezi olarak kontrol edilebilmektedir.",
  },
  {
    title: "CryptoTrade Exchange",
    date: "15.01.2024",
    subtitle: "Kripto Para Takip Platformu",
    description:
      "Modern kripto para alım satım platformu. Gerçek zamanlı fiyat takibi ve güvenli işlem özellikleri. React, TypeScript ve Tailwind CSS ile optimal performans için tasarlandı.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    tags: ["#react", "#typescript", "#tailwind", "#crypto"],
    variant: "cryptotrade",
    cta: [{ label: "GitHub", tone: "bg-[#f5f5f5] text-[#0f172a]" }],
    hoverDescription:
      "Modern kripto para takip platformu. Gerçek zamanlı fiyat takibi, detaylı analiz araçları, portföy yönetimi ve haberler bölümü. CoinGecko API entegrasyonu, favori coinler listesi ve otomatik fiyat güncellemeleri. React ve TypeScript ile geliştirilmiş, Tailwind CSS ile responsive tasarım.",
  },
  {
    title: "Game Key Store",
    date: "20.02.2024",
    subtitle: "Dijital Oyun Pazaryeri",
    description:
      "Modern oyun key pazaryeri platformu. Dijital oyun keylerini güvenli işlemlerle alıp satın. HTML, CSS ve JavaScript ile hızlı ve responsive kullanıcı deneyimi için geliştirildi.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["#game", "#marketplace", "#ecommerce", "#keys"],
    variant: "store",
    cta: [
      { label: "Canlı Demo", tone: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white", href: "#" },
      { label: "GitHub", tone: "bg-[#252b3d] text-white", href: "#" },
    ],
    hoverDescription:
      "Modern oyun key pazaryeri platformu. Dijital oyun keylerini güvenli işlemlerle alıp satın. 30+ toplam oyun, 20+ indirimli oyun, 4.9 en yüksek puan, 1.0M+ toplam satış. HTML5, CSS3 ve JavaScript ile geliştirilmiş, responsive tasarım, oyun filtreleme, fiyat karşılaştırma ve sepet sistemi içerir.",
  },
  {
    title: "DoomGame Web",
    date: "10.04.2024",
    subtitle: "Retro Oyun Web Deneyimi",
    description:
      "Klasik Doom oyununun web versiyonu. Modern web teknolojileri ile nostaljik oyun deneyimi için yeniden oluşturuldu.",
    tech: ["JavaScript", "HTML5", "Canvas"],
    tags: ["#game", "#web", "#doom", "#retro"],
    variant: "doomgame",
    cta: [
      { label: "Canlı Demo", tone: "bg-[#356bff] text-white", href: "#" },
      { label: "GitHub", tone: "bg-[#252b3d] text-white", href: "#" },
    ],
    hoverDescription:
      "Klasik Doom oyununun web versiyonu. Modern web teknolojileri ile nostaljik oyun deneyimi için yeniden oluşturuldu. JavaScript ve HTML5 Canvas kullanılarak geliştirilmiş, orijinal oyun mekaniklerini ve retro grafikleri tarayıcıda çalışacak şekilde optimize edilmiştir.",
  },
  {
    title: "Corporate Website",
    date: "05.03.2024",
    subtitle: "Kurumsal Web Sitesi",
    description:
      "Modern, yenilikçi ve sürdürülebilir web çözümleriyle markanızı dijitalde öne çıkarıyoruz. Profesyonel kurumsal web sitesi tasarımı.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["#nextjs", "#corporate", "#business", "#seo"],
    variant: "corporate",
    cta: [
      { label: "Canlı Demo", tone: "bg-[#2563eb] text-white", href: "#" },
      { label: "GitHub", tone: "bg-[#f5f5f5] text-[#0f172a]", href: "#" },
    ],
    hoverDescription:
      "Profesyonel kurumsal web sitesi tasarımı. Modern ve şık arayüz, 7/24 destek, 100+ başarılı proje referansı. Next.js ve TypeScript ile geliştirilmiş, SEO uyumlu, hızlı yüklenme süreleri ve mobil uyumlu responsive tasarım. Kurumsal web sitesi, e-ticaret çözümleri ve SEO & dijital pazarlama hizmetleri sunar.",
  },
  {
    title: "Movie Web",
    date: "08.04.2024",
    subtitle: "Film Veritabanı Platformu",
    description:
      "Kapsamlı film veritabanı platformu. Detaylı bilgiler, kullanıcı yorumları, puanlar ve fragmanlar. Binlerce filmi gelişmiş arama ve filtreleme seçenekleriyle keşfedin. HTML, CSS ve JavaScript ile geliştirildi.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["#movies", "#database", "#reviews", "#trailers"],
    variant: "movieweb",
    cta: [{ label: "GitHub", tone: "bg-[#f5f5f5] text-[#0f172a]", href: "#" }],
    hoverDescription:
      "Kapsamlı film veritabanı platformu. Detaylı bilgiler, kullanıcı yorumları, puanlar ve fragmanlar. Binlerce filmi gelişmiş arama ve filtreleme seçenekleriyle keşfedin. HTML, CSS ve JavaScript ile geliştirildi.",
  },
  {
    title: "Otel Web",
    date: "09.04.2024",
    subtitle: "Otel Rezervasyon Platformu",
    description:
      "Modern otel rezervasyon platformu. Oda kiralama, müsaitlik kontrolü ve online rezervasyon özellikleri. Kullanıcı dostu arayüz ile kolay rezervasyon deneyimi. HTML, CSS ve JavaScript ile geliştirildi.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["#hotel", "#booking", "#reservation", "#rooms"],
    variant: "hotelweb",
    cta: [{ label: "GitHub", tone: "bg-[#f5f5f5] text-[#0f172a]", href: "#" }],
    hoverDescription:
      "Modern otel rezervasyon platformu. Oda kiralama, müsaitlik kontrolü ve online rezervasyon özellikleri. Kullanıcı dostu arayüz ile kolay rezervasyon deneyimi. HTML, CSS ve JavaScript ile geliştirildi.",
  },
  {
    title: "Happy Pets",
    date: "10.04.2024",
    subtitle: "Veteriner Kliniği Web Sitesi",
    description:
      "Veteriner kliniği web sitesi. Randevu sistemi, hizmet tanıtımı ve evcil hayvan bakım bilgileri. Kullanıcı dostu arayüz ile kolay rezervasyon deneyimi. HTML, CSS ve JavaScript ile geliştirildi.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["#veterinary", "#pets", "#clinic", "#appointment"],
    variant: "happypets",
    cta: [{ label: "GitHub", tone: "bg-[#f5f5f5] text-[#0f172a]", href: "#" }],
    hoverDescription:
      "Veteriner kliniği web sitesi. Randevu sistemi, hizmet tanıtımı ve evcil hayvan bakım bilgileri. Kullanıcı dostu arayüz ile kolay rezervasyon deneyimi. HTML, CSS ve JavaScript ile geliştirildi.",
  },
  {
    title: "Weather Tracker",
    date: "11.04.2024",
    subtitle: "Hava Durumu Takip Sistemi",
    description:
      "Şehir bazlı hava durumu takip sistemi. Anlık hava durumu bilgileri, 5 günlük tahmin ve detaylı meteoroloji verileri. API entegrasyonu ile gerçek zamanlı veri çekimi. HTML, CSS ve JavaScript ile geliştirildi.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["#weather", "#api", "#forecast", "#city"],
    variant: "weathertracker",
    cta: [{ label: "GitHub", tone: "bg-[#f5f5f5] text-[#0f172a]", href: "#" }],
    hoverDescription:
      "Şehir bazlı hava durumu takip sistemi. Anlık hava durumu bilgileri, 5 günlük tahmin ve detaylı meteoroloji verileri. API entegrasyonu ile gerçek zamanlı veri çekimi. HTML, CSS ve JavaScript ile geliştirildi.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectCards[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projectCards 
    : projectCards.filter(p => p.tech.includes(activeFilter));

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-4 pb-16 pt-20 sm:pt-24 sm:px-6 md:pt-28 md:px-10 lg:px-16">
        <motion.section {...fadeIn} className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted">
            <Blocks className="h-4 w-4 text-violet-300" />
            Projeler
          </div>
          <h1 className="text-4xl font-display italic md:text-5xl lg:text-6xl">Çalışmalarım</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted md:text-base">
            Her proje; performans, ürün akışı ve teknik mimari odağında kurgulandı.
          </p>
        </motion.section>

        <motion.section
          {...fadeIn}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="mt-10"
        >
          <div className="flex items-stretch gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-x-visible sm:pb-0 scrollbar-none">
            {skillFilters.map((skill) => {
              const count = skill.id === "all"
                ? projectCards.length
                : projectCards.filter(p => p.tech.includes(skill.id)).length;
              const isActive = activeFilter === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveFilter(skill.id)}
                  style={isActive ? {
                    background: skill.activeBg,
                    boxShadow: `0 0 24px ${skill.glow}, 0 4px 16px rgba(0,0,0,0.3)`,
                    borderColor: "transparent",
                  } : {
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                  className={`group relative flex flex-col items-center gap-2 rounded-2xl border px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 min-w-[80px] sm:min-w-[90px] shrink-0 ${
                    isActive
                      ? "text-white scale-105"
                      : "bg-[#111827] text-slate-400 hover:scale-[1.03] hover:border-white/15 hover:bg-[#161e2e]"
                  }`}
                >
                  <div className={`transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}>
                    {skill.icon}
                  </div>
                  <span className={`text-xs font-semibold tracking-wide ${
                    isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                  }`}>{skill.label}</span>
                  <span
                    style={isActive ? { background: "rgba(255,255,255,0.2)", color: "white" } : {}}
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      isActive ? "" : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-2xl opacity-20"
                      style={{ background: "radial-gradient(circle at 50% 0%, white, transparent 70%)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.section>

        <div className="mt-10 grid gap-6 justify-items-center sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              {...fadeIn}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              onClick={() => setSelectedProject(project)}
              className="w-full max-w-[330px] cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-surface/70 shadow-[0_20px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm transition-transform hover:scale-[1.02]"
            >
              <div className="p-4">
                <div className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[#111827] p-3">
                  {project.variant === "hardware" && (
                    <div className="space-y-3 rounded-[14px] bg-[#d3d3d5] p-3">
                      {toolRows.map((tool, toolIndex) => {
                        const Icon = tool.icon;
                        return (
                          <div
                            key={tool.title}
                            className={`rounded-[12px] ${tool.tone} px-4 py-4 text-white shadow-[0_12px_28px_rgba(0,0,0,0.15)]`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                                <Icon className="h-4.5 w-4.5 text-white/90" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <div className="min-w-0">
                                    <h3 className="truncate text-[14px] font-semibold leading-tight">{tool.title}</h3>
                                    <p className="text-[11px] text-white/80">{tool.subtitle}</p>
                                  </div>
                                  {toolIndex === 0 ? (
                                    <span className="rounded-full bg-[#0f4f49] px-2.5 py-1 text-[11px] font-semibold text-white">
                                      TypeScript
                                    </span>
                                  ) : (
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/90">
                                      <ArrowRight className="h-3.5 w-3.5" />
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {project.variant === "cryptotrade" && (
                    <div className="relative overflow-hidden rounded-[14px] bg-gradient-to-br from-[#1a2332] to-[#0f172a] p-4">
                      {/* Navbar */}
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px]">₿</span>
                          <span className="text-[11px] font-semibold text-[#60a5fa]">Kripto Para Takip</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] text-slate-400">Ana Sayfa</span>
                          <span className="text-[9px] text-slate-400">Piyasalar</span>
                          <span className="text-[9px] text-slate-400">Dashboard</span>
                          <span className="rounded-md bg-[#3b82f6] px-2 py-1 text-[9px] text-white">Giriş Yap</span>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="relative mb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="mb-1 text-[16px] font-bold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
                              Kripto Para Takip Platformu
                            </h3>
                            <p className="text-[10px] text-slate-400">Kripto paralarınızı gerçek zamanlı takip edin</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fbbf24]/20 text-[16px]">₿</div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a78bfa]/20 text-[16px]">♦</div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#60a5fa]/20 text-[14px]">📈</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Feature Cards Grid */}
                      <div className="mb-3 grid grid-cols-2 gap-2">
                        <div className="rounded-lg bg-[#252b3d] p-2 text-center">
                          <div className="mb-1 text-[14px]">💰</div>
                          <div className="text-[10px] font-semibold text-white">Gerçek Zamanlı</div>
                          <div className="text-[8px] text-slate-400">Fiyat takibi</div>
                        </div>
                        <div className="rounded-lg bg-[#252b3d] p-2 text-center">
                          <div className="mb-1 text-[14px]">📊</div>
                          <div className="text-[10px] font-semibold text-white">Detaylı Analiz</div>
                          <div className="text-[8px] text-slate-400">Grafikler</div>
                        </div>
                        <div className="rounded-lg bg-[#252b3d] p-2 text-center">
                          <div className="mb-1 text-[14px]">🔐</div>
                          <div className="text-[10px] font-semibold text-white">Güvenli Hesap</div>
                          <div className="text-[8px] text-slate-400">Koruma</div>
                        </div>
                        <div className="rounded-lg bg-[#252b3d] p-2 text-center">
                          <div className="mb-1 text-[14px]">📰</div>
                          <div className="text-[10px] font-semibold text-white">Haberler</div>
                          <div className="text-[8px] text-slate-400">Duyurular</div>
                        </div>
                      </div>
                      
                      {/* Search Bar */}
                      <div className="flex items-center gap-2 rounded-lg bg-[#252b3d] px-3 py-2">
                        <span className="text-[12px] text-slate-400">🔍</span>
                        <span className="text-[10px] text-slate-500">Bitcoin, Ethereum, BNB ara...</span>
                      </div>
                      
                      {/* Tabs */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="rounded-md bg-[#3b82f6] px-3 py-1 text-[10px] text-white">Tüm Coinler</span>
                          <span className="rounded-md bg-[#252b3d] px-3 py-1 text-[10px] text-slate-400">Favoriler (0)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-slate-400">Otomatik Güncelleme</span>
                          <span className="h-4 w-4 rounded-full bg-[#10b981]">🟢</span>
                        </div>
                      </div>
                      
                      {/* React Logo */}
                      <div className="absolute bottom-2 left-2 text-[16px]">⚛️</div>
                    </div>
                  )}

                  {project.variant === "store" && (
                    <div className="flex h-[170px] flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[22px] shrink-0 items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-2 py-0.5 text-center">
                          <span className="text-[7px] text-slate-500">gamekeystore.com</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <img src="/game-key-store.png" alt="Game Key Store" className="w-full h-auto" />
                      </div>
                    </div>
                  )}

                  {project.variant === "doomgame" && (
                    <div className="relative overflow-hidden rounded-[14px] bg-black p-3">
                      {/* Navbar */}
                      <div className="mb-2 flex items-center justify-center gap-3 text-[8px] text-slate-400">
                        <span className="rounded bg-blue-900/50 px-1.5 py-0.5 text-blue-300">🎮</span>
                        <span>Oyunlar</span>
                        <span>Donanım</span>
                        <span>Hizmetler</span>
                        <span>Haberler</span>
                        <span>Mağaza</span>
                        <span>Destek</span>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="relative flex flex-col items-center justify-center py-4">
                        {/* Red glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-transparent" />
                        
                        <div className="relative text-center">
                          <div className="mb-1 text-[10px] font-bold tracking-wider text-red-500">DOOM</div>
                          <h3 className="mb-2 text-[18px] font-black tracking-wider text-white" style={{ textShadow: "0 0 10px rgba(255,0,0,0.5)" }}>
                            DOOM ETERNAL
                          </h3>
                          <p className="mb-2 max-w-[180px] text-[7px] leading-tight text-slate-400">
                            DOOM SLAYER'IN BAŞLANGIÇ HİKÂYESİNİ VE YIKIMIN YAŞANDIĞI ZORLU GÖREVİNİ KEŞFEDİN.
                          </p>
                          
                          {/* Stars */}
                          <div className="mb-1 flex justify-center gap-0.5 text-[8px] text-yellow-500">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                          </div>
                          <div className="mb-2 text-[6px] text-slate-500">5/5 - "Yılın En İyi FPS Oyunu" - Game Critics</div>
                          
                          {/* Feature badges */}
                          <div className="mb-2 flex justify-center gap-1">
                            <span className="rounded border border-white/20 px-1.5 py-0.5 text-[6px] text-white">4K UHD</span>
                            <span className="rounded border border-white/20 px-1.5 py-0.5 text-[6px] text-white">HDR</span>
                            <span className="rounded border border-white/20 px-1.5 py-0.5 text-[6px] text-white">60 FPS</span>
                            <span className="rounded border border-white/20 px-1.5 py-0.5 text-[6px] text-white">PS5 OPTIMIZE</span>
                          </div>
                          
                          {/* CTA Buttons */}
                          <div className="flex justify-center gap-2">
                            <span className="rounded bg-gradient-to-r from-red-600 to-red-500 px-3 py-1 text-[8px] font-bold text-white">ŞİMDİ SATIN AL</span>
                            <span className="rounded border border-white/30 bg-black/50 px-3 py-1 text-[8px] text-white">DAHA FAZLA BİLGİ</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* TypeScript Badge */}
                      <div className="absolute right-2 top-2 rounded-full bg-black/80 px-2 py-0.5 text-[8px] text-white">TypeScript</div>
                    </div>
                  )}

                  {project.variant === "corporate" && (
                    <div className="relative overflow-hidden rounded-[14px] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-4">
                      {/* Navbar */}
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0ea5e9] text-[10px] text-white">👤</div>
                          <span className="text-[10px] font-semibold text-slate-700">Dijital</span>
                        </div>
                        <div className="flex items-center gap-3 text-[8px] text-slate-500">
                          <span>Hakkımızda</span>
                          <span>Hizmetler</span>
                          <span>Referanslar</span>
                          <span>İletişim</span>
                        </div>
                        <span className="rounded-full bg-[#2563eb] px-2 py-1 text-[8px] text-white">İletişime Geç</span>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="relative flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="mb-2 text-[16px] font-bold leading-tight text-slate-800">
                            Dijitalde<br/>Gücünüzü<br/>Artırın
                          </h3>
                          <p className="mb-3 max-w-[140px] text-[8px] leading-relaxed text-slate-500">
                            Modern, yenilikçi ve sürdürülebilir web çözümleriyle markanızı dijitalde öne çıkarıyoruz.
                          </p>
                          
                          {/* CTA Buttons */}
                          <div className="mb-3 flex gap-2">
                            <span className="rounded-full bg-[#2563eb] px-3 py-1 text-[8px] text-white">Teklif Alın →</span>
                            <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-[8px] text-slate-600">Projelerimiz ↗</span>
                          </div>
                          
                          {/* Stats */}
                          <div className="flex gap-2">
                            <div className="rounded-lg bg-white p-2 shadow-sm">
                              <div className="text-[12px] font-bold text-slate-800">7/24</div>
                              <div className="text-[6px] text-slate-500">Destek</div>
                            </div>
                            <div className="rounded-lg bg-white p-2 shadow-sm">
                              <div className="text-[12px] font-bold text-slate-800">100+</div>
                              <div className="text-[6px] text-slate-500">Başarılı Proje</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* 3D Cube Illustration */}
                        <div className="flex h-20 w-20 items-center justify-center">
                          <div className="relative h-16 w-16">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-400/80 to-red-500/80" style={{ transform: 'rotateY(45deg) rotateX(45deg)' }} />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/80 to-blue-500/80" style={{ transform: 'rotateY(-45deg) rotateX(45deg)' }} />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-400/80 to-slate-500/80" style={{ transform: 'rotateX(45deg)' }} />
                          </div>
                        </div>
                      </div>
                      
                      {/* Services Section Preview */}
                      <div className="mt-3 rounded-lg bg-white p-2 shadow-sm">
                        <div className="mb-2 text-center text-[9px] font-semibold text-slate-700">Hizmetlerimiz</div>
                        <div className="grid grid-cols-3 gap-1">
                          <div className="rounded bg-blue-50 p-1.5 text-center">
                            <div className="mb-0.5 text-[10px]">💻</div>
                            <div className="text-[6px] font-medium text-slate-700">Kurumsal Web</div>
                          </div>
                          <div className="rounded bg-yellow-50 p-1.5 text-center">
                            <div className="mb-0.5 text-[10px]">🛒</div>
                            <div className="text-[6px] font-medium text-slate-700">E-Ticaret</div>
                          </div>
                          <div className="rounded bg-green-50 p-1.5 text-center">
                            <div className="mb-0.5 text-[10px]">📈</div>
                            <div className="text-[6px] font-medium text-slate-700">SEO</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* TypeScript Badge */}
                      <div className="absolute right-2 top-2 rounded-full bg-slate-800/90 px-2 py-0.5 text-[8px] text-white">TypeScript</div>
                    </div>
                  )}

                  {project.variant === "movieweb" && (
                    <div className="flex h-[170px] flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[22px] shrink-0 items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-2 py-0.5 text-center">
                          <span className="text-[7px] text-slate-500">movieweb.app</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <img src="/web.png" alt="Movie Web" className="w-full h-auto" />
                      </div>
                    </div>
                  )}

                  {project.variant === "hotelweb" && (
                    <div className="flex h-[170px] flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[22px] shrink-0 items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-2 py-0.5 text-center">
                          <span className="text-[7px] text-slate-500">otelreservation.com</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <img src="/otel.png" alt="Otel Web" className="w-full h-auto" />
                      </div>
                    </div>
                  )}

                  {project.variant === "happypets" && (
                    <div className="flex h-[170px] flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[22px] shrink-0 items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-2 py-0.5 text-center">
                          <span className="text-[7px] text-slate-500">happypets.app</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <img src="/happy.png" alt="Happy Pets" className="w-full h-auto" />
                      </div>
                    </div>
                  )}

                  {project.variant === "weathertracker" && (
                    <div className="flex h-[170px] flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[22px] shrink-0 items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-2 py-0.5 text-center">
                          <span className="text-[7px] text-slate-500">weathertracker.io</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <img src="/Weather Tracker.png" alt="Weather Tracker" className="w-full h-auto" />
                      </div>
                    </div>
                  )}

                  {project.variant === "altinpusula" && (
                    <div className="relative overflow-hidden rounded-[14px] bg-[#0a0a0a] p-4">
                      {/* Gold gradient background */}
                      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#d4af37]/20 blur-3xl" />
                      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#c9a227]/15 blur-3xl" />
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-400">👋 Hoş Geldiniz</span>
                          </div>
                          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-medium text-slate-300">
                            TypeScript
                          </span>
                        </div>
                        
                        {/* Gold Portfolio Card */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#f4e5ba] via-[#d4af37] to-[#c9a227] p-4 shadow-lg">
                          {/* Shine effect */}
                          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/30 blur-xl" />
                          <div className="absolute bottom-0 left-0 h-16 w-16 rounded-full bg-[#8b7355]/20 blur-lg" />
                          
                          <div className="relative">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="rounded-full bg-white/30 px-2 py-0.5 text-[8px] font-medium text-[#5c4a1f]">
                                PORTFÖY NET VARLIK
                              </span>
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5c4a1f]/20">
                                <span className="text-[10px]">📊</span>
                              </div>
                            </div>
                            <div className="text-[22px] font-bold text-[#3d2f0e]">0,00 ₺</div>
                            <div className="text-[10px] text-[#5c4a1f]">Toplam Gram: 0.000 g</div>
                          </div>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c9a227] px-3 py-2 text-center">
                            <span className="text-[11px] font-semibold text-[#3d2f0e]">+ Ekle</span>
                          </div>
                          <div className="rounded-lg bg-[#2a2a2a] px-3 py-2 text-center">
                            <span className="text-[11px] font-semibold text-slate-300">− Çıkar</span>
                          </div>
                        </div>
                        
                        {/* Bottom nav hint */}
                        <div className="mt-3 flex justify-around text-[9px] text-slate-500">
                          <span className="text-[#d4af37]">AnaSayfa</span>
                          <span>Piyasalar</span>
                          <span>Portföy</span>
                          <span>Alarmlar</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.variant === "ehliyet" && (
                    <div className="relative overflow-hidden rounded-[14px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-4">
                      {/* Background decoration */}
                      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white/90">
                            TypeScript
                          </span>
                        </div>
                        
                        {/* Main exam card */}
                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-[14px] font-bold text-white">Klasik Sınav</h4>
                              <p className="text-[11px] text-white/70">Gerçek sınav simülasyonu</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-lg">
                              ✏️
                            </div>
                          </div>
                          <div className="mt-3 flex items-center gap-2">
                            <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] text-white/90">
                              463 Soru • 45 Dakika
                            </span>
                          </div>
                        </div>
                        
                        {/* Stats row */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="rounded-lg bg-white/10 p-2 text-center backdrop-blur-sm">
                            <div className="text-[14px] font-bold text-white">463</div>
                            <div className="text-[9px] text-white/60">Güncel Soru</div>
                          </div>
                          <div className="rounded-lg bg-white/10 p-2 text-center backdrop-blur-sm">
                            <div className="text-[14px] font-bold text-white">49</div>
                            <div className="text-[9px] text-white/60">Çözülen</div>
                          </div>
                          <div className="rounded-lg bg-white/10 p-2 text-center backdrop-blur-sm">
                            <div className="text-[14px] font-bold text-white">%27</div>
                            <div className="text-[9px] text-white/60">Başarı</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.variant === "falbaz" && (
                    <div className="relative overflow-hidden rounded-[14px] bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] p-4">
                      {/* Purple gradient orbs */}
                      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#a855f7]/30 blur-2xl" />
                      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#ec4899]/20 blur-3xl" />
                      
                      <div className="relative">
                        {/* Header with icon */}
                        <div className="mb-3 flex items-center justify-between">
                          <span className="rounded-full bg-[#a855f7]/30 px-2.5 py-1 text-[10px] font-medium text-[#e9d5ff]">
                            🔮 Mistik Fal
                          </span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b]">
                            <span className="text-[14px]">✨</span>
                          </div>
                        </div>
                        
                        {/* Main fortune card */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#fbbf24] via-[#a855f7] to-[#6366f1] p-3 shadow-lg">
                          {/* Shine effects */}
                          <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-white/30 blur-xl" />
                          
                          <div className="relative flex items-center justify-between">
                            <div>
                              <div className="mb-1 flex items-center gap-1 text-[10px] text-white/80">
                                <span>✨</span> YENİ FAL BAŞLAT
                              </div>
                              <h4 className="text-[16px] font-bold text-white">Falına Baktır</h4>
                              <p className="text-[11px] text-white/80">Kahve, el falı ve tarot için tek dokunuş.</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                              <span className="text-[24px]">🔮</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Stats row */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="rounded-lg bg-white/5 p-2 text-center backdrop-blur-sm">
                            <div className="text-[14px] font-bold text-[#e9d5ff]">☕</div>
                            <div className="text-[9px] text-[#a78bfa]">Kahve</div>
                          </div>
                          <div className="rounded-lg bg-white/5 p-2 text-center backdrop-blur-sm">
                            <div className="text-[14px] font-bold text-[#e9d5ff]">✋</div>
                            <div className="text-[9px] text-[#a78bfa]">El Falı</div>
                          </div>
                          <div className="rounded-lg bg-white/5 p-2 text-center backdrop-blur-sm">
                            <div className="text-[14px] font-bold text-[#e9d5ff]">🃏</div>
                            <div className="text-[9px] text-[#a78bfa]">Tarot</div>
                          </div>
                        </div>
                        
                        {/* AI badge */}
                        <div className="mt-3 flex items-center justify-center gap-2">
                          <span className="rounded-full bg-gradient-to-r from-[#10b981] to-[#06b6d4] px-3 py-1 text-[10px] font-medium text-white">
                            AI Destekli
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Click hint overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/10 px-4 py-2 text-[12px] text-white backdrop-blur-sm">
                      Detayları gör
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <h2 className="max-w-[220px] text-[20px] font-semibold leading-[1.1] text-slate-100">{project.title}</h2>
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-400 shrink-0">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {project.date}
                  </div>
                </div>
                <h3 className="mt-1 text-[15px] font-medium text-slate-300">{project.subtitle}</h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-400 line-clamp-3">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-[9px] border border-white/10 bg-[#1a2235] px-3 py-1.5 text-[12px] text-slate-200"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[12px] text-sky-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className={project.cta.length === 2 ? "grid grid-cols-2 gap-3" : "grid grid-cols-1"}>
                    {project.cta.map((button) => (
                      <a
                        key={button.label}
                        href={button.href}
                        target={button.href ? "_blank" : undefined}
                        rel={button.href ? "noreferrer" : undefined}
                        className={`inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-3 text-[14px] font-semibold shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 ${button.tone}`}
                      >
                        {button.label === "GitHub" ? <Github className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
                        <span className="whitespace-pre-line text-center leading-tight">
                          {button.label === "Google Play" ? "Google\nPlay" : button.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-5 py-3 text-sm text-text-primary transition-colors hover:border-white/20 hover:bg-surface"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana sayfaya dön
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(79,70,229,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Tüm projeleri incele
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[420px] max-h-[90vh] overflow-y-auto rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1a2335] to-[#131b2d] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-slate-400 transition-colors hover:bg-black/30 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6">
                {/* Full project visual */}
                <div className="mb-6 overflow-hidden rounded-[20px]">
                  {selectedProject.variant === "altinpusula" ? (
                    <div className="relative bg-[#0a0a0a] p-5">
                      {/* Gold gradient orbs */}
                      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#d4af37]/25 blur-3xl" />
                      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#c9a227]/20 blur-3xl" />
                      
                      <div className="relative">
                        {/* App Header */}
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-slate-400">👋 Hoş Geldiniz</div>
                            <div className="text-[18px] font-bold text-white">AltınPusula</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                              <span className="text-[12px]">🔔</span>
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                              <span className="text-[12px]">⚙️</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Gold Price Ticker */}
                        <div className="mb-3 grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-[#1a1a1a] border border-[#d4af37]/20 p-2">
                            <div className="flex items-center gap-1 text-[9px] text-slate-400">
                              <span>💰</span> 22 AYAR
                            </div>
                            <div className="text-[13px] font-bold text-white">5.165,75</div>
                            <div className="text-[9px] text-red-400">%0.81 ↘</div>
                          </div>
                          <div className="rounded-lg bg-[#1a1a1a] border border-[#d4af37]/20 p-2">
                            <div className="flex items-center gap-1 text-[9px] text-slate-400">
                              <span>💰</span> 18 AYAR
                            </div>
                            <div className="text-[13px] font-bold text-white">4.935,3</div>
                            <div className="text-[9px] text-red-400">%0.81 ↘</div>
                          </div>
                        </div>
                        
                        {/* Main Gold Portfolio Card */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#f4e5ba] via-[#d4af37] to-[#c9a227] p-4 shadow-lg">
                          {/* Shine effects */}
                          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/40 blur-xl" />
                          <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-[#8b7355]/30 blur-lg" />
                          <div className="absolute right-20 top-10 h-32 w-32 rounded-full bg-[#e8d5a3]/50 blur-2xl" />
                          
                          <div className="relative">
                            <div className="mb-3 flex items-center justify-between">
                              <span className="rounded-full bg-white/40 px-3 py-1 text-[10px] font-semibold text-[#5c4a1f] backdrop-blur-sm">
                                PORTFÖY NET VARLIK
                              </span>
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5c4a1f]/20 backdrop-blur-sm">
                                <span className="text-[16px]">📊</span>
                              </div>
                            </div>
                            <div className="text-[28px] font-bold text-[#3d2f0e]">0,00 ₺</div>
                            <div className="text-[12px] text-[#5c4a1f] font-medium">Toplam Gram: 0.000 g</div>
                          </div>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c9a227] px-4 py-3 text-center shadow-lg">
                            <span className="text-[13px] font-bold text-[#3d2f0e]">+ Ekle</span>
                          </div>
                          <div className="rounded-xl bg-[#2a2a2a] border border-white/10 px-4 py-3 text-center">
                            <span className="text-[13px] font-bold text-slate-300">− Çıkar</span>
                          </div>
                        </div>
                        
                        {/* Calculator Section */}
                        <div className="mt-3 rounded-xl bg-[#1a1a1a] border border-white/10 p-3">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-[12px]">⚡</span>
                            <span className="text-[11px] font-semibold text-slate-200">Hızlı Hesaplayıcı</span>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-1 rounded-lg bg-[#d4af37] py-2 text-center">
                              <span className="text-[11px] font-bold text-[#3d2f0e]">GRAM</span>
                            </div>
                            <div className="flex-1 rounded-lg bg-[#2a2a2a] py-2 text-center">
                              <span className="text-[11px] text-slate-400">DOLAR</span>
                            </div>
                            <div className="flex-1 rounded-lg bg-[#2a2a2a] py-2 text-center">
                              <span className="text-[11px] text-slate-400">EURO</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Navigation */}
                        <div className="mt-4 flex justify-around border-t border-white/10 pt-3">
                          <div className="text-center">
                            <div className="text-[14px] mb-0.5">🏠</div>
                            <div className="text-[9px] text-[#d4af37] font-medium">AnaSayfa</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[14px] mb-0.5">📈</div>
                            <div className="text-[9px] text-slate-500">Piyasalar</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[14px] mb-0.5">💼</div>
                            <div className="text-[9px] text-slate-500">Portföy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[14px] mb-0.5">🔔</div>
                            <div className="text-[9px] text-slate-500">Alarmlar</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedProject.variant === "ehliyet" ? (
                    <div className="relative bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-5">
                      {/* Background decoration */}
                      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-medium text-white/90">
                            TypeScript
                          </span>
                        </div>
                        
                        {/* Main exam card */}
                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-[16px] font-bold text-white">Klasik Sınav</h4>
                              <p className="text-[12px] text-white/70">Gerçek sınav simülasyonu</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-2xl">
                              ✏️
                            </div>
                          </div>
                          <div className="mt-3 flex items-center gap-2">
                            <span className="rounded-full bg-white/20 px-3 py-1.5 text-[11px] text-white/90">
                              463 Soru • 45 Dakika
                            </span>
                          </div>
                        </div>
                        
                        {/* Stats row */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                            <div className="text-[16px] font-bold text-white">463</div>
                            <div className="text-[10px] text-white/60">Güncel Soru</div>
                          </div>
                          <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                            <div className="text-[16px] font-bold text-white">49</div>
                            <div className="text-[10px] text-white/60">Çözülen</div>
                          </div>
                          <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                            <div className="text-[16px] font-bold text-white">%27</div>
                            <div className="text-[10px] text-white/60">Başarı</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedProject.variant === "falbaz" ? (
                    <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] p-5">
                      {/* Purple gradient orbs */}
                      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#a855f7]/25 blur-3xl" />
                      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#ec4899]/20 blur-3xl" />
                      
                      <div className="relative">
                        {/* Top Action Bar */}
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-xl bg-[#fbbf24]/20 px-3 py-2">
                            <span className="text-[14px]">⚡</span>
                            <span className="text-[12px] font-semibold text-[#fbbf24]">2 Hak</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-xl bg-[#7c3aed]/30 px-3 py-2">
                            <span className="text-[14px]">✚</span>
                            <span className="text-[12px] font-semibold text-[#c4b5fd]">Hak Kazan</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                            <span className="text-[14px]">🔔</span>
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">7</span>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            <span className="text-[16px]">👤</span>
                          </div>
                        </div>
                        
                        {/* Fortune Teller Image Card */}
                        <div className="relative overflow-hidden rounded-2xl">
                          <div className="aspect-[4/3] bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] flex items-center justify-center">
                            <div className="text-center">
                              <div className="mb-2 text-[60px]">🔮</div>
                              <div className="text-[14px] text-[#a78bfa]">Falcı Hanım</div>
                            </div>
                          </div>
                          <div className="absolute bottom-3 right-3 rounded-full bg-[#a855f7] px-3 py-1 text-[11px] font-medium text-white">
                            Oynat
                          </div>
                        </div>
                        
                        {/* Fortune Music Player */}
                        <div className="mt-3 flex items-center justify-between rounded-xl bg-[#252542] border border-white/5 p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a855f7]">
                              <span className="text-[14px]">▶️</span>
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold text-white">Falcı Müziği</div>
                              <div className="text-[11px] text-slate-400">Ana ekranda mistik bir fon müziği çalıyor</div>
                            </div>
                          </div>
                          <span className="text-[13px] text-[#a78bfa]">Oynat</span>
                        </div>
                        
                        {/* Main Fortune Card */}
                        <div className="relative mt-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#fbbf24] via-[#a855f7] to-[#6366f1] p-4 shadow-lg">
                          <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-white/30 blur-xl" />
                          
                          <div className="relative flex items-center justify-between">
                            <div>
                              <div className="mb-1 flex items-center gap-1 text-[11px] text-white/90">
                                <span>✨</span> YENİ FAL BAŞLAT
                              </div>
                              <h4 className="text-[22px] font-bold text-white">Falına Baktır</h4>
                              <p className="text-[13px] text-white/80">Kahve, el falı ve tarot için tek dokunuş.</p>
                            </div>
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                              <span className="text-[28px]">🔮</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mystic Archive Section */}
                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-medium tracking-wider text-[#a855f7]">MİSTİK ARŞİV</div>
                            <div className="text-[16px] font-bold text-white">Son Fallarım</div>
                          </div>
                          <span className="text-[13px] text-[#a78bfa]">Tümü ›</span>
                        </div>
                        
                        {/* Recent Fortune Item */}
                        <div className="mt-2 rounded-xl bg-[#252542] border border-white/5 p-3">
                          <div className="flex items-center gap-3">
                            <span className="rounded-lg bg-[#4c1d95] px-2 py-1 text-[11px]">🃏 Tarot</span>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div>
                              <div className="text-[11px] text-slate-400">6 Nisan 21:41</div>
                              <div className="text-[13px] text-white">Arkanda bıraktığın yıkım, Kule</div>
                            </div>
                            <span className="text-[#a78bfa]">›</span>
                          </div>
                        </div>
                        
                        {/* Bottom Navigation */}
                        <div className="mt-4 flex justify-around border-t border-white/10 pt-3">
                          <div className="text-center">
                            <div className="text-[16px] mb-0.5">🏠</div>
                            <div className="text-[9px] text-[#a855f7] font-medium">Ana Sayfa</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[16px] mb-0.5">☕</div>
                            <div className="text-[9px] text-slate-500">Fallarım</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[16px] mb-0.5">👤</div>
                            <div className="text-[9px] text-slate-500">Profil</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedProject.variant === "cryptotrade" ? (
                    <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0f172a] p-5">
                      {/* Navbar */}
                      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[16px]">₿</span>
                          <span className="text-[13px] font-semibold text-[#60a5fa]">Kripto Para Takip</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[11px] text-slate-400">Ana Sayfa</span>
                          <span className="text-[11px] text-slate-400">Piyasalar</span>
                          <span className="text-[11px] text-slate-400">Dashboard</span>
                          <span className="rounded-md bg-[#3b82f6] px-3 py-1.5 text-[11px] text-white">Giriş Yap</span>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="relative mb-5">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="mb-2 text-[22px] font-bold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
                              Kripto Para Takip Platformu
                            </h3>
                            <p className="text-[13px] text-slate-400">Kripto paralarınızı gerçek zamanlı takip edin, piyasa değişimlerini analiz edin ve kişisel portföyünüzü oluşturun.</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbbf24]/20 text-[22px]">₿</div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a78bfa]/20 text-[22px]">♦</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Feature Cards Grid */}
                      <div className="mb-4 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-[#252b3d] p-3 text-center">
                          <div className="mb-2 flex justify-center text-[20px]">💰</div>
                          <div className="text-[13px] font-semibold text-white">Gerçek Zamanlı</div>
                          <div className="text-[11px] text-slate-400">Kripto fiyatlarını ve piyasa verilerini gerçek zamanlı olarak takip edin.</div>
                        </div>
                        <div className="rounded-xl bg-[#252b3d] p-3 text-center">
                          <div className="mb-2 flex justify-center text-[20px]">📊</div>
                          <div className="text-[13px] font-semibold text-white">Detaylı Analiz</div>
                          <div className="text-[11px] text-slate-400">Gelişmiş grafikler ve teknik göstergelerle kripto paraları analiz edin.</div>
                        </div>
                        <div className="rounded-xl bg-[#252b3d] p-3 text-center">
                          <div className="mb-2 flex justify-center text-[20px]">🔐</div>
                          <div className="text-[13px] font-semibold text-white">Güvenli Hesap</div>
                          <div className="text-[11px] text-slate-400">Güçlü şifreleme ve güvenlik önlemleriyle verileriniz her zaman korunur.</div>
                        </div>
                        <div className="rounded-xl bg-[#252b3d] p-3 text-center">
                          <div className="mb-2 flex justify-center text-[20px]">📰</div>
                          <div className="text-[13px] font-semibold text-white">Haberler & Duyurular</div>
                          <div className="text-[11px] text-slate-400">Kripto para dünyasındaki son gelişmeleri ve proje duyurularını takip edin.</div>
                        </div>
                      </div>
                      
                      {/* Search Bar */}
                      <div className="mb-4 flex items-center gap-3 rounded-xl bg-[#252b3d] px-4 py-3">
                        <span className="text-[14px] text-slate-400">🔍</span>
                        <span className="text-[13px] text-slate-500">Bitcoin, Ethereum, BNB ara...</span>
                      </div>
                      
                      {/* Tabs and Auto Update */}
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="rounded-lg bg-[#3b82f6] px-4 py-2 text-[12px] text-white">Tüm Coinler</span>
                          <span className="rounded-lg bg-[#252b3d] px-4 py-2 text-[12px] text-slate-400">Favoriler (0)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-slate-400">Son güncelleme: 00:18:15</span>
                          <span className="text-[11px] text-slate-400">Otomatik Güncelleme</span>
                          <span className="h-5 w-9 rounded-full bg-[#10b981] relative">
                            <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white"></span>
                          </span>
                        </div>
                      </div>
                      
                      {/* View Options */}
                      <div className="flex gap-2">
                        <span className="rounded-lg bg-[#3b82f6]/20 px-3 py-2 text-[12px] text-[#60a5fa]">⊞</span>
                        <span className="rounded-lg bg-[#3b82f6] px-3 py-2 text-[12px] text-white">⊟</span>
                      </div>
                      
                      {/* React Logo */}
                      <div className="absolute bottom-4 left-4 text-[20px]">⚛️</div>
                    </div>
                  ) : selectedProject.variant === "doomgame" ? (
                    <div className="relative bg-black p-5">
                      {/* Navbar */}
                      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-blue-900/50 px-2 py-1 text-blue-300">🎮</span>
                          <span className="text-[13px] font-semibold text-blue-400">PlayStation</span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-slate-400">
                          <span>Oyunlar</span>
                          <span>Donanım</span>
                          <span>Hizmetler</span>
                          <span>Haberler</span>
                          <span>Mağaza</span>
                          <span>Destek</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-slate-400">🛒 SEPET</span>
                          <span className="rounded bg-red-600 px-3 py-1.5 text-[10px] font-bold text-white">OTURUM AÇ</span>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="relative flex flex-col items-center justify-center py-6">
                        {/* Red glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-transparent to-transparent" />
                        
                        <div className="relative text-center">
                          <div className="mb-2 text-[14px] font-bold tracking-[0.3em] text-red-500">DOOM</div>
                          <h3 className="mb-3 text-[32px] font-black tracking-wider text-white" style={{ textShadow: "0 0 20px rgba(255,0,0,0.6)" }}>
                            DOOM ETERNAL
                          </h3>
                          <p className="mb-3 max-w-[400px] text-[13px] leading-relaxed text-slate-400">
                            DOOM SLAYER'IN BAŞLANGIÇ HİKÂYESİNİ VE YIKIMIN YAŞANDIĞI ZORLU GÖREVİNİ KEŞFEDİN.
                          </p>
                          
                          {/* Stars */}
                          <div className="mb-1 flex justify-center gap-1 text-[14px] text-yellow-500">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                          </div>
                          <div className="mb-4 text-[11px] text-slate-500">5/5 - "Yılın En İyi FPS Oyunu" - Game Critics</div>
                          
                          {/* Feature badges */}
                          <div className="mb-4 flex justify-center gap-2">
                            <span className="rounded border border-white/30 px-2 py-1 text-[10px] text-white">4K UHD</span>
                            <span className="rounded border border-white/30 px-2 py-1 text-[10px] text-white">HDR</span>
                            <span className="rounded border border-white/30 px-2 py-1 text-[10px] text-white">60 FPS</span>
                            <span className="rounded border border-white/30 px-2 py-1 text-[10px] text-white">PS5 OPTIMIZE</span>
                          </div>
                          
                          {/* CTA Buttons */}
                          <div className="flex justify-center gap-3">
                            <span className="rounded bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-red-500/30">ŞİMDİ SATIN AL</span>
                            <span className="rounded border border-white/40 bg-black/50 px-5 py-2.5 text-[12px] font-semibold text-white">DAHA FAZLA BİLGİ</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* TypeScript Badge */}
                      <div className="absolute right-4 top-4 rounded-full bg-black/80 border border-white/20 px-3 py-1 text-[11px] text-white">TypeScript</div>
                    </div>
                  ) : selectedProject.variant === "corporate" ? (
                    <div className="relative bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-5">
                      {/* Navbar */}
                      <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0ea5e9] text-[14px] text-white">👤</div>
                          <span className="text-[14px] font-semibold text-slate-700">Dijital Çözümler</span>
                        </div>
                        <div className="flex items-center gap-4 text-[12px] text-slate-500">
                          <span>Hakkımızda</span>
                          <span>Hizmetler</span>
                          <span>Referanslar</span>
                          <span>İletişim</span>
                          <span>🌐</span>
                          <span>⚙️</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[12px] text-slate-500">📷 💬 🐦</span>
                          <span className="rounded-full bg-[#2563eb] px-4 py-2 text-[12px] text-white">İletişime Geç</span>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="relative flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="mb-3 text-[28px] font-bold leading-tight text-slate-800">
                            Dijitalde<br/>Gücünüzü<br/>Artırın
                          </h3>
                          <p className="mb-4 max-w-[300px] text-[13px] leading-relaxed text-slate-500">
                            Modern, yenilikçi ve sürdürülebilir web çözümleriyle markanızı dijitalde öne çıkarıyoruz.
                          </p>
                          
                          {/* CTA Buttons */}
                          <div className="mb-5 flex gap-3">
                            <span className="rounded-full bg-[#2563eb] px-5 py-2.5 text-[13px] text-white shadow-lg shadow-blue-500/30">Teklif Alın →</span>
                            <span className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[13px] text-slate-600">Projelerimiz ↗</span>
                          </div>
                          
                          {/* Stats */}
                          <div className="flex gap-3">
                            <div className="rounded-xl bg-white p-3 shadow-md">
                              <div className="text-[20px] font-bold text-slate-800">7/24</div>
                              <div className="text-[10px] font-medium text-slate-500">Destek</div>
                              <div className="mt-1 text-[8px] leading-tight text-slate-400">"Çalışmalarınızdan çok memnun kaldık. Profesyonel ekip ve kaliteli hizmet."</div>
                            </div>
                            <div className="rounded-xl bg-white p-3 shadow-md">
                              <div className="text-[20px] font-bold text-slate-800">100+</div>
                              <div className="text-[10px] font-medium text-slate-500">Başarılı Proje</div>
                              <div className="mt-1 text-[8px] leading-tight text-slate-400">"E-ticaret sitelerinin dönüşüm oranları arttı. Teşekkürler!"</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* 3D Cube Illustration */}
                        <div className="flex h-32 w-32 items-center justify-center">
                          <div className="relative h-28 w-28">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-400/90 to-red-500/90 shadow-lg" style={{ transform: 'rotateY(45deg) rotateX(45deg)' }} />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/90 to-blue-500/90 shadow-lg" style={{ transform: 'rotateY(-45deg) rotateX(45deg)' }} />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-400/90 to-slate-500/90 shadow-lg" style={{ transform: 'rotateX(45deg)' }} />
                          </div>
                        </div>
                      </div>
                      
                      {/* Services Section */}
                      <div className="mt-5 rounded-xl bg-white p-4 shadow-md">
                        <div className="mb-3 text-center text-[14px] font-semibold text-slate-700">Hizmetlerimiz</div>
                        <div className="mb-2 text-center text-[11px] text-slate-500">Dijital dünyada ihtiyacınız olan her çözüm</div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="rounded-lg bg-blue-50 p-3 text-center">
                            <div className="mb-2 flex justify-center text-[20px]">💻</div>
                            <div className="text-[12px] font-semibold text-slate-700">Kurumsal Web Sitesi</div>
                            <div className="text-[9px] text-slate-500">Modern, hızlı ve mobil uyumlu</div>
                          </div>
                          <div className="rounded-lg bg-yellow-50 p-3 text-center">
                            <div className="mb-2 flex justify-center text-[20px]">🛒</div>
                            <div className="text-[12px] font-semibold text-slate-700">E-Ticaret Çözümleri</div>
                            <div className="text-[9px] text-slate-500">Satışlarınızı artırın, kullanıcı dostu</div>
                          </div>
                          <div className="rounded-lg bg-green-50 p-3 text-center">
                            <div className="mb-2 flex justify-center text-[20px]">📈</div>
                            <div className="text-[12px] font-semibold text-slate-700">SEO & Dijital Pazarlama</div>
                            <div className="text-[9px] text-slate-500">Arama motorlarında üst sıralarda</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Action Buttons */}
                      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                        <span className="flex items-center gap-1 rounded-full bg-green-500 px-3 py-2 text-[12px] text-white shadow-lg">
                          <span>💬</span> WhatsApp
                        </span>
                        <span className="flex items-center gap-1 rounded-full bg-blue-600 px-3 py-2 text-[12px] text-white shadow-lg">
                          <span>📧</span> Teklif Al
                        </span>
                      </div>
                      
                      {/* TypeScript Badge */}
                      <div className="absolute right-4 top-4 rounded-full bg-slate-800/90 px-3 py-1 text-[11px] text-white">TypeScript</div>
                    </div>
                  ) : selectedProject.variant === "movieweb" ? (
                    <div className="flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[28px] shrink-0 items-center gap-2 border-b border-white/10 bg-[#161b22] px-3">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-3 py-1 text-center">
                          <span className="text-[9px] text-slate-500">movieweb.app</span>
                        </div>
                      </div>
                      <img src="/web.png" alt="Movie Web" className="w-full h-auto" />
                    </div>
                  ) : selectedProject.variant === "hotelweb" ? (
                    <div className="flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[28px] shrink-0 items-center gap-2 border-b border-white/10 bg-[#161b22] px-3">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-3 py-1 text-center">
                          <span className="text-[9px] text-slate-500">otelreservation.com</span>
                        </div>
                      </div>
                      <img src="/otel.png" alt="Otel Web" className="w-full h-auto" />
                    </div>
                  ) : selectedProject.variant === "happypets" ? (
                    <div className="flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[28px] shrink-0 items-center gap-2 border-b border-white/10 bg-[#161b22] px-3">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-3 py-1 text-center">
                          <span className="text-[9px] text-slate-500">happypets.app</span>
                        </div>
                      </div>
                      <img src="/happy.png" alt="Happy Pets" className="w-full h-auto" />
                    </div>
                  ) : selectedProject.variant === "weathertracker" ? (
                    <div className="flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[28px] shrink-0 items-center gap-2 border-b border-white/10 bg-[#161b22] px-3">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-3 py-1 text-center">
                          <span className="text-[9px] text-slate-500">weathertracker.io</span>
                        </div>
                      </div>
                      <img src="/Weather Tracker.png" alt="Weather Tracker" className="w-full h-auto" />
                    </div>
                  ) : selectedProject.variant === "store" ? (
                    <div className="flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1117]">
                      <div className="flex h-[28px] shrink-0 items-center gap-2 border-b border-white/10 bg-[#161b22] px-3">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                        <div className="mx-2 flex-1 rounded bg-[#21262d] px-3 py-1 text-center">
                          <span className="text-[9px] text-slate-500">gamekeystore.com</span>
                        </div>
                      </div>
                      <img src="/game-key-store.png" alt="Game Key Store" className="w-full h-auto" />
                    </div>
                  ) : selectedProject.variant === "hardware" ? (
                    <div className="relative bg-[#0b1020] p-5">
                      <div className="space-y-3">
                        <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[12px] text-slate-400">AMD vs Intel</span>
                            <span className="rounded-full bg-[#18bfb3]/20 px-2 py-1 text-[10px] text-[#18bfb3]">TypeScript</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/10">
                            <div className="h-full w-[65%] rounded-full bg-[#18bfb3]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                            <div className="text-[14px] font-bold text-slate-200">CPU</div>
                            <div className="text-[10px] text-slate-500">Kıyaslama</div>
                          </div>
                          <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                            <div className="text-[14px] font-bold text-slate-200">GPU</div>
                            <div className="text-[10px] text-slate-500">Benchmark</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-[#1a2235] p-5">
                      <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                        <div className="text-[14px] font-bold text-slate-200">{selectedProject.title}</div>
                        <div className="mt-2 text-[12px] text-slate-400">{selectedProject.description.slice(0, 50)}...</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-[22px] font-bold text-slate-100">{selectedProject.title}</h2>
                    <div className="flex items-center gap-1.5 text-[13px] text-slate-400">
                      <CalendarDays className="h-4 w-4" />
                      {selectedProject.date}
                    </div>
                  </div>
                  <h3 className="text-[15px] font-medium text-slate-300">{selectedProject.subtitle}</h3>
                </div>

                {/* Full description */}
                <div className="mb-6 rounded-[16px] border border-white/10 bg-[#0d1321] p-4">
                  <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-slate-500">Açıklama</div>
                  <p className="text-[13px] leading-[1.8] text-slate-300">
                    {selectedProject.hoverDescription}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="mb-4">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">Teknolojiler</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-[9px] border border-white/10 bg-[#1a2235] px-3 py-1.5 text-[12px] text-slate-200"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-[12px] text-sky-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className={selectedProject.cta.length === 2 ? "grid grid-cols-2 gap-3" : "grid grid-cols-1"}>
                  {selectedProject.cta.map((button) => (
                    <a
                      key={button.label}
                      href={button.href}
                      target={button.href ? "_blank" : undefined}
                      rel={button.href ? "noreferrer" : undefined}
                      className={`inline-flex items-center justify-center gap-2 rounded-[12px] px-4 py-3 text-[14px] font-semibold shadow-lg transition-transform hover:-translate-y-0.5 ${button.tone}`}
                    >
                      {button.label === "GitHub" ? <Github className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
                      <span className="whitespace-pre-line text-center leading-tight">
                        {button.label === "Google Play" ? "Google\nPlay" : button.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageFooterBar />
    </div>
  );
};

export default Projects;
