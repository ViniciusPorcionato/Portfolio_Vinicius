import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import LogoOnSight from "../../assets/images/LogoOnSight.png";
import LogoAtivements from "../../assets/images/LogoAtivements.png";
import LogoEventPlus from "../../assets/images/LogoEventPlus.png";
import LogoTechConnect from "../../assets/images/LogoTechConnect.png";
import LogoTalkIA from "../../assets/images/LogoTalkIA.png";
import LogoVitalHub from "../../assets/images/LogoVitalHub.png";

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      title: "TechConnect",
      description:
        "Rede social voltada à comunidade tech, permitindo postagens e interação entre profissionais da área.",
      link: "https://github.com/ViniciusPorcionato/Project_TechConnect",
      logo: LogoTechConnect,
    },
    {
      title: "OnSight",
      description:
        "Sistema multiplataforma de rastreamento e alocação de técnicos, desenvolvido em parceria com a CTI Brasil.",
      link: "https://github.com/ViniciusPorcionato/Project_OnSight",
      logo: LogoOnSight,
    },
    {
      title: "Ativements",
      description:
        "Plataforma web para gestão e monitoramento de ativos corporativos de forma centralizada e eficiente.",
      link: "https://github.com/ViniciusPorcionato/Project_Ativements",
      logo: LogoAtivements,
    },
    {
      title: "EventPlus",
      description:
        "Sistema web para gerenciamento de eventos institucionais, com controle de agendas e participantes.",
      link: "https://github.com/ViniciusPorcionato/Project_EventPlus",
      logo: LogoEventPlus,
    },
    {
      title: "TalkIA",
      description:
        "Aplicativo mobile que transcreve áudios em tempo real usando inteligência artificial generativa.",
      link: "https://github.com/ViniciusPorcionato/CodingDojo_Project",
      logo: LogoTalkIA,
    },
    {
      title: "VitalHub",
      description:
        "App mobile para gerenciamento de consultas médicas, busca de especialistas e agendamento rápido.",
      link: "https://github.com/ViniciusPorcionato/Project_VitalHub",
      logo: LogoVitalHub
    },
  ];

  return (
    <section id="projetos" className="relative container mx-auto mt-[10%] px-4 py-16 text-white">
      <h3 className="text-3xl font-bold mb-12 text-center">Projetos</h3>

      <div className="relative">
        {/* Botões de navegação personalizados */}
        <button
          ref={prevRef}
          className="absolute z-10 top-1/2 left-0 -translate-y-1/2 bg-zinc-800 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          ref={nextRef}
          className="absolute z-10 top-1/2 right-0 -translate-y-1/2 bg-zinc-800 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          <FaChevronRight />
        </button>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {slides.map((proj, index) => (
            <SwiperSlide key={index} className="max-w-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ amount: 0.2 }}
                className="bg-zinc-900 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all h-full shadow-xl flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(0,114,255,0.8)]"
              >
                {/* Imagem/logo */}
                {proj.logo ? (
                  <img
                    src={proj.logo}
                    alt={proj.title}
                    className="w-full h-52 object-contain p-4"
                  />
                ) : (
                  <div className="w-full h-52 flex items-center justify-center text-5xl bg-zinc-800">
                    {proj.title[0]}
                  </div>
                )}

                {/* Conteúdo */}
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-2">{proj.title}</h4>
                  <p className="text-sm text-gray-300">{proj.description}</p>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Ver Projeto
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
