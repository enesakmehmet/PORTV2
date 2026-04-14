import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type WorkItem = {
  type: "image" | "video";
  src: string;
  title: string;
  span: string;
  aspect: string;
};

const works: WorkItem[] = [
  { type: "video", src: "/video1.mp4", title: "Otomotiv Hareketi", span: "md:col-span-7", aspect: "aspect-[7/5]" },
  { type: "video", src: "/video2.mp4", title: "Kentsel Mimari", span: "md:col-span-5", aspect: "aspect-[5/6]" },
  { type: "video", src: "/video3.mp4", title: "İnsan Perspektifi", span: "md:col-span-5", aspect: "aspect-[5/6]" },
  { type: "video", src: "/video4.mp4", title: "Marka Kimliği", span: "md:col-span-7", aspect: "aspect-[7/5]" },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-100px" },
};

const WorksSection = () => (
  <section id="works" className="bg-bg py-12 md:py-16">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div {...fadeInView} className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Seçilmiş İşler</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-light text-text-primary mb-3">
              Öne Çıkan <em className="font-display italic">projeler</em>
            </h2>
            <p className="text-sm text-muted max-w-md">
              Fikir aşamasından yayına kadar üzerinde çalıştığım projelerden bir seçki.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary border border-stroke hover:border-transparent transition-all"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient -z-10" />
            <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-6 py-3">
              Tüm işleri gör →
            </span>
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {works.map((work, i) => (
          <motion.div
            key={work.title}
            {...fadeInView}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: i * 0.1 }}
            className={`${work.span} group relative overflow-hidden rounded-3xl bg-surface border border-stroke cursor-pointer`}
          >
            <div className={`${work.aspect} relative overflow-hidden`}>
              {work.type === "video" ? (
                <video
                  src={work.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={work.src}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorksSection;
