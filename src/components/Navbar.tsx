import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink, cn } from "./lib";

const LINKS = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#servicos", label: "Serviços" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const headerBg = useTransform(
    scrollYProgress,
    [0, 0.02],
    ["rgba(245, 239, 230, 0.92)", "rgba(245, 239, 230, 0.95)"]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg }}
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300",
          scrolled ? "border-[#E5DCCF]" : "border-transparent"
        )}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a href="#topo" className="group flex shrink-0 items-baseline gap-2" aria-label="Perfil — início">
            <span className="font-display text-[1.4rem] font-semibold leading-none tracking-tight text-[#2A2018]">
              Perfil
            </span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.24em] text-[#A4565F] sm:inline sm:text-[0.62rem] sm:tracking-[0.28em]">
              Atelier de Beleza
            </span>
          </a>

          <ul className="hidden min-w-0 flex-1 items-center gap-6 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:flex lg:gap-7">
            {LINKS.map((l) => (
              <li key={l.href} className="shrink-0">
                <a
                  href={l.href}
                  className={cn(
                    "group relative text-[0.7rem] font-medium tracking-wide transition-colors duration-200 sm:text-[0.78rem] lg:text-[0.82rem]",
                    active === l.href ? "text-[#A4565F]" : "text-[#2A2018]/85 hover:text-[#2A2018]"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-[#A4565F] transition-transform duration-300 ease-out",
                      active === l.href ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                    )}
                    style={{ transformOrigin: "left" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink("Olá! Gostaria de agendar um horário no Salão de Beleza Perfil.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-[#A4565F] px-4 py-2.5 text-[0.78rem] font-semibold text-white shadow-[0_6px_20px_rgba(164,86,95,0.28)] transition-all duration-300 hover:bg-[#7E3B44] hover:shadow-[0_10px_28px_rgba(164,86,95,0.36)] sm:px-5 sm:text-[0.8rem]"
            aria-label="Agendar pelo WhatsApp"
          >
            <MessageCircle size={15} className="shrink-0" />
            <span className="whitespace-nowrap">Agendar</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </nav>

        {/* Scroll progress */}
        <motion.div
          className="h-[2px] origin-left bg-gradient-to-r from-[#A4565F] via-[#C9A87C] to-[#8A9A7B]"
          style={{ scaleX: progress }}
        />
      </motion.header>
    </>
  );
}
