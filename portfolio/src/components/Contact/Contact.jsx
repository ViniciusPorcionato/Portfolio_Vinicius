import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer
      id="contato"
      className="py-12 "
    >
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-poppins-bold text-white mb-8">Contato</h3>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-12 text-gray-text mb-10">
          <div className="flex items-center space-x-2">
            <BsFillTelephoneFill color="white" />
            <span className="text-white opacity-80 font-poppins-semibold">
              (11) 93203-2962
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail color="white" />
            <span className="text-white opacity-80 font-poppins-semibold">
              porcionatovinicius@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt color="white" />
            <span className="text-white opacity-80 font-poppins-semibold">
              São Paulo, Brasil
            </span>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center space-x-6 mb-10 overflow-hidden">
          <a
            href="https://github.com/ViniciusPorcionato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-blue transition-transform duration-200 opacity-80 hover:opacity-100 hover:scale-105"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-porcionato/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-blue transition-transform duration-200 opacity-80 hover:opacity-100 hover:scale-105"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/vn.porci_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-blue transition-transform duration-200 opacity-80 hover:opacity-100 hover:scale-105"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <p className="text-white opacity-20 font-poppins">
          © 2025 Vinicius Porcionato. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
