import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectSection from "./components/Projects";
import ServicesSection from "./components/Service";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Home;
