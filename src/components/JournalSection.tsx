import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type MobileEntry = {
  title: string;
  subtitle: string;
  date: string;
  accent: string;
  icon: string;
};

const mobileEntries: MobileEntry[] = [
  { title: "Donanım Kıyasla", subtitle: "Mobil Uygulama & Yönetim Paneli", date: "01.11.2024", accent: "#00C9A7", icon: "DK" },
  { title: "Ehliyet AI 2026", subtitle: "Sürücü Adayları Sınav Uygulaması", date: "15.05.2024", accent: "#8B5CF6", icon: "EA" },
  { title: "AltınPusula", subtitle: "Finans & Portföy Yönetimi", date: "20.02.2024", accent: "#F59E0B", icon: "AP" },
  { title: "FalBaz", subtitle: "AI Destekli Fal Uygulaması", date: "10.04.2026", accent: "#06B6D4", icon: "FB" },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-100px" },
};

const JournalSection = () => (
  <section id="journal" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div {...fadeInView} className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Mobil Geliştirme</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-light text-text-primary mb-3">
              Mobil <em className="font-display italic">Projelerim</em>
            </h2>
            <p className="text-sm text-muted max-w-md">React Native ile geliştirdiğim iOS ve Android uygulamaları.</p>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary border border-stroke hover:border-transparent transition-all"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient -z-10" />
            <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-6 py-3">Tüm projeler →</span>
          </Link>
        </div>
      </motion.div>

      <div className="space-y-4">
        {mobileEntries.map((entry, i) => (
          <motion.div
            key={entry.title}
            {...fadeInView}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: i * 0.08 }}
          >
            <Link
              to="/projects"
              className="flex items-center gap-4 sm:gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-colors group"
            >
              <div
                className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                style={{ background: `${entry.accent}22`, border: `1px solid ${entry.accent}40`, color: entry.accent }}
              >
                {entry.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-sm md:text-base text-text-primary truncate group-hover:text-text-primary/90">
                  {entry.title}
                </span>
                <span className="block text-xs text-muted truncate">{entry.subtitle}</span>
              </div>
              <span className="hidden sm:block text-xs text-muted">React Native</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JournalSection;
