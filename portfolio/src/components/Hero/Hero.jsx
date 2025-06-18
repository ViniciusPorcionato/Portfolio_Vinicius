import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profilePic from "../../assets/images/Profile.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
      className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left mt-[8%]"
    >
      <div className="relative mb-8 md:mb-0 md:mr-12">
        <img
          src={profilePic}
          alt="Vinicius Porcionato"
          className="rounded-full w-48 h-48 md:w-80 md:h-80 object-cover shadow-[0_0_30px_rgba(0,114,255,0.6)] hover:scale-105 duration-500 hover:shadow-[0_0_30px_rgba(0,114,255,2)]"
        />
      </div>
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-5xl font-poppins-bold text-white">
          Vinicius Porcionato
        </h2>
        <p className="text-xl text-brand-blue mt-2 font-poppins-semibold text-[#FFFFFF] opacity-30">
          Full-Stack Developer
        </p>
        <p className="text-[#FFFFFF] opacity-70 mt-4 max-w-xl font-poppins">
          Olá mundo, sou o Vinicius Porcionato, um desenvolvedor Full Stack com
          foco em Backend, especializado em criar soluções completas, unindo
          interfaces modernas a sistemas robustos. Apaixonado por tecnologia e
          busco sempre evoluir para entregar projetos de alta performance,
          seguros e com ótima experiência do usuário.
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/vinicius-porcionato/"
            className="text-[#FFFFFF] opacity-80 hover:text-[#007CED] text-3xl transition-colors hover:scale-105 duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ViniciusPorcionato"
            className="text-[#FFFFFF] opacity-80 hover:text-[#007CED] text-3xl transition-colors hover:scale-105 duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/vn.porci_/"
            className="text-[#FFFFFF] opacity-80 hover:text-[#007CED] text-3xl transition-colors hover:scale-105 duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="/Vinicius_Porcionato_CV.pdf"
            download="Vinicius_Porcionato_CV.pdf"
            className="font-poppins text-white opacity-80 border-2 rounded-xl px-4 py-2 hover:border-[#007CED] hover:opacity-100 hover:scale-105 duration-200 hover:shadow-[0_0_30px_rgba(0,114,255,0.8)]"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
