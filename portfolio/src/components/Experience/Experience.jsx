import PositivoImage from "../../assets/images/PositivoS+.png";
import BrqImage from "../../assets/images/BRQ.jpg";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
  {
    role: "Técnico de Suporte de T.I",
    company: "Positivo S+",
    period: "Fevereiro 2025 - Março 2025",
    image: PositivoImage,
    description:
      "Atuação na área de suporte técnico, prestando atendimento a usuários para resolução de problemas relacionados a hardware, software e redes. Realizei diagnósticos, manutenção preventiva e corretiva de equipamentos, além de configurar sistemas e dar suporte em ambientes corporativos.",
  },
  {
    role: "Estagiário em Desenvolvimento",
    company: "BRQ Digital Solutions",
    period: "Abril 2025 - Atualmente",
    image: BrqImage,
    description:
      "Atuação na área de desenvolvimento de soluções de T.I. Participo de times ágeis contribuindo com novas funcionalidades, manutenção de código, correções de bugs e code reviews. Colaboração constante com desenvolvedores e analistas para entrega de soluções eficientes e escaláveis.",
  },
];

  return (
    <section
      id="experiencia"
      className="w-full max-w-5xl mx-auto px-4 py-16 mt-[10%]"
    >
      <h3 className="text-3xl font-poppins-bold text-white mb-12 text-center">
        Experiência
      </h3>
      <div className="relative max-w-4xl mx-auto">
        {/* Linha vertical - oculta no mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-white opacity-30"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ amount: 0.2 }}
            className={`mb-12 flex flex-col md:flex-row items-center w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div
                className={`text-center md:text-right px-4 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                {/* Espaço para texto extra se quiser */}
              </div>
            </div>

            {/* Bolinha - oculta no mobile */}
            <div className="relative z-10 hidden md:block">
              <div className="w-5 h-5 rounded-full bg-brand-blue shadow-md bg-white opacity-35"></div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <div
                className={`bg-[#1A1A1A] p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-12 h-12 object-contain rounded-md shadow-md"
                  />
                  <div>
                    <h4 className="text-xl font-poppins-semibold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-brand-blue text-white opacity-60 text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <p className="text-white opacity-50 text-sm mb-2">
                  {exp.description}
                </p>
                <p className="text-white opacity-80 text-sm">{exp.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
