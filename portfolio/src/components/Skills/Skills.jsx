import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { SiNodered } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const SkillCard = ({ name, icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ amount: 0.2 }}
    className="bg-dark-card text-white p-6 rounded-xl flex flex-col items-center justify-center text-light-text font-semibold hover:bg-brand-blue/80 transition-all cursor-pointer shadow-md hover:scale-105 duration-200 hover:text-[#007CED] hover:shadow-[0_0_30px_rgba(0,114,255,0.8)]"
  >
    <div className="text-4xl mb-3 text-brand-blue">{icon}</div>
    <span className="text-center text-sm font-poppins">{name}</span>
  </motion.div>
);

const Skills = () => {
  const frontendSkills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <DiJavascript />,
    },
    {
      name: "React Js",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      name: "React Native",
      icon: <FaReact />,
    },
  ];
  const backendSkills = [
    {
      name: "CSharp",
      icon: <TbBrandCSharp />,
    },
    {
      name: "DotNet",
      icon: <AiOutlineDotNet />,
    },
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpring />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Node Js",
      icon: <FaNode />,
    },
    {
      name: "SQL Server",
      icon: <DiMsqlServer />,
    },
    {
      name: "MySQL",
      icon: <DiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ];
  const otherSkills = [
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "AzureDevops",
      icon: <VscAzureDevops />,
    },
    {
      name: "Trello",
      icon: <FaTrello />,
    },
    {
      name: "Node-Red",
      icon: <SiNodered />,
    },
    {
      name: "Jupyter",
      icon: <SiJupyter />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ];

  return (
    <section id="tecnologias" className="container mx-auto px-4 py-16">
      <h3 className="text-3xl font-poppins-bold text-white mb-12 text-center">
        Tecnologias
      </h3>

      <div className="max-w-4xl mx-auto mt-[10%]">
        <div className="mb-10">
          <h4 className="text-2xl font-poppins-semibold text-white mb-6">
            Front-end skills
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h4 className="text-2xl font-poppins-semibold text-white mb-6">
            Back-end skills
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-poppins-semibold text-white mb-6">
            Outros
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
