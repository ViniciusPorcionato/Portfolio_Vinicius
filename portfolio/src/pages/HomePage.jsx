// src/pages/HomePage.jsx - VERSÃO CORRIGIDA E FINAL

import React from "react";
import Background from "../components/Background/Background";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ParticlesEffect from "../components/ParticlesEffect/ParticlesEffect";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const HomePage = () => {
  return (
    <div className="relative z-0 bg-[#222222] text-white">
      
      <div className="fixed inset-0 z-[-1]">
        <ParticlesEffect />
      </div>

      <div className="relative isolate"> 
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Background />
          <Projects />
          <Contact />
        </main>
      </div>

    </div>
  );
};

export default HomePage;