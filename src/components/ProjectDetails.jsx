import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <motion.div
        // AJUSTE FEITO AQUI:
        // Removi 'md:h-auto' e 'md:overflow-visible'.
        // Agora o 'max-h-[90vh]' e 'overflow-y-auto' valem para TODOS.
        // Isso garante que o modal nunca ultrapasse a altura da tela, criando rolagem se necessário.
        className="relative w-full max-w-[95%] md:max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 scrollbar-hide"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-2 right-2 md:top-5 md:right-5 bg-midnight/80 hover:bg-gray-500 transition-colors"
        >
          <img src="assets/close.svg" className="w-5 h-5 md:w-6 md:h-6" alt="Close" />
        </button>

        <img src={image} alt={title} className="w-full h-auto rounded-t-2xl object-cover" />

        <div className="p-4 md:p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold text-white">{title}</h5>

          <p className="mb-3 font-normal text-sm md:text-base text-neutral-400">
            {description}
          </p>

          <div className="space-y-3">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="font-normal text-sm md:text-base text-neutral-400">
                {subDesc}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-8 h-8 md:size-10 hover-animation"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium cursor-pointer text-white hover:text-blue-400 transition-colors"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" alt="Arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
