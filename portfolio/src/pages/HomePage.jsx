import Background from "../components/Background/Background";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const HomePage = () => {
  return (
    <div className="bg-[#222222] w-screen min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
