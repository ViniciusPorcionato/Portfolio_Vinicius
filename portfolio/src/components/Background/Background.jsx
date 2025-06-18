import SenaiImage from "../../assets/images/Senai.png";
import { motion } from "framer-motion";

const Background = () => {
  const backgrounds = [
    {
      role: "Técnico em Desenvolvimento de Sistemas",
      company: "Senai Informática",
      period: "Janeiro 2023 - Dezembro 2024",
      image: SenaiImage,
      description:
        "Formação técnica focada em desenvolvimento full stack, com lógica de programação, desenvolvimento web (HTML, CSS, JavaScript, React Js, React Native), banco de dados (SQL Server), orientação a objetos com C# e .NET Core, versionamento com Git e planejamento com Trello e AzureDevops. Participei de projetos práticos como o desenvolvimento de sistemas para empresas reais, além de apresentações de pitch, integração com APIs, e criação de soluções para gerenciamento de equipes.",
    },
    {
      role: "Superior em Análise e Desenvolvimento de Sistemas",
      company: "Senai São Paulo",
      period: "Janeiro 2025 - Atualmente",
      image: SenaiImage,
      description:
        "Graduação voltada para o desenvolvimento de soluções tecnológicas, com ênfase em engenharia de software, arquitetura de sistemas e desenvolvimento full stack. A formação abrange bancos de dados relacionais (MySQL) e não relacionais (MongoDB), práticas de DevOps, testes automatizados e versionamento com Git. O curso também enfatiza metodologias ágeis como Scrum e Kanban, além de fomentar a colaboração por meio de projetos integradores, code reviews, pair programming e entrega contínua de aplicações escaláveis voltadas ao mercado.",
    },
  ];

  return (
    <section
      id="formacao"
      className="container mx-auto px-4 bg-[#222222] mt-[10%]"
    >
      <h3 className="text-3xl font-poppins-bold text-white text-center">
        Formação Acadêmica
      </h3>
      <div className="relative max-w-4xl mt-10 mx-auto">
        {/* Linha vertical - oculta no mobile */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white opacity-30"></div>

        {backgrounds.map((back, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ amount: 0.2 }}
            className={`mb-12 flex flex-col ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-6`}
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div
                className={`${
                  index % 2 === 0 ? "text-right pr-0 md:pr-8" : "hidden"
                }`}
              ></div>
            </div>

            {/* Bolinha - oculta no mobile */}
            <div className="relative z-10 hidden md:block">
              <div className="w-4 h-4 rounded-full bg-white opacity-35"></div>
            </div>

            <div className="w-full md:w-1/2">
              <div
                className={`bg-[#1A1A1A] p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? "ml-0 md:ml-8" : "mr-0 md:mr-8"
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={back.image}
                    alt={back.company}
                    className="w-12 h-12 object-contain rounded-md shadow-md"
                  />
                  <div>
                    <h4 className="text-xl font-poppins-semibold text-white">
                      {back.role}
                    </h4>
                    <p className="text-brand-blue text-white opacity-60 text-sm">
                      {back.company}
                    </p>
                  </div>
                </div>
                <p className="text-white opacity-50 text-sm">
                  {back.description}
                </p>
                <p className="text-white opacity-80 text-sm mt-2">
                  {back.period}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Background;
