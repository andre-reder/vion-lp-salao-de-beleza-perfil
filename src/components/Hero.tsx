import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, MapPin } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { SALON, whatsappLink } from "./lib";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.55]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#F5EFE6] pt-1 pb-2 sm:pt-4 sm:pb-6 md:py-10"
    >
      {/* ambient decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(164,86,95,0.18), rgba(201,168,124,0.10) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(138,154,123,0.18), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-5 sm:px-8 md:grid-cols-12 md:gap-10 lg:px-12">
        {/* Editorial text column */}
        <motion.div
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 order-1 md:col-span-6"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="eyebrow text-[#A4565F]">Atelier de Beleza · {SALON.city}</span>
            <span className="h-px w-10 bg-[#A4565F]/40" />
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-3 text-[1.35rem] font-light leading-[1.08] tracking-tight text-[#2A2018] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.5rem]"
          >
            Seu perfil,
            <br />
            <span className="italic font-normal text-[#A4565F]">nossa</span>{" "}
            <span className="font-semibold">assinatura.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-[#6B5D52] sm:mt-4 sm:text-sm"
          >
            Um salão onde cada corte, cor e tratamento nasce do seu rosto, do seu
            cotidiano e da sua personalidade. Nada de fórmulas prontas — só a sua
            melhor versão, desenhada com intenção.
          </motion.p>

          <motion.div variants={item} className="mt-4 flex flex-row flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
            <MagneticButton
              href={whatsappLink("Olá! Gostaria de agendar um horário no Salão de Beleza Perfil.")}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Agendar pelo WhatsApp"
              className="group inline-flex items-center gap-2 rounded-full bg-[#A4565F] px-5 py-3 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(164,86,95,0.30)] transition-colors duration-300 hover:bg-[#7E3B44] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <MessageCircle size={16} />
              Agendar meu horário
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>

            <a
              href="#servicos"
              aria-label="Ver serviços"
              className="inline-flex items-center gap-2 rounded-full bg-[#2A2018] px-5 py-3 text-xs font-semibold text-[#FBF7F0] transition-colors duration-300 hover:bg-[#A4565F] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Ver serviços
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-5 hidden items-center gap-4 sm:flex"
          >
            <div className="flex items-center gap-1 text-[#A4565F]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs text-[#6B5D52]">
              <span className="font-semibold text-[#2A2018]">Beleza com assinatura autoral</span> —
              cortes, cor e cuidado sob medida em São José dos Campos.
            </p>
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative order-2 md:col-span-6 md:order-2"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_30px_80px_rgba(42,32,24,0.18)]">
            <motion.img
              src={SALON.image.url}
              alt={SALON.image.alt}
              loading="eager"
              style={{ y: imgY, scale: imgScale }}
              className="h-40 w-full object-cover sm:h-80 sm:max-h-[340px] md:h-96 md:max-h-[480px] lg:h-[58vh] lg:max-h-[560px]"
            />
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-[#1A130E]/70 via-[#1A130E]/10 to-transparent"
            />

            {/* floating editorial caption */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute bottom-4 left-4 right-4 flex flex-col items-start gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-3"
            >
              <div className="max-w-full rounded-lg bg-[#1A130E]/70 px-3 py-2 backdrop-blur-sm lg:max-w-[85%]">
                <p className="font-display text-sm italic text-[#F4EFE6]">
                  "O espaço é parte do ritual."
                </p>
              </div>
              <div className="flex items-center gap-1.5 self-start rounded-full bg-white/20 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-white backdrop-blur-sm lg:self-auto">
                <MapPin size={11} /> {SALON.city}
              </div>
            </motion.div>
          </div>

          {/* editorial numeral */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-6 -left-3 select-none font-display text-[5rem] font-light leading-none text-[#A4565F]/15 sm:text-[7rem] lg:-left-8"
          >
            01
          </div>
        </motion.div>
      </div>
    </section>
  );
}
