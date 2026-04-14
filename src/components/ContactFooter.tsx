import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hls from "hls.js";
import { Github, Linkedin, Instagram } from "lucide-react";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const ContactFooter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    }
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const marqueeText = Array(10).fill("GELECEĞİ İNŞA EDİYORUZ • ").join("");

  return (
    <section id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background video flipped */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div ref={marqueeRef} className="whitespace-nowrap">
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/10">
              {marqueeText}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16 md:mb-24 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display italic text-text-primary mb-6">
            Birlikte üretelim
          </h2>
          <a
            href="mailto:enesakmehmet7@gmail.com"
            className="group relative inline-flex items-center gap-2 rounded-full text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-4 text-text-primary border border-stroke hover:border-transparent transition-all hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient -z-10" />
            <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-5 sm:px-8 py-3 sm:py-4 break-all">
              enesakmehmet7@gmail.com <span>↗</span>
            </span>
          </a>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stroke pt-8">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-sm text-slate-300">© 2026 Enes Akmehmet</div>
            <div className="text-xs text-slate-500">All Rights Reserved</div>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/50 text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
