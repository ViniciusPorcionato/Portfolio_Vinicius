import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.footer
      id="contato"
      className="bg-dark-card py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-poppins-bold text-white mb-8">Contato</h3>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 text-gray-text mb-10">
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
        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://github.com/viniciusporcionato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-blue transition-opacity duration-300 opacity-80 hover:opacity-100 hover:scale-105 duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/viniciusporcionato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-blue transition-opacity duration-300 opacity-80 hover:opacity-100 hover:scale-105 duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/viniciusporcionato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-blue transition-opacity duration-300 opacity-80 hover:opacity-100 hover:scale-105 duration-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <p className="text-white opacity-20 font-poppins">
          © 2025 Vinicius Porcionato. Todos os direitos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Contact;
