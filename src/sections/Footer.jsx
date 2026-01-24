import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Linha divisória */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Termos e Privacidade */}
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Ícones Sociais */}
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"             // Abre em nova aba
            rel="noopener noreferrer"   // Segurança e performance
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© 2025 Caio Monte. All rights reserved.</p>
    </section>
  );
};

export default Footer;
