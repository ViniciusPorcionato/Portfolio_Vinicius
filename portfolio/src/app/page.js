"use client";
import Image from "next/image";
import { useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import Logo from "../../public/Logo.png";
import profileImage from "../../public/profileImage.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-[#02020D] text-white dark-mode"
          : "bg-gray-100 text-[#02020D]"
      } min-h-screen`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5">
        <Image src={Logo} alt="Vinicius Porcionato" width={128} height={128} />
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Sobre</li>
          <li>Habilidades</li>
          <li>Contato</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center mt-10 px-5 pb-[10%] border-b-2">
        <div className=" flex items-center justify-center w-[100%] gap-6">
          <div className="w-[20%] h-[20%] rounded-full overflow-hidden mb-5 md:mb-0 md:mr-10">
            <Image
              src={profileImage}
              alt="Vinicius Porcionato"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="text-center md:text-left w-[40%]">
            <h2 className="text-3xl font-comfortaa">
              Olá mundo, meu nome é Vinicius Porcionato
            </h2>
            <p className="mt-3 font-open-sans text-[20px]">
              Sou um Desenvolvedor FullStack e tenho uma verdadeira paixão por
              Back-End. Adoro criar e otimizar a lógica por trás das aplicações,
              garantindo que tudo funcione de forma fluida e eficiente.
            </p>
            <button
              className={`mt-5 bg-transparent border-[3px] px-4 py-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-100 hover:text-[#02020D]"
                  : "hover:bg-[#02020D] hover:text-white dark-mode"
              } flex justify-around items-center gap-2`}
            >
              Baixar CV <IoMdDownload size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section className="my-10 px-5">
        <h3 className="text-2xl font-comfortaa-bold text-center">Sobre mim</h3>
        <div className="flex mt-[5%]">
          <div className="mt-5 md:flex md:justify-center w-[50%]">
            <p className="md:w-1/2 font-open-sans text-[20px]">
              Olá, sou o Vinicius Porcionato e sempre fui um amante de
              tecnologia ! Por ter os primeiros contatos com programação no
              ensino médio, acabei criando o curiosidade e o carinho por
              desenvolver softwares. Atualmente meu foco é desenvolver
              aplicações, com ênfase no Backend.
            </p>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="bg-transparent border-[3px] shadow-lg p-5 rounded-lg text-center flex flex-col justify-center items-center gap-2">
              <RiGraduationCapFill size={30} />
              <h4 className="font-comfortaa">Educação</h4>
              <p className="font-open-sans">
                Técnico em Desenvolvimento de sistemas - Senai Informática
              </p>
            </div>
            <div className="bg-transparent border-[3px] shadow-lg p-5 rounded-lg text-center flex flex-col justify-center items-center gap-2">
              <FaMedal size={30} />
              <h4 className="font-comfortaa">Experiência</h4>
              <p className="font-open-sans">
                Desenvolvedor Fullstack desde 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section className="my-10 px-5 py-10">
        <h3 className="text-2xl font-comfortaa-bold text-center">Habilidades</h3>
        <div className="flex justify-center items-center md:grid-cols-4 gap-4 mt-5 text-center">
          <div className="w-[75%] flex flex-col">
            <div className="flex flex-col mt-10">
              <div className="w-[100%] flex justify-start">
                <h3 className="font-comfortaa">Frontend</h3>
              </div>
              <Carousel>
                <CarouselContent className="p-3 m-1">
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaHtml5 size={20} />
                    HTML5
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaCss3Alt size={20} />
                    CSS
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaJsSquare size={20} />
                    JavaScript
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaReact size={20} />
                    React Js
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaReact size={20} />
                    React Native
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            <div className="flex flex-col mt-10">
              <div className="w-[100%] flex justify-start">
                <h3 className="font-comfortaa">Backend</h3>
              </div>
              <Carousel>
                <CarouselContent className="p-3">
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <SiCsharp size={20} />
                    C#
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <SiDotnet size={20} />
                    .NET Core
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaJava size={20} />
                    Java
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaNode size={20} />
                    Node Js
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <DiMsqlServer size={20} />
                    Sql Server
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <SiMongodb size={20} />
                    Mongo DB
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            <div className="flex flex-col mt-10">
              <div className="w-[100%] flex justify-start">
                <h3 className="font-comfortaa">Vercionamento e Planejamento</h3>
              </div>
              <Carousel>
                <CarouselContent className="p-3">
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaGitAlt size={20} />
                    Git
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaGithub size={20} />
                    GitHub
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <SiAzuredevops size={20} />
                    Azure DevOps
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <SiMicrosoftazure size={20} />
                    Azure
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaTrello size={20} />
                    Trello
                  </CarouselItem>
                  <CarouselItem className="basis-1/3 bg-[transparent] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 shadow-lg font-open-sans m-1">
                    <FaFigma size={20} />
                    Figma
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="my-10 px-5 text-center flex flex-col justify-center items-center">
        <h3 className="text-2xl font-comfortaa-bold">Contato</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 mt-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <FaPhoneAlt size={30} />
            <p>Chamada ou WhatsApp</p>
            <p>(+55) 11 93203-2962</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <FaLocationDot size={30} />
            <p>Localização</p>
            <p>São Paulo - Brasil</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <MdEmail size={30} />
            <p>Email</p>
            <p>porcionatovinicius@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-5 text-center">
        <p>© 2024 Vinicius Porcionato - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </footer>

      <div
        className={`fixed bottom-4 left-4 flex flex-col gap-2 p-3 rounded-xl ${
          darkMode ? "bg-gray-100" : "bg-[#02020D]"
        } ${darkMode ? "text-[#02020D]" : "text-white"}`}
      >
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdSunny size={20} /> : <IoIosMoon size={20} />}
        </button>
        <button onClick={toggleLanguageMenu}>
          <IoLanguage size={20} />
        </button>
        {isMenuOpen && (
          <div
            className={`absolute bottom-20 left-4 p-3 bg-white rounded-lg shadow-lg ${
              darkMode ? "text-[#02020D]" : "text-[#02020D]"
            }`}
          >
            {/* Botão idioma portugês */}
            <button
              onClick={() => toggleLanguage("pt")}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
            >
              <GiBrazilFlag size={20} />
              Português
            </button>
            {/* Botão idioma inglês */}
            <button
              onClick={() => toggleLanguage("en")}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
            >
              <LiaFlagUsaSolid size={20} />
              Inglês
            </button>
          </div>
        )}
      </div>
    </div>
  );
}