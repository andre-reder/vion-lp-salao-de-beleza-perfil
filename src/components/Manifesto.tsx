import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Scissors } from "lucide-react";

const STATEMENT =
  "Não fazemos o corte da vez. Fazemos o corte que continua certo daqui a três meses — porque nasceu do seu perfil, não de uma tendência.";

function Word({
  word,
  range,
  progress,
  reduce,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const opacity = useTransform(
    progress,
    reduce ? [0, 0.01] : range,
    reduce ? [1, 1] : [0.18, 1]
  );
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

export default function Manifesto() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative overflow-hidden bg-[#1A130E] py-24 text-[#F4EFE6] sm:py-32"
    >
      {/* ambient texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C9A87C 0, transparent 40%), radial-gradient(circle at 80% 70%, #A4565F 0, transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <Scissors size={16} className="text-[#C9A87C]" />
          <span className="eyebrow text-[#C9A87C]">Manifesto · Capítulo 02</span>
        </motion.div>

        <h2 className="font-display mt-8 text-[1.7rem] font-light leading-[1.25] tracking-tight sm:text-[2.6rem] lg:text-[3.4rem]">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                word={w}
                range={[start, end]}
                progress={scrollYProgress}
                reduce={reduce}
              />
            );
          })}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {[
            {
              k: "Olhar",
              t: "Cada cliente é um estudo.",
              d: "Antes da tesoura, conversamos sobre seu cotidiano, seu rosto, o tempo que você tem pela manhã. A beleza precisa caber na sua vida real.",
            },
            {
              k: "Técnica",
              t: "Fundamento antes de moda.",
              d: "Cortes respeitando o caimento natural do fio. Coloração com previsibilidade e cuidado com a fibra. Resultado que envelhece bem.",
            },
            {
              k: "Ritual",
              t: "O tempo é seu.",
              d: "Sem pressa, sem superlotação. Você é a única cliente daquela cadeira durante todo o atendimento — do começo ao acabamento.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-white/15 pt-5"
            >
              <span className="eyebrow text-[#C9A87C]">{c.k}</span>
              <h3 className="font-display mt-3 text-xl font-medium text-[#F4EFE6]">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
