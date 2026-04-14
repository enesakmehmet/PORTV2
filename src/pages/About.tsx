import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, FileText, Github, Instagram, Layers3, Linkedin, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageFooterBar from "@/components/PageFooterBar";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-80px" },
};

const socialLinks = [
  { label: "GitHub", icon: Github, href: "https://github.com/enesakmehmet" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/enes-akmehmet-a061bb206/?skipRedirect=true" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/enesakmehmt/" },
];

const focusAreas = [
  {
    title: "Uçtan uca geliştirme",
    description: "Fikir aşamasından canlı ortama kadar ürünün tüm teknik katmanlarını planlayıp uyguluyorum.",
    icon: Code2,
  },
  {
    title: "Temiz mimari",
    description: "Bakımı kolay, ölçeklenebilir ve tekrar kullanılabilir bileşen yapıları kurmaya odaklanıyorum.",
    icon: Layers3,
  },
  {
    title: "Kullanıcı deneyimi",
    description: "Sade, hızlı ve anlaşılır arayüzlerle son kullanıcı tarafında net bir deneyim oluşturuyorum.",
    icon: Sparkles,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="mx-auto flex min-h-screen max-w-[1180px] items-start md:items-center px-4 pb-16 pt-20 sm:pt-24 md:pt-28 sm:px-6 md:px-10 lg:px-16">
        <motion.section
          {...fadeIn}
          className="relative mx-auto w-full overflow-hidden rounded-[28px] border border-white/10 bg-surface/70 shadow-[0_24px_100px_rgba(0,0,0,0.28)] backdrop-blur-sm"
        >
          <div className="h-28 w-full bg-gradient-to-r from-[#254a95] via-[#2f2f80] to-[#6c2ca7] md:h-40" />

          <div className="relative px-6 pb-8 pt-0 md:px-10 md:pb-10">
            <div className="-mt-14 flex justify-center md:-mt-20">
              <div className="relative h-28 w-28 rounded-full bg-bg p-1 shadow-[0_0_0_4px_rgba(122,92,255,0.85)] md:h-36 md:w-36">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10">
                  <img
                    src="/enes-profile.jpg"
                    alt="Enes Akmehmet"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center md:mt-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg/60 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted">
                <Sparkles className="h-4 w-4 text-violet-300" />
                Hakkımda
              </div>
              <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">Enes Akmehmet</h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                Merhaba, ben Enes Akmehmet. Fullstack Developer olarak modern web teknolojileriyle ürün odaklı,
                kullanıcı dostu ve performanslı uygulamalar geliştiriyorum. Tasarım ile geliştirme arasında sağlam bir
                köprü kurup, temiz kod ve net iletişimle projeleri ilerletmeyi önemsiyorum.
              </p>

              <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div key={area.title} className="rounded-2xl border border-white/10 bg-[#1c2335] p-5 text-left">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-violet-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-base font-semibold text-slate-100">{area.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{area.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-[#1b2234] px-5 py-5 text-left">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Şu anda odaklandığım alanlar</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-bg/40 px-4 py-3 text-sm text-slate-300">
                    React, TypeScript ve bileşen tabanlı mimari ile güçlü arayüzler.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-bg/40 px-4 py-3 text-sm text-slate-300">
                    Performans, bakım kolaylığı ve gerçek kullanım senaryolarına uygun çözümler.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#20283d] px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-white/20 hover:bg-[#242d44]"
                    >
                      <Icon className="h-4 w-4 text-slate-300" />
                      {social.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="/Enes%20Cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-full text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-90 blur-sm transition-opacity group-hover:opacity-100" />
                  <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-4 font-semibold shadow-[0_16px_40px_rgba(37,99,235,0.35)]">
                    <FileText className="h-4 w-4" />
                    CV'yi Görüntüle
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <PageFooterBar />

      <Link
        to="/"
        className="fixed bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-3 text-sm text-text-primary shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-surface"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
};

export default About;
