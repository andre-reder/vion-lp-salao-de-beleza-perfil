import { MessageCircle, Phone, MapPin, Camera, ArrowUp } from "lucide-react";
import { SALON, whatsappLink } from "./lib";

const NAV = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#servicos", label: "Serviços" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1A130E] pt-20 pb-10 text-[#F4EFE6]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #A4565F, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#topo" className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold leading-none tracking-tight">
                Perfil
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[#C9A87C]">
                Atelier de Beleza
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F4EFE6]/65">
              Um salão onde cada cliente é tratada como um perfil único. Cortes,
              coloração e tratamentos sob medida em {SALON.city}.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de agendar um horário no Salão de Beleza Perfil.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#A4565F] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#7E3B44]"
              >
                <MessageCircle size={15} />
                Agendar
              </a>
              <a
                href={`tel:+${SALON.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9A87C] bg-[#F4EFE6] px-5 py-3 text-sm font-semibold text-[#1A130E] transition-colors duration-300 hover:bg-[#C9A87C] hover:text-[#1A130E]"
              >
                <Phone size={15} />
                {SALON.phoneDisplay}
              </a>
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label="Navegação do rodapé">
            <h3 className="eyebrow text-[#C9A87C]">Navegação</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#F4EFE6]/70 transition-colors hover:text-[#C9A87C]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="eyebrow text-[#C9A87C]">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#F4EFE6]/70">
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#C9A87C]" />
                <a href={`tel:+${SALON.phone}`} className="transition-colors hover:text-[#C9A87C]">
                  {SALON.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="text-[#C9A87C]" />
                {SALON.city} · São Paulo
              </li>
              <li className="flex items-center gap-3">
                <Camera size={15} className="text-[#C9A87C]" />
                <a
                  href={SALON.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#C9A87C]"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#F4EFE6]/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SALON.name}. Proposta conceitual — conteúdo
            ilustrativo, não oficial.
          </p>
          <a
            href="#topo"
            className="group inline-flex items-center gap-1.5 text-[#F4EFE6]/70 transition-colors hover:text-[#C9A87C]"
          >
            Voltar ao topo
            <ArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="mt-4 text-[0.7rem] leading-relaxed text-[#F4EFE6]/35">
          Fotografia de ambiente:{" "}
          <a
            href={SALON.image.photographerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-[#C9A87C]"
          >
            {SALON.image.photographer}
          </a>{" "}
          / Pexels.
        </p>
      </div>
    </footer>
  );
}
