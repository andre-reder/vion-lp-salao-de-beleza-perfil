import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Coffee, Sun, Leaf, Music } from "lucide-react";
import { SALON } from "./lib";

const ATMOS = [
  { icon: Sun, t: "Luz natural", d: "Espelhos posicionados para a luz do dia revelar o verdadeiro tom do seu cabelo." },
  { icon: Leaf, t: "Vegetação viva", d: "Plantas que trazem frescor e ajudam a quebrar a rigidez do ambiente de salão." },
  { icon: Coffee, t: "Café & água", d: "Um café feito na hora enquanto você descansa entre as etapas do serviço." },
  { icon: Music, t: "Trilha sonora", d: "Playlist curada para acompanhar o ritmo do dia — calma de manhã, energia à tarde." },
];

export default function Experience() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "12%"]);
  const numY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["20%", "-20%"]);

  return (
    <section id="experiencia" ref={ref} className="relative overflow-hidden bg-[#FBF7F0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[1.5rem] shadow-[0_30px_80px_rgba(42,32,24,0.16)]"
            >
              <motion.img
                src={SALON.image.url}
                alt={SALON.image.alt}
                loading="lazy"
                style={{ y: imgY }}
                className="h-[44vh] w-full object-cover sm:h-[58vh]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A130E]/30 to-transparent" />
            </motion.div>

            <motion.div
              style={{ y: numY }}
              aria-hidden
              className="pointer-events-none absolute -top-8 -right-2 select-none font-display text-[6rem] font-light leading-none text-[#A4565F]/15 sm:text-[8rem]"
            >
              04
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-5 left-5 rounded-xl bg-[#2A2018] px-5 py-4 text-[#F4EFE6] shadow-xl sm:left-8"
            >
              <p className="font-display text-lg italic">"Um salão que respira."</p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-[#C9A87C]">
                Ambiente pensado por detalhes
              </p>
            </motion.div>
          </div>

          {/* Text side */}
          <div>
            <span className="eyebrow text-[#A4565F]">Experiência · Capítulo 04</span>
            <h2 className="font-display mt-4 text-[2rem] font-light leading-tight tracking-tight text-[#2A2018] sm:text-[3rem]">
              O ambiente é metade do ritual.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#6B5D52]">
              Um espaço amplo, com móveis elegantes e vegetação que suaviza o ar. Aqui
              você não divide atenção com barulho nem com filas — cada horário é
              reservado para que o atendimento aconteça com calma, do diagnóstico ao
              acabamento final.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {ATMOS.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.t}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-3.5"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8A9A7B]/15 text-[#8A9A7B]">
                      <Icon size={16} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-medium text-[#2A2018]">{a.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#6B5D52]">{a.d}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
