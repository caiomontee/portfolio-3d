import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["Automações", "WebSites", "ChatBots"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">

      {/* --- DESKTOP VIEW (Mantido intacto) --- */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Olá, sou o Caio
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Desenvolvedor <br /> Focado em Criar
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Digitais e Eficientes
          </motion.p>
        </div>
      </div>

      {/* --- MOBILE VIEW (Corrigido e Ajustado) --- */}
      <div className="flex flex-col items-center space-y-6 md:hidden">
        <motion.p
          className="text-3xl font-medium" // Reduzi levemente para harmonia
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Olá, sou o Caio
        </motion.p>

        <div className="flex flex-col items-center w-full px-2">
          {/* Texto corrigido para igualar ao Desktop */}
          <motion.p
            className="text-3xl font-medium text-center text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Desenvolvedor <br /> Focado em Criar
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="py-2" // Espaçamento extra para não cortar animação
          >
            {/* Fonte reduzida para 4xl para caber "Automações" */}
            <FlipWords
              words={words}
              className="font-black text-white text-4xl leading-tight"
            />
          </motion.div>

          {/* Correção do typo 'neutral300' para 'neutral-300' */}
          <motion.p
            className="text-2xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Digitais e Eficientes
          </motion.p>
        </div>
      </div>

    </div>
  );
};

export default HeroText;
