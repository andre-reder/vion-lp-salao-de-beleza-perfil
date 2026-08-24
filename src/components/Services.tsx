import { motion } from "framer-motion";
import {
  Scissors,
  Palette,
  Sparkles,
  Wind,
  Leaf,
  Crown,
  ArrowUpRight,
} from "lucide-react";
import { whatsappLink } from "./lib";

const SERVICES = [
  {
    icon: Scissors,
    n: "01",
    title: "Corte autoral",
    tag: "Feminino · Masculino",
    desc: "Cortes desenhados a partir do seu formato facial, densidade do fio e estilo de vida. Trabalhamos o caimento natural para que o visual se mantenha bonito mesmo crescendo — sem depender de fixador nem de uma hora em frente ao espelho toda manhã.",
  },
  {
    icon: Palette,
    n: "02",
    title: "Coloração & mechas",
    tag: "Personalizada",
    desc: "Coloração sob medida, considerando tom de pele, olhos e personalidade. Mechas, ombrè e balayage com técnica de baixa amônia e cuidado com a fibra. O resultado é uma cor que ilumina o rosto e cresce sem marcar uma linha dura na raiz.",
  },
  {
    icon: Sparkles,
    n: "03",
    title: "Tratamentos profundos",
    tag: "Reconstrução",
    desc: "Protocolos de hidratação, nutrição e reconstrução escolhidos conforme o diagnóstico do seu fio. Botox, cronograma capilar e cauterização para devolver brilho, movimento e força — sempre com produtos profissionais e sem promessas milagrosas.",
  },
  {
    icon: Wind,
    n: "04",
    title: "Escova & finalização",
    tag: "Para cada ocasião",
    desc: "Escovas que valorizam o corte e duram dias, não horas. Finalização social para eventos, alisamento natural sem danificar e acabamentos com babyliss para ocasiões especiais. Você sai pronta — e com dicas para reproduzir o efeito em casa.",
  },
  {
    icon: Crown,
    n: "05",
    title: "Penteado & noivas",
    tag: "Eventos",
    desc: "Penteados para festas, formaturas e cerimônias. Atendimento com hora marcada, teste prévio do penteado e opção de deslocamento para o local do evento quando combinado. Você é a única cliente daquela cadeira no seu dia.",
  },
  {
    icon: Leaf,
    n: "06",
    title: "Cuidados & cronograma",
    tag: "Acompanhamento",
    desc: "Montamos um cronograma capilar personalizado e acompanhamos a evolução do seu fio entre as visitas. Indicação de produtos para a sua rotina em casa, sem empurrar marcas — só o que faz sentido para o seu fio e seu bolso.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#F5EFE6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow text-[#A4565F]">Serviços · Capítulo 03</span>
            <h2 className="font-display mt-4 max-w-2xl text-[2rem] font-light leading-tight tracking-tight text-[#2A2018] sm:text-[3rem]">
              Uma carta de serviços pensada para o seu perfil.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#6B5D52]">
            Cada serviço começa com uma conversa. Antes de definir técnica, entendemos
            o que você espera do seu cabelo no dia a dia — e o que ele precisa para chegar lá.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.n}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-[#E5DCCF] bg-[#FBF7F0] p-7 shadow-[0_1px_2px_rgba(42,32,24,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(42,32,24,0.10)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A4565F]/10 text-[#A4565F] transition-colors duration-300 group-hover:bg-[#A4565F] group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-3xl font-light text-[#A4565F]/25">
                    {s.n}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-xl font-medium text-[#2A2018]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B5D52]">
                  {s.desc}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#E5DCCF] pt-4">
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#8A9A7B]">
                    {s.tag}
                  </span>
                  <a
                    href={whatsappLink(
                      `Olá! Tenho interesse no serviço de ${s.title} no Salão de Beleza Perfil.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-[#2A2018] px-3 py-1.5 text-xs font-semibold text-[#FBF7F0] transition-colors group-hover:bg-[#A4565F] group-hover:text-white"
                    aria-label={`Agendar ${s.title}`}
                  >
                    Agendar
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="relative z-10 mx-auto mt-16 max-w-2xl w-full px-4 text-center text-xs leading-relaxed text-[#6B5D52]">
          Não encontrou o que procura? Temos serviços complementares como progressiva,
          relaxamento, sobrancelha e maquiagem. Pergunte pelo WhatsApp — montamos o
          atendimento ideal para você.
        </p>
      </div>
    </section>
  );
}
