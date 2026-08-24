import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "./lib";

const REVIEWS = [
  {
    name: "Mariana Lopes",
    role: "Cliente · cortes e coloração",
    stars: 5,
    text: "Saí com o corte mais elogiado dos últimos anos. A profissional realmente olhou pro meu rosto e pro meu dia a dia antes de cortar. Não é um corte de revista — é o meu corte.",
  },
  {
    name: "Camila Andrade",
    role: "Cliente · tratamento e escova",
    stars: 5,
    text: "O ambiente é tranquilo, sem aquela correria de salão. Tomei um café, conversei, saí com o cabelo recuperado e com dicas que funcionaram em casa. Virei cliente fiel.",
  },
  {
    name: "Renata Vasconcelos",
    role: "Cliente · mechas balayage",
    stars: 5,
    text: "Fiquei com medo de mechas porque já tinha queimado o cabelo em outro lugar. Aqui o resultado ficou natural, iluminou o rosto e cresceu sem marcar raiz. Profissionalismo do começo ao fim.",
  },
  {
    name: "Patrícia Mendes",
    role: "Cliente · penteado para evento",
    stars: 4,
    text: "Fiz um penteado para um casamento e seguiu impecável a noite toda. Tirei uma estrela só porque tive que remarcar uma vez, mas resolveram direitinho. Recomendo de olhos fechados.",
  },
  {
    name: "Juliana Rocha",
    role: "Cliente · corte masculino",
    stars: 5,
    text: "Levei meu marido e ele, que detesta salão, voltou sozinho. Disse que foi o primeiro corte que cresceu bonito e não precisou voltar correndo. Agora a casa inteira é cliente.",
  },
];

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % REVIEWS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = setInterval(next, 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduce, next]);

  const current = REVIEWS[index];

  return (
    <section
      id="depoimentos"
      className="relative bg-[#F5EFE6] py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow text-[#A4565F]">Depoimentos · Capítulo 07</span>
            <h2 className="font-display mt-4 max-w-2xl text-[2rem] font-light leading-tight tracking-tight text-[#2A2018] sm:text-[3rem]">
              Quem já encontrou o seu perfil.
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-[#6B5D52]">
            Avaliações ilustrativas, representativas do que clientes do segmento
            costumam relatar. Conteúdo conceitual, não depoimentos reais.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Main carousel card */}
          <div
            className="lg:col-span-8"
            aria-roledescription="carousel"
            aria-label="Depoimentos de clientes"
          >
            <div className="relative min-h-[20rem] overflow-hidden rounded-3xl border border-[#E5DCCF] bg-[#FBF7F0] p-8 shadow-[0_24px_60px_rgba(42,32,24,0.08)] sm:p-12">
              <Quote
                size={56}
                className="absolute -top-2 left-6 text-[#A4565F]/15"
                strokeWidth={1}
              />

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="flex items-center gap-1 text-[#A4565F]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < current.stars ? "currentColor" : "none"}
                        strokeWidth={1.5}
                        className={i < current.stars ? "" : "text-[#A4565F]/30"}
                      />
                    ))}
                  </div>

                  <p className="font-display mt-6 text-xl font-light leading-relaxed text-[#2A2018] sm:text-2xl">
                    "{current.text}"
                  </p>

                  <footer className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A4565F] font-display text-lg font-medium text-white">
                      {current.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-medium text-[#2A2018]">{current.name}</p>
                      <p className="text-xs text-[#6B5D52]">{current.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between border-t border-[#E5DCCF] pt-5">
                <div className="flex items-center gap-2" aria-hidden>
                  {REVIEWS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Ir para depoimento ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-[#A4565F]" : "w-2.5 bg-[#2A2018]/40 hover:bg-[#2A2018]/70"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Depoimento anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A2018] text-[#FBF7F0] transition-colors hover:bg-[#A4565F]"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próximo depoimento"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A2018] text-[#FBF7F0] transition-colors hover:bg-[#A4565F]"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side CTA */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#2A2018] p-8 text-[#F4EFE6] lg:col-span-4">
            <div>
              <span className="eyebrow text-[#C9A87C]">A sua vez</span>
              <h3 className="font-display mt-4 text-2xl font-light leading-snug">
                Que tal a sua história ser a próxima aqui do lado?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F4EFE6]/70">
                Agende uma conversa sem compromisso. A gente avalia seu fio, entende
                sua rotina e propõe o caminho mais honesto para o resultado que você busca.
              </p>
            </div>
            <a
              href={whatsappLink("Olá! Vi os depoimentos e gostaria de agendar no Salão de Beleza Perfil.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#A4565F] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#C9A87C] hover:text-[#2A2018]"
            >
              <MessageCircle size={16} />
              Quero o meu perfil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
