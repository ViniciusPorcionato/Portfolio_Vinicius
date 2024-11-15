// "use client";
// import { Header } from "@/components/Header";
// import imageProfile from "@/Assets/profileImage.jpg"
// import Image from "next/image";
// import { SocialMedia } from "@/components/SocialMedia";

// export default function Home() {
//   return (
//     <main className=" w-screen flex justify-center bg-primary-gray">
//       <div className=" w-[85%] ">

//         {/* Header da página */}
//         <Header/>

//         {/* Section Apresentação */}
//         <section className="w-[100%] mt-[100px]">
//           <div className="w-[100%] flex items-center justify-between">

//             <Image
//             className="w-[20%] rounded-[170px]"
//             src={imageProfile}
//             />

//             <div className="w-[60%]">
//               <h1 className="text-[50px] text-primary-blue font-comfortaa">Olá mundo, meu nome é Vinicius Porcionato</h1>
//               <p className="text-[30px] text-primary-blue font-open-sans mt-[20px]">Sou um Desenvolvedor FullStack e tenho uma verdadeira paixão por Back-End. Adoro criar e otimizar a lógica por trás das aplicações, garantindo que tudo funcione de forma fluida e eficiente. </p>
//             </div>

//           </div>

//           <div className="flex justify-end mt-[100px]">
//                 <SocialMedia/>
//           </div>

//         </section>

//       </div>
//     </main>
//   );
// }

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
import Logo from "../../public/Logo.png";
import profileImage from "../../public/profileImage.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-900 text-white dark-mode"
          : "bg-gray-100 text-gray-800"
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
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdSunny size={30} /> : <IoIosMoon size={30} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center mt-10 px-5 pb-[10%] border-b-2">
        <div className="w-[20%] h-[20%] rounded-full overflow-hidden mb-5 md:mb-0 md:mr-10">
          <Image
            src={profileImage}
            alt="Vinicius Porcionato"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="text-center md:text-left w-[30%]">
          <h2 className="text-3xl font-comfortaa">
            Olá mundo, meu nome é Vinicius Porcionato
          </h2>
          <p className="mt-3 font-open-sans text-[20px]">
            Sou um Desenvolvedor FullStack e tenho uma verdadeira paixão por
            Back-End. Adoro criar e otimizar a lógica por trás das aplicações,
            garantindo que tudo funcione de forma fluida e eficiente.
          </p>
          <button className="mt-5 bg-transparent border-[3px] px-4 py-2 rounded-lg hover:bg-[#03738C]">
            Baixar CV
          </button>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section className="my-10 px-5">
        <h3 className="text-2xl font-comfortaa text-center">Sobre mim</h3>
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
      <section className="my-10 px-5 bg-[#03738C] text-white py-10">
        <h3 className="text-2xl font-comfortaa text-center">Habilidades</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 text-center"></div>
      </section>

      {/* Contato Section */}
      <section className="my-10 px-5 text-center flex flex-col justify-center items-center">
        <h3 className="text-2xl font-comfortaa">Contato</h3>
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
    </div>
  );
}
