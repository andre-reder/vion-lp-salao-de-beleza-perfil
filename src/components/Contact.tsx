import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock, Camera, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { SALON, whatsappLink } from "./lib";

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#F5EFE6] py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(138,154,123,0.22), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* CTA / invitation */}
          <div>
            <span className="eyebrow text-[#A4565F]">Contato · Capítulo 09</span>
            <h2 className="font-display mt-4 text-[2.2rem] font-light leading-[1.05] tracking-tight text-[#2A2018] sm:text-[3.4rem]">
              Vamos desenhar
              <br />
              o seu <span className="italic text-[#A4565F]">perfil</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#6B5D52]">
              Agende sua visita pelo WhatsApp ou ligue para conversar com a gente.
              Atendimento com hora marcada em {SALON.city} — sem fila, sem pressa,
              com a atenção que o seu cabelo merece.
            </p>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-3">
              <MagneticButton
                href={whatsappLink("Olá! Gostaria de agendar um horário no Salão de Beleza Perfil.")}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Agendar pelo WhatsApp"
                className="group inline-flex items-center gap-2 rounded-full bg-[#A4565F] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(164,86,95,0.30)] transition-colors duration-300 hover:bg-[#7E3B44]"
              >
                <MessageCircle size={16} />
                Agendar pelo WhatsApp
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>

              <a
                href={`tel:+${SALON.phone}`}
                aria-label={`Ligar para ${SALON.phoneDisplay}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#2A2018] px-6 py-3.5 text-sm font-semibold text-[#FBF7F0] transition-colors duration-300 hover:bg-[#A4565F]"
              >
                <Phone size={15} />
                {SALON.phoneDisplay}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex gap-3.5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A4565F]/10 text-[#A4565F]">
                  <MapPin size={17} />
                </span>
                <div>
                  <h3 className="font-display text-base font-medium text-[#2A2018]">Onde estamos</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6B5D52]">
                    {SALON.city} e região. Endereço completo confirmado no momento do agendamento.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8A9A7B]/15 text-[#8A9A7B]">
                  <Clock size={17} />
                </span>
                <div>
                  <h3 className="font-display text-base font-medium text-[#2A2018]">Atendimento</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6B5D52]">
                    Com hora marcada. Horários confirmados no agendamento, conforme a disponibilidade da semana.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A4565F]/10 text-[#A4565F]">
                  <Phone size={17} />
                </span>
                <div>
                  <h3 className="font-display text-base font-medium text-[#2A2018]">Telefone</h3>
                  <a
                    href={`tel:+${SALON.phone}`}
                    className="mt-1 block text-sm leading-relaxed text-[#6B5D52] transition-colors hover:text-[#A4565F]"
                  >
                    {SALON.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8A9A7B]/15 text-[#8A9A7B]">
                  <Camera size={17} />
                </span>
                <div>
                  <h3 className="font-display text-base font-medium text-[#2A2018]">Redes</h3>
                  <a
                    href={SALON.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm leading-relaxed text-[#6B5D52] transition-colors hover:text-[#A4565F]"
                  >
                    Facebook do salão
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Visual / map-like panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.5rem] border border-[#E5DCCF] bg-[#2A2018] p-8 text-[#F4EFE6] shadow-[0_30px_80px_rgba(42,32,24,0.18)] sm:p-10"
          >
            {/* decorative grid map */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(#C9A87C 1px, transparent 1px), linear-gradient(90deg, #C9A87C 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(164,86,95,0.4), transparent 50%)",
              }}
            />

            <div className="relative">
              <span className="eyebrow text-[#C9A87C]">{SALON.city}</span>
              <h3 className="font-display mt-4 text-3xl font-light leading-tight sm:text-4xl">
                Um endereço para
                <br />
                o seu ritual de beleza.
              </h3>

              <div className="mt-8 flex items-center gap-3 rounded-xl bg-white/[0.06] p-4 backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A4565F] text-white">
                  <MapPin size={17} />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#F4EFE6]">{SALON.name}</p>
                  <p className="text-xs text-[#F4EFE6]/65">{SALON.city} · São Paulo, Brasil</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "Hora marcada", v: "Sem fila" },
                  { k: "Atendimento", v: "Individual" },
                  { k: "Cidade", v: SALON.city.split(" ")[0] },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl border border-[#C9A87C]/50 bg-white/[0.03] p-4">
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#C9A87C]">
                      {s.k}
                    </p>
                    <p className="font-display mt-1.5 text-lg font-medium">{s.v}</p>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink("Olá! Gostaria de saber o endereço e agendar no Salão de Beleza Perfil.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A87C] transition-colors hover:text-white"
              >
                Pedir endereço e horários pelo WhatsApp
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
