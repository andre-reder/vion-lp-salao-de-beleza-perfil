import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Como faço para agendar um horário?",
    a: "O agendamento é feito pelo WhatsApp. Escolhemos esse canal para que você já possa descrever o que procura, o que nos ajuda a reservar o tempo adequado para o seu atendimento. Respondemos durante o horário de funcionamento.",
  },
  {
    q: "Vocês atendem com hora marcada ou por ordem de chegada?",
    a: "Sempre com hora marcada. Esse é um dos pilares do nosso atendimento: cada horário é reservado para uma única cliente, para que o serviço aconteça com calma e sem fila de espera.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos dinheiro, cartões de débito e crédito, Pix e, quando disponível, parcelamento direto em alguns serviços. Os detalhes são confirmados no momento do agendamento.",
  },
  {
    q: "É possível remarcar ou cancelar um horário?",
    a: "Sim. Pedimos apenas uma avisa prévia para que possamos oferecer o horário a outra cliente. Quanto antes você avisar, mais fácil remarcar para um novo horário que funcione para você.",
  },
  {
    q: "Vocês fazem atendimento a domicílio?",
    a: "O atendimento padrão acontece no salão, onde temos a estrutura completa. Para serviços de penteado para eventos, há possibilidade de deslocamento ao local quando combinado com antecedência.",
  },
  {
    q: "Tem estacionamento próximo?",
    a: "O salão fica em uma região com opções de estacionamento público nas proximidades. No momento do agendamento, podemos indicar os melhores pontos para você chegar sem preocupação.",
  },
  {
    q: "Quanto tempo dura um atendimento?",
    a: "Depende do serviço. Um corte costuma levar entre 45 minutos e 1h15; coloração e mechas variam conforme o comprimento e a técnica. Sempre informamos a duração prevista antes de começar.",
  },
];

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#E5DCCF]">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 rounded-md bg-[#FBF7F0] px-3 py-5 text-left transition-colors hover:bg-white"
      >
        <span className="font-display text-lg font-medium text-[#2A2018] sm:text-xl">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A4565F]/10 text-[#A4565F]"
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-[#6B5D52]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#FBF7F0] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="eyebrow text-[#A4565F]">Dúvidas · Capítulo 08</span>
          <h2 className="font-display mt-4 text-[2rem] font-light leading-tight tracking-tight text-[#2A2018] sm:text-[3rem]">
            Perguntas que costumam aparecer.
          </h2>
          <p className="mx-auto mt-5 max-w-xl w-full text-base leading-relaxed text-[#6B5D52]">
            Reunimos as dúvidas mais comuns antes do primeiro atendimento. Se a sua
            não estiver aqui, mande pelo WhatsApp — respondemos com prazer.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-t border-[#E5DCCF]"
        >
          {FAQS.map((f, i) => (
            <Item
              key={i}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-[#6B5D52]">
          <HelpCircle size={16} className="text-[#A4565F]" />
          Ficou com outra dúvida? Fale com a gente direto pelo WhatsApp.
        </div>
      </div>
    </section>
  );
}
