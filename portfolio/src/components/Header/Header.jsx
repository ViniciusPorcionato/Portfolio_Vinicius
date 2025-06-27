import { useState, useEffect } from "react";
import MinhaLogo from "../../assets/images/MinhaLogo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="text-white p-4 z-50 relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <img
          src={MinhaLogo}
          alt="Logo escrito Vinicius Porcionato"
          className="w-20 md:w-28 object-contain"
        />

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 font-poppins text-sm">
          <a className="hover:text-[#007CED]" href="#sobre">Sobre</a>
          <a className="hover:text-[#007CED]" href="#experiencia">Experiência</a>
          <a className="hover:text-[#007CED]" href="#tecnologias">Tecnologias</a>
          <a className="hover:text-[#007CED]" href="#formacao">Formação</a>
          <a className="hover:text-[#007CED]" href="#projetos">Projetos</a>
          <a className="hover:text-[#007CED]" href="#contato">Contato</a>
        </nav>

        {/* Botão hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none z-50"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out bg-white ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out bg-white ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out bg-white ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 h-screen w-[70%] sm:w-1/2 bg-[#1a1a1ae6] border-l-4 border-[#007CED] p-6 box-border font-poppins text-white md:hidden shadow-xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-lg mt-16 break-words">
              <a href="#sobre" onClick={() => setOpen(false)} className="hover:text-[#007CED] transition-colors duration-200">Sobre</a>
              <a href="#experiencia" onClick={() => setOpen(false)} className="hover:text-[#007CED] transition-colors duration-200">Experiência</a>
              <a href="#formacao" onClick={() => setOpen(false)} className="hover:text-[#007CED] transition-colors duration-200">Formação</a>
              <a href="#tecnologias" onClick={() => setOpen(false)} className="hover:text-[#007CED] transition-colors duration-200">Tecnologias</a>
              <a href="#projetos" onClick={() => setOpen(false)} className="hover:text-[#007CED] transition-colors duration-200">Projetos</a>
              <a href="#contato" onClick={() => setOpen(false)} className="hover:text-[#007CED] transition-colors duration-200">Contato</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
