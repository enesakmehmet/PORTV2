import { Github, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/enesakmehmet",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/enes-akmehmet-a061bb206/?skipRedirect=true",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/enesakmehmt/",
  },
];

const PageFooterBar = () => {
  return (
    <div className="mx-auto mt-16 max-w-[1200px] px-6 pb-8 md:px-10 lg:px-16 md:pb-12">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-stroke pt-8 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
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
                target="_blank"
                rel="noopener noreferrer"
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
  );
};

export default PageFooterBar;
