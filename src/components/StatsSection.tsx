import { motion } from "framer-motion";
import { Search, Palette, Code2, Bug, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Keşif",
    desc: "İhtiyaç analizi ve strateji",
    color: "#8B5CF6",
  },
  {
    icon: Palette,
    title: "Tasarım",
    desc: "UI/UX ve prototipleme",
    color: "#EC4899",
  },
  {
    icon: Code2,
    title: "Kod",
    desc: "Geliştirme ve implementasyon",
    color: "#06B6D4",
  },
  {
    icon: Bug,
    title: "Test",
    desc: "Kalite kontrol ve optimizasyon",
    color: "#F59E0B",
  },
  {
    icon: Rocket,
    title: "Yayın",
    desc: "Deployment ve canlıya alma",
    color: "#10B981",
  },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-100px" },
};

const StatsSection = () => (
  <section id="stats" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div {...fadeInView} className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Çalışma Sürecim</span>
          <div className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-light text-text-primary mb-3">
          Proje <em className="font-display italic">Adımlarım</em>
        </h2>
        <p className="text-sm text-muted max-w-md mx-auto">
          Her projeyi sistematik ve disiplinli bir yaklaşımla 5 temel aşamada tamamlıyorum.
        </p>
      </motion.div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-stroke" />
          <div className="absolute top-[40px] left-[10%] right-[10%] h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#10B981]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="flex justify-between px-[5%]">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center w-[140px]"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                    border: `1px solid ${step.color}40`,
                    boxShadow: `0 8px 32px ${step.color}20`,
                  }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} strokeWidth={1.5} />
                </div>
                <div className="text-lg font-semibold text-text-primary mb-1">{step.title}</div>
                <div className="text-xs text-muted leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden">
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-stroke" />
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#8B5CF6] via-[#06B6D4] to-[#10B981]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}30 0%, ${step.color}15 100%)`,
                    border: `1px solid ${step.color}50`,
                    boxShadow: `0 4px 20px ${step.color}25`,
                  }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <div className="text-base font-semibold text-text-primary mb-0.5">{step.title}</div>
                  <div className="text-sm text-muted">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
