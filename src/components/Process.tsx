import { motion } from "framer-motion";
import { CalendarClock, MessageSquare, Scissors, Sparkles } from "lucide-react";
import { whatsappLink, SALON } from "./lib";

const STEPS = [
  {
    icon: CalendarClock,
    n: "01",
    t: "Agende sua visita",
    d: "Escolha o melhor horário pelo WhatsApp. Já na mensagem, conte o que você quer mudar — isso nos ajuda a reservar o tempo certo para o seu atendimento.",
  },
  {
    icon: MessageSquare,
    n: "02",
    t: "Consulta & diagnóstico",
    d: "Conversamos sobre seu cotidiano, histórico capilar e expectativa. Avaliamos o fio, o couro cabeludo e o formato do rosto antes de propor qualquer técnica.",
  },
  {
    icon: Scissors,
    n: "03",
    t: "Execução com calma",
    d: "O serviço acontece no tempo que ele precisa — sem atropelos. Você acompanha cada etapa e pode ajustar a direção no meio do caminho, sem constrangimento.",
  },
  {
    icon: Sparkles,
    n: "04",
    t: "Acabamento & dicas",
    d: "Finalizamos com a escova ou penteado que valoriza o corte e ensinamos a reproduzir o efeito em casa. Você sai sabendo cuidar do resultado.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative bg-[#F5EFE6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow text-[#A4565F]">Processo · Capítulo 05</span>
          <h2 className="font-display mt-4 text-[2rem] font-light leading-tight tracking-tight text-[#2A2018] sm:text-[3rem]">
            Do primeiro olá ao espelho final.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B5D52]">
            Um caminho simples e transparente. Você sabe o que esperar em cada etapa —
            e o que vai acontecer depois de mandar aquela primeira mensagem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-[#E5DCCF] bg-[#FBF7F0] p-7 transition-colors duration-300 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A4565F]/10 text-[#A4565F] transition-colors duration-300 group-hover:bg-[#A4565F] group-hover:text-white">
                    <Icon size={18} />
                  </span>
                  <span className="font-display text-2xl font-light text-[#A4565F]/30">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-lg font-medium text-[#2A2018]">
                  {s.t}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B5D52]">
                  {s.d}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-[#2A2018] p-7 text-[#F4EFE6] sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div>
            <h3 className="font-display text-xl font-medium sm:text-2xl">
              Pronta para começar pelo passo 01?
            </h3>
            <p className="mt-2 text-sm text-[#F4EFE6]/70">
              Resposta rápida pelo WhatsApp. Atendimento com hora marcada em {SALON.city}.
            </p>
          </div>
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma visita no Salão de Beleza Perfil.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#A4565F] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#C9A87C] hover:text-[#2A2018]"
          >
            Agendar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
