import { motion } from "framer-motion";

const githubStats = [
  { value: "20+", label: "Repo", color: "#61DAFB", glow: "rgba(97,218,251,0.15)" },
  { value: "15", label: "Yıldız", color: "#fbbf24", glow: "rgba(251,191,36,0.15)" },
  { value: "8", label: "Takipçi", color: "#a78bfa", glow: "rgba(167,139,250,0.15)" },
  { value: "12", label: "Takip", color: "#34d399", glow: "rgba(52,211,153,0.15)" },
];

const langs = [
  { name: "JavaScript", pct: 38, color: "#f7df1e" },
  { name: "HTML", pct: 33, color: "#e34f26" },
  { name: "TypeScript", pct: 15, color: "#3178c6" },
  { name: "CSS", pct: 13, color: "#264de4" },
];

const techStack = [
  { name: "React", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg> },
  { name: "React Native", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg> },
  { name: "TypeScript", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#3178C6"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M13 18v-2.5h3.5V14H8.5v-2h9V9.5h-5V7H16V4.5h-3.5V7H8.5v5H6v2h2.5v4H13z" fill="white"/></svg> },
  { name: "JavaScript", icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><rect width="24" height="24" rx="2" fill="#f7df1e"/><text x="4" y="17" fontSize="11" fontWeight="bold" fill="#000" fontFamily="monospace">JS</text></svg> },
  { name: "Node.js", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#339933"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.7l6.5 3.6-6.5 3.6-6.5-3.6L12 4.7zm-1 13.8l-5-2.8V9.2l5 2.8v6.5zm2 0l5-2.8V9.2l-5 2.8v6.5z"/></svg> },
  { name: "Tailwind", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#06B6D4"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z"/></svg> },
  { name: "PostgreSQL", icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><ellipse cx="12" cy="6" rx="8" ry="3.5" fill="#336791"/><path d="M4 6v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V6" fill="none" stroke="#336791" strokeWidth="1.5"/><path d="M4 11v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5" fill="none" stroke="#336791" strokeWidth="1.5"/></svg> },
  { name: "Git", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#F05032"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.35l2.658 2.66a1.838 1.838 0 1 1-1.1 1.047l-2.48-2.48v6.532a1.838 1.838 0 1 1-1.51-.038V9.32a1.838 1.838 0 0 1-.997-2.414L7.617 4.215.45 11.38a1.55 1.55 0 0 0 0 2.189l10.48 10.478a1.55 1.55 0 0 0 2.188 0l10.428-10.43a1.55 1.55 0 0 0 0-2.187z"/></svg> },
  { name: "GitHub", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="white"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg> },
  { name: "Expo", icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M4.175 8.914C6.064 5.68 7.008 4.063 8.107 3.624a3 3 0 0 1 2.358.006c1.09.44 2.02 2.05 3.88 5.27l.36.623c1.617 2.8 2.426 4.2 2.406 5.373a3 3 0 0 1-1.187 2.333c-.96.677-2.623.677-5.949.677H9.09c-3.326 0-4.989 0-5.949-.677A3 3 0 0 1 1.954 14.9c-.021-1.174.788-2.573 2.406-5.372l.359-.623" fill="none" stroke="white" strokeWidth="1.5"/></svg> },
  { name: "Docker", icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg> },
  { name: "Figma", icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/><path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/><path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/><path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/><path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/></svg> },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-80px" },
};

const ExplorationsSection = () => (
  <section id="explore" className="bg-bg py-12 md:py-16">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div {...fadeInView} className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Geliştirici Profili</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-light text-text-primary mb-3">
          Teknoloji &amp; <em className="font-display italic">istatistikler</em>
        </h2>
        <p className="text-sm text-muted max-w-md">
          Aktif olarak kullandığım teknolojiler ve GitHub istatistiklerim.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* GitHub Stats */}
        <motion.div
          {...fadeInView}
          transition={{ duration: 0.8, delay: 0, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="relative overflow-hidden rounded-3xl border border-stroke bg-surface p-6"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#61DAFB]/5 blur-3xl pointer-events-none" />
          <div className="mb-5 flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            <span className="font-medium text-text-primary">GitHub İstatistikleri</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {githubStats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-white/5 bg-bg p-4"
                style={{ boxShadow: `inset 0 0 20px ${stat.glow}` }}
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle at 30% 30%, ${stat.color}, transparent 70%)` }} />
                <div className="relative text-2xl font-bold tracking-tight" style={{ color: stat.color }}>{stat.value}</div>
                <div className="relative mt-1 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Language Usage */}
        <motion.div
          {...fadeInView}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="relative overflow-hidden rounded-3xl border border-stroke bg-surface p-6"
        >
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#f7df1e]/5 blur-3xl pointer-events-none" />
          <div className="mb-5 flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            <span className="font-medium text-text-primary">En Çok Kullanılan Diller</span>
          </div>
          <div className="space-y-5">
            {langs.map((l, i) => (
              <div key={l.name}>
                <div className="mb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                    <span className="text-sm text-text-primary">{l.name}</span>
                  </div>
                  <span className="text-sm font-medium text-muted">{l.pct}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: l.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          {...fadeInView}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="relative overflow-hidden rounded-3xl border border-stroke bg-surface p-6"
        >
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />
          <div className="mb-5 flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            <span className="font-medium text-text-primary">Teknoloji Stack</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-1.5 rounded-xl border border-white/5 bg-bg p-2 transition-all duration-200 hover:border-white/15 hover:scale-105"
              >
                <div className="transition-transform duration-200 group-hover:scale-110">{tech.icon}</div>
                <span className="w-full truncate text-center text-[9px] text-muted group-hover:text-slate-300 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExplorationsSection;
