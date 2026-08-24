import { motion } from "framer-motion";
import { UserCheck, Clock, ShieldCheck, HeartHandshake, Leaf, Sparkles } from "lucide-react";

const REASONS = [
  {
    icon: UserCheck,
    t: "Atendimento individual",
    d: "Um profissional dedicado a você do início ao fim. Sem revezamento, sem passar a tesoura para outra mão no meio do corte.",
  },
  {
    icon: Clock,
    t: "Hora marcada, sem fila",
    d: "Reservamos o horário só seu. Você não fica esperando na recepção enquanto o salão atende três pessoas ao mesmo tempo.",
  },
  {
    icon: ShieldCheck,
    t: "Técnica com previsibilidade",
    d: "Trabalhamos com diagnóstico prévio e produtos profissionais. O que combinamos no começo é o que você recebe no fim — sem surpresas.",
  },
  {
    icon: HeartHandshake,
    t: "Sem venda forçada",
    d: "Indicamos produtos e serviços só quando fazem sentido para o seu fio e seu bolso. A confiança vale mais que uma venda a mais.",
  },
  {
    icon: Leaf,
    t: "Cuidado com o fio",
    d: "Priorizamos a saúde capilar. Coloração de baixa amônia, tratamentos progressivos e cronograma personalizado para o cabelo durar.",
  },
  {
    icon: Sparkles,
    t: "Resultado que envelhece bem",
    d: "Cortes e cores pensados para crescer com graça. Você não precisa voltar correndo porque a raiz ficou feia em duas semanas.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-[#1A130E] py-24 text-[#F4EFE6] sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #A4565F, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow text-[#C9A87C]">Diferenciais · Capítulo 06</span>
          <h2 className="font-display mt-4 text-[2rem] font-light leading-tight tracking-tight sm:text-[3rem]">
            Por que o Perfil não é mais um salão.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#F4EFE6]/70">
            A diferença não está na cadeira nem no espelho — está na forma como cada
            atendimento é conduzido. Aqui, o que importa é o resultado que você leva
            para casa e carrega por semanas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-[#C9A87C]/50 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#C9A87C] hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A87C]/15 text-[#C9A87C] transition-colors duration-300 group-hover:bg-[#C9A87C] group-hover:text-[#1A130E]">
                  <Icon size={18} />
                </span>
                <h3 className="font-display mt-5 text-lg font-medium text-[#F4EFE6]">
                  {r.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/65">
                  {r.d}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
