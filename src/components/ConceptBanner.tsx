import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";

export default function ConceptBanner() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("perfil-concept-closed") === "1") setOpen(false);
    } catch {
      /* ignore */
    }
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem("perfil-concept-closed", "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-40 w-full border-b border-[#C9A87C]/30 bg-[#1A130E] px-4 py-2.5 text-[#F4EFE6]"
          role="note"
        >
          <button
            onClick={close}
            aria-label="Fechar aviso"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#F4EFE6]/70 transition-colors hover:text-[#F4EFE6]"
          >
            <X size={14} />
          </button>
          <div className="mx-auto flex max-w-7xl items-start gap-2.5 pr-8">
            <Info size={15} className="mt-0.5 shrink-0 text-[#C9A87C]" />
            <p className="text-[11px] leading-relaxed text-[#F4EFE6]/85">
              Proposta conceitual não oficial. Conteúdo e dados podem ser fictícios e
              devem ser confirmados antes da publicação.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
