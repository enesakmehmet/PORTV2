import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageFooterBar from "@/components/PageFooterBar";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  period: string;
  description: string;
  serial: string;
  file: string | null;
  image?: string;
  preview: "fullstack" | "claude" | "placeholder";
  technologies: string[];
};

const certs: Certificate[] = [
  {
    id: 1,
    title: "FullStack Geliştirici Programı",
    issuer: "OnlyJS Akademi",
    period: "2024 Ağustos - 2025 Temmuz",
    description:
      "27 adet ödev, 15 adet proje ve 924 saat yayın (126 saat canlı yayın, 690 saat mentorluk yayını, 108 saat video) ile tamamlandı.",
    serial: "FS-2025-001",
    file: "/fullstack-certificate.pdf",
    preview: "fullstack",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "NestJS", "Prisma ORM", "JavaScript"],
  },
  {
    id: 2,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    period: "2 Mart 2026",
    description:
      "Yapay zeka destekli kod geliştirme, Claude AI ile programlama ve modern AI araçlarının yazılım geliştirme süreçlerine entegrasyonu konularında yetkinlik kazanıldı.",
    serial: "or4ryzbo4abk",
    file: "/Claude Code in Action.png",
    image: "/Claude Code in Action.png",
    preview: "claude",
    technologies: ["Claude AI", "AI Tools", "Prompt Engineering"],
  },
  {
    id: 3,
    title: "Profesyonel Gelişim Sertifikası",
    issuer: "HSD Akademi",
    period: "Aralık 2025",
    description: "Profesyonel gelişim alanında tamamlanan eğitim programı sertifikası.",
    serial: "-",
    file: "/Profesyonel Gelişim Sertifikası.jpg",
    image: "/Profesyonel Gelişim Sertifikası.jpg",
    preview: "placeholder",
    technologies: [],
  },
  {
    id: 4,
    title: "İhracat & Dış Ticaret Uzmanlığı",
    issuer: "T.C. Sanayi ve Teknoloji Bakanlığı - DOKA",
    period: "2024",
    description:
      "T.C. Sanayi ve Teknoloji Bakanlığı ile DOKA işbirliğinde gerçekleştirilen eğitim programını tamamlayarak, ihracat stratejisi oluşturma ve dış ticaret departmanı yönetimi konularında sertifika sahibi oldum. Rize ekonomisinin küresel pazarlara entegrasyonuna katkı sağlamak üzere gerekli bilgi ve becerileri edindim.",
    serial: "-",
    file: "https://imgur.com/OWtUjJl",
    image: "https://i.imgur.com/OWtUjJl.png",
    preview: "placeholder",
    technologies: ["İhracat", "Dış Ticaret", "Strateji", "Departman Yönetimi"],
  },
  {
    id: 5,
    title: "Yazılım & Teknoloji Eğitim Programı",
    issuer: "Coderspace - Yazılım & Teknoloji Okulu",
    period: "2024",
    description:
      "Akbank, Burgan Bank, DefineX, Doğa Koleji, Garanti BBVA, Intertech, iyzico, Softtech, Türkiye Technology ve Türkiye İş Bankasının desteklediği 4 haftalık kapsamlı yazılım eğitim programını başarıyla tamamladım. Modern teknoloji yığınları ve endüstri standartlarında pratik deneyim kazandım.",
    serial: "-",
    file: "https://imgur.com/PCzMh69",
    image: "https://i.imgur.com/PCzMh69.png",
    preview: "placeholder",
    technologies: ["Yazılım", "Teknoloji", "Eğitim", "Pratik Deneyim"],
  },
  {
    id: 6,
    title: "Yapay Zeka ve Dijital Dönüşüm",
    issuer: "Kodluyoruz & Microsoft",
    period: "24 Şubat 2025",
    description:
      "Kodluyoruz ve Microsoft iş birliğiyle 24 Şubat 2025 tarihinde düzenlenen 'Yapay Zeka ile Dönüştürelim' programına katılarak, 5 saatlik yoğun çevrim içi eğitimde yapay zeka teknolojileri ve dijital dönüşüm süreçleri hakkında kapsamlı bilgi edindim.",
    serial: "-",
    file: "https://i.imgur.com/9Iy7QP8.jpeg",
    image: "https://i.imgur.com/9Iy7QP8.jpeg",
    preview: "placeholder",
    technologies: ["Yapay Zeka", "Dijital Dönüşüm", "Microsoft", "Kodluyoruz"],
  },
  {
    id: 7,
    title: "Cloud & DevOps Day 2025",
    issuer: "Coderspace",
    period: "Şubat 2025",
    description:
      "Modern bulut mimarileri, DevOps metodolojileri ve sürekli entegrasyon/dağıtım (CI/CD) süreçleri üzerine düzenlenen tam gün etkinliğe katılarak, endüstri uzmanlarından cloud ve DevOps teknolojilerinin güncel uygulamaları hakkında bilgi edindim.",
    serial: "-",
    file: "https://i.imgur.com/btGICgU.jpeg",
    image: "https://i.imgur.com/btGICgU.jpeg",
    preview: "placeholder",
    technologies: ["Cloud", "DevOps", "CI/CD", "Coderspace"],
  },
  {
    id: 8,
    title: "React ile Frontend Geliştirme",
    issuer: "Turkcell Akademi - Geleceği Yazanlar",
    period: "11 Şubat 2025",
    description:
      "11 Şubat 2025 tarihinde Turkcell Akademi tarafından düzenlenen 'Geleceği Yazanlar' projesi kapsamında React 401 eğitim programını başarıyla tamamlayarak, modern frontend geliştirme ve React kütüphanesi konularında ileri seviye yetkinlik kazandım.",
    serial: "-",
    file: "https://i.imgur.com/HxP1ANV.jpeg",
    image: "https://i.imgur.com/HxP1ANV.jpeg",
    preview: "placeholder",
    technologies: ["React", "Frontend", "Turkcell Akademi", "Geleceği Yazanlar"],
  },
  {
    id: 9,
    title: "React ile Web Programcılığı",
    issuer: "BTK Akademi",
    period: "Şubat 2025",
    description:
      "Bilgi Teknolojileri ve İletişim Kurumu'nun resmi eğitim platformu BTK Akademi aracılığıyla React ile Web Programcılığı eğitimini tamamladım. React.js kütüphanesi, component yapısı, JSX syntax ve modern frontend geliştirme teknikleri konularında bilgi sahibi oldum.",
    serial: "-",
    file: "https://i.imgur.com/xByi3rD.jpeg",
    image: "https://i.imgur.com/xByi3rD.jpeg",
    preview: "placeholder",
    technologies: ["React", "Web Programcılığı", "JSX", "BTK Akademi"],
  },
  {
    id: 10,
    title: "Herkes için Yapay Zeka Eğitimi",
    issuer: "Coderspace",
    period: "Nisan 2025",
    description:
      "OpenAI, Anthropic, Google ve diğer önde gelen teknoloji şirketlerinin AI araçlarını kapsayan 3 haftalık yoğun eğitim programını tamamladım. Yapay zeka temelleri, prompt engineering, AI destekli geliştirme ve modern AI araçlarının iş süreçlerine entegrasyonu konularında yetkinlik kazandım.",
    serial: "-",
    file: "https://i.imgur.com/eYKYdVt.jpeg",
    image: "https://i.imgur.com/eYKYdVt.jpeg",
    preview: "placeholder",
    technologies: ["Yapay Zeka", "Prompt Engineering", "OpenAI", "Anthropic"],
  },
];

const FullstackMock = ({ small = false }: { small?: boolean }) => (
  <div className="relative h-full w-full overflow-hidden bg-[#f4f2ea]">
    <div className="absolute inset-[5px] rounded-[10px] border border-[#f8b133]/60" />
    <div className="absolute right-0 top-0 h-8 w-28 bg-[#f8b133]" style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 0)" }} />
    <div className="absolute bottom-0 left-0 h-8 w-32 bg-[#f8b133]" style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }} />
    <div className={`relative z-10 flex h-full flex-col p-3 text-[#1f231b] ${small ? "" : "p-5"}`}>
      <div className={`font-bold leading-tight ${small ? "text-[10px]" : "text-[16px]"}`}>Başarı Sertifikası</div>
      <div className={`mt-1 text-[#4b67e6] ${small ? "text-[7px]" : "text-[11px]"}`}>Sayın;</div>
      <div className={`font-light ${small ? "text-[9px]" : "text-[15px]"}`}>Enes Akmehmet</div>
      <div className={`mt-1 h-px bg-black/40 ${small ? "w-[80%]" : "w-full"}`} />
      <div className={`mt-1 leading-[1.2] text-[#1f231b]/80 ${small ? "text-[5px]" : "text-[8px]"}`}>
        "FullStack Developer Yetiştirme Programını" 2024 Ağustos-2025 Temmuz tarihleri arasında tamamladı.
      </div>
      <div className="mt-auto flex items-end justify-between">
        <div className={`text-[#1f231b]/60 ${small ? "text-[4px] leading-[1.3]" : "text-[6px] leading-4"}`}>
          <div>Certificate no: FS-2025-001</div>
        </div>
        <div className={`font-semibold uppercase text-[#1f231b] ${small ? "text-[5px]" : "text-[8px]"}`}>OnlyJS</div>
      </div>
    </div>
  </div>
);

const ClaudeMock = ({ small = false }: { small?: boolean }) => (
  <div className="relative h-full w-full overflow-hidden bg-[#8b9e6a]">
    <div className="absolute inset-[5px] rounded-[8px] border border-white/20" />
    <div className={`relative z-10 flex h-full flex-col items-center justify-center p-3 text-center text-white`}>
      <div className={`rounded-full border border-white/40 px-2 py-0.5 ${small ? "text-[5px]" : "text-[8px]"} uppercase tracking-wider`}>
        Certificate of Completion
      </div>
      <div className={`mt-2 ${small ? "text-[7px]" : "text-[11px]"}`}>Enes Akmehmet</div>
      <div className={`mt-0.5 font-semibold leading-tight ${small ? "text-[8px]" : "text-[13px]"}`}>Claude Code in Action</div>
      <div className={`mt-auto font-bold uppercase tracking-widest ${small ? "text-[5px]" : "text-[9px]"}`}>ANTHROPIC</div>
    </div>
  </div>
);

const PlaceholderMock = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#1a2235] text-center">
    <div className="text-2xl text-slate-600">+</div>
    <div className="text-xs text-slate-500">Görsel Bekleniyor</div>
  </div>
);

const PreviewThumb = ({ cert }: { cert: Certificate }) => (
  <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-white/10 bg-white relative">
    {cert.image ? (
      <img src={cert.image} alt={cert.title} className="h-full w-full object-cover" />
    ) : cert.file?.endsWith(".pdf") ? (
      <iframe
        src={cert.file + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
        title={cert.title}
        className="absolute left-0 top-0 h-[400%] w-[400%] border-none"
        style={{ transformOrigin: "top left", transform: "scale(0.25)" }}
      />
    ) : cert.preview === "claude" ? (
      <ClaudeMock small />
    ) : (
      <PlaceholderMock />
    )}
  </div>
);

const PreviewLarge = ({ cert }: { cert: Certificate }) => (
  <div className="aspect-[4/3] w-full overflow-hidden rounded-[16px] border border-white/10 shadow-[0_16px_60px_rgba(0,0,0,0.3)] bg-white">
    {cert.image ? (
      <img src={cert.image} alt={cert.title} className="h-full w-full object-contain" />
    ) : cert.file?.endsWith(".pdf") ? (
      <iframe
        src={cert.file + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
        title={cert.title}
        className="h-full w-full border-none"
      />
    ) : cert.preview === "claude" ? (
      <ClaudeMock />
    ) : (
      <PlaceholderMock />
    )}
  </div>
);

const Certificates = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeCert = certs.find((c) => c.id === activeId) ?? null;

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-4 pb-16 pt-20 sm:pt-24 sm:px-6 md:pt-28 md:px-10 lg:px-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-blue-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Sertifikalarım
          </motion.div>
          <h1 className="text-4xl font-display italic md:text-5xl lg:text-6xl">Certificates</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted md:text-base">
            Kazandığım yetkinlikler ve başarılar.
          </p>
        </motion.section>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, i) => (
            <motion.button
              key={cert.id}
              type="button"
              onClick={() => setActiveId(cert.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#111827] to-[#0d1424] p-4 text-left shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <PreviewThumb cert={cert} />
              <div className="mt-4 flex-1">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="mt-1 text-sm text-slate-400">{cert.issuer}</div>
              </div>
              <div className="mt-4 text-xs font-medium text-blue-400 group-hover:underline">
                Detayları Görüntüle →
              </div>
            </motion.button>
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
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-surface/80 to-surface/60 px-6 py-3 text-sm text-text-primary shadow-lg shadow-black/20 transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/10"
          >
            <motion.span whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400 }}>
              <ArrowLeft className="h-4 w-4" />
            </motion.span>
            Ana sayfaya dön
          </Link>
        </motion.div>
      </main>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.26, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto grid w-full max-w-[860px] gap-5 rounded-[24px] border border-[#2a3f6e] bg-[#101a2f] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.5)] sm:p-5 md:grid-cols-[1fr_1fr] md:p-7"
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <PreviewLarge cert={activeCert} />

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-50 md:text-[28px]">{activeCert.title}</h2>
                <div className="mt-2 text-base font-medium text-blue-400">{activeCert.issuer}</div>
                <div className="mt-6 text-sm text-slate-300">{activeCert.period}</div>
                <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">{activeCert.description}</p>
                {activeCert.serial !== "-" && (
                  <div className="mt-4 text-sm text-slate-500">Sertifika No: {activeCert.serial}</div>
                )}

                {activeCert.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeCert.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8">
                  {activeCert.file ? (
                    <a
                      href={activeCert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#346cf6] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(52,108,246,0.35)] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#4277ff]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Sertifikayı Görüntüle
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-500">
                      Yakında Eklenecek
                    </span>
                  )}
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

export default Certificates;
