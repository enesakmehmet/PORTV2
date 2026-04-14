import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const navLinks = ["Ana Sayfa", "Hakkımda", "Yetenekler", "Projeler", "Sertifikalar", "Zaman Çizelgesi", "Mesajlar"];
const navLinkMap: Record<string, string> = {
  "Ana Sayfa": "Home",
  "Hakkımda": "About",
  "Yetenekler": "Skills",
  "Projeler": "Projects",
  "Sertifikalar": "Certificates",
  "Zaman Çizelgesi": "Timeline",
  "Mesajlar": "Messages",
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Ana Sayfa");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/about") {
      setActive("Hakkımda");
      return;
    }

    if (location.pathname === "/skills") {
      setActive("Yetenekler");
      return;
    }

    if (location.pathname === "/projects") {
      setActive("Projeler");
      return;
    }

    if (location.pathname === "/certificates") {
      setActive("Sertifikalar");
      return;
    }

    if (location.pathname === "/timeline") {
      setActive("Zaman Çizelgesi");
      return;
    }

    if (location.pathname === "/messages") {
      setActive("Mesajlar");
      return;
    }

    const hashToLink: Record<string, string> = {
      "#hero": "Home",
      "#works": "About",
      "#journal": "Skills",
      "#explore": "Projects",
      "#stats": "Certificates",
      "#contact": "Messages",
    };

    setActive(hashToLink[location.hash] ?? "Home");
  }, [location.hash, location.pathname]);

  const handleNav = (link: string) => {
    setActive(link);
    const englishLink = navLinkMap[link] ?? link;
    const sectionMap: Record<string, string> = {
      Home: "hero",
      Skills: "journal",
      Projects: "explore",
      Certificates: "stats",
    };

    if (englishLink === "About") {
      navigate("/about");
      setIsOpen(false);
      return;
    }

    if (englishLink === "Skills") {
      navigate("/skills");
      setIsOpen(false);
      return;
    }

    if (englishLink === "Projects") {
      navigate("/projects");
      setIsOpen(false);
      return;
    }

    if (englishLink === "Certificates") {
      navigate("/certificates");
      setIsOpen(false);
      return;
    }

    if (englishLink === "Timeline") {
      navigate("/timeline");
      setIsOpen(false);
      return;
    }

    if (englishLink === "Messages") {
      navigate("/messages");
      setIsOpen(false);
      return;
    }

    navigate(`/#${sectionMap[englishLink]}`);
    setIsOpen(false);
  };

  return (
    <div className="fixed left-4 top-6 z-50">
      <div className="flex items-start gap-[-1px]">
        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((value) => !value)}
          className={`group flex h-16 w-12 items-center justify-center rounded-l-[28px] rounded-r-none border border-white/10 bg-surface/95 backdrop-blur-md transition-all ${
            scrolled ? "shadow-md shadow-black/20" : ""
          }`}
          style={{
            background: "linear-gradient(180deg, rgba(20,24,38,0.98) 0%, rgba(11,15,27,0.98) 100%)",
          }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-bg text-text-primary transition-transform group-hover:scale-105">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </span>
        </button>

        <nav
          className={`ml-[-1px] w-[calc(100vw-56px)] max-w-[280px] overflow-hidden rounded-r-[28px] rounded-l-none border border-white/10 border-l-0 bg-surface/95 backdrop-blur-md transition-all duration-300 ${
            isOpen ? "max-h-[560px] opacity-100 px-4 py-5 sm:px-5" : "pointer-events-none max-h-0 opacity-0 px-4 py-0 sm:px-5"
          } ${scrolled ? "shadow-md shadow-black/20" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="flex items-center gap-3 pb-4">
            <button
              onClick={() => handleNav("Home")}
              className="group relative w-9 h-9 rounded-full p-[2px] hover:scale-110 transition-transform"
              style={{ background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
            >
              <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
                <span className="font-display italic text-[13px] text-text-primary">EA</span>
              </div>
            </button>

            <div className="w-px h-5 bg-stroke" />

            <span className="text-xs uppercase tracking-[0.25em] text-muted">Menü</span>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className={`w-full text-left text-sm sm:text-base rounded-full px-4 py-3 transition-colors ${
                  active === link
                    ? "text-text-primary bg-stroke/50"
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
